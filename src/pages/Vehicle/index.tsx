import {
  VehicleHeader,
  LeftArea,
  RightArea,
  InputSearch,
  ButtonFilter,
  ButtonAdd,
  VehicleList,
  PageButton,
  TableFooter,
  TableFooterRight,
  StyledSelect,
  StyledOption,
} from "./styles";
import {
  MagnifyingGlass,
  SlidersHorizontal,
  Plus,
  CaretRight,
  CaretLeft,
} from "phosphor-react";
import { FieldInfo } from "./components/FieldInfo/";
import axios from "axios";
import { useEffect, useState } from "react";
import { VehicleModel } from "../../types/interfaces";
import { NavLink } from "react-router-dom";

export function Vehicle() {
  const [search, setSearch] = useState("");
  const [vehicles, setVehicles] = useState([] as VehicleModel[]);
  const [filtered, setVehiclesFiltered] = useState([] as VehicleModel[]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPerPage, setTotalPerPage] = useState(5);
  const startIndex = (currentPage - 1) * totalPerPage;
  const endIndex = currentPage * totalPerPage;
  const totalPages = Math.ceil(filtered.length / totalPerPage);

  const showPages = [];
  const pagesCount = 5;
  const totalShowed = totalPerPage * currentPage;
  const totalShowedMax =
    totalShowed > filtered.length ? filtered.length : totalShowed;
  const options = Array.from(
    { length: filtered.length < 10 ? filtered.length : 10 },
    (_, index) => `${index + 1}`
  );

  let strart = Math.max(1, currentPage - Math.floor(pagesCount / 2));
  const end = Math.min(totalPages, strart + pagesCount - 1);

  if (end - strart + 1 < pagesCount) {
    strart = Math.max(1, end - pagesCount + 1);
  }

  for (let i = strart; i <= end; i++) {
    showPages.push(i);
  }

  useEffect(() => {
    axios
      .get("https://www.mocky.io/v2/5eb553df31000060006994a8")
      .then((response) => {
        setVehicles(response.data);
        setVehiclesFiltered(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar dados da API:", error);
      });
  }, []);

  const handleFilter = () => {
    if (search.length > 0) {
      const newList = vehicles.filter((item) => {
        return (
          item.model_name.toLowerCase().includes(search) ||
          item.brand_name.toLowerCase().includes(search) ||
          item.name.toLowerCase().includes(search) ||
          item.manufacturing_year.toString().includes(search) ||
          item.model_year.toString().includes(search) ||
          item.fuel_type.toLowerCase().includes(search) ||
          item.mileage.toString().includes(search) ||
          item.ad_selling_price.toString().includes(search)
        );
      });
      setVehiclesFiltered(newList);
    } else {
      setVehiclesFiltered(vehicles);
    }
  };

  const nextPage = () => {
    if (currentPage < Math.ceil(filtered.length / totalPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
      <VehicleHeader>
        <LeftArea>
          <h2>Veículos</h2>
          <InputSearch
            placeholder="Buscar..."
            value={search}
            onChange={(event) => {
              setSearch(event.target.value);
              handleFilter();
            }}
          />
          <MagnifyingGlass size={18} />
        </LeftArea>
        <RightArea>
          <ButtonFilter onClick={handleFilter}>
            <SlidersHorizontal size={18} />
            <b>Filtrar</b>
          </ButtonFilter>

          <NavLink to="/vehicle/new" style={{ textDecoration: "none" }}>
            <ButtonAdd>
              <Plus size={18} />
              <b>Adicionar</b>
            </ButtonAdd>
          </NavLink>
        </RightArea>
      </VehicleHeader>

      <VehicleList>
        <table>
          <thead>
            <tr>
              <th>Dados do veículo</th>
              <th>REF</th>
              <th>Placa</th>
              <th>Data</th>
            </tr>
          </thead>
          <tbody>
            {filtered.slice(startIndex, endIndex).map((vehicle) => (
              <tr>
                <td>
                  <FieldInfo {...vehicle} />
                </td>
                <td>Ref</td>
                <td>Plate</td>
                <td>01/01/2023</td>
              </tr>
            ))}
            <tr>
              <td colSpan={5}>
                <TableFooter>
                  {currentPage > 1 && (
                    <CaretLeft size={24} onClick={previousPage} />
                  )}
                  {currentPage > 3 && (
                    <>
                      <PageButton
                        onClick={() => goToPage(1)}
                        disabled={currentPage === 1}
                      >
                        1
                      </PageButton>
                      <PageButton>...</PageButton>
                    </>
                  )}

                  {showPages.map((pageNumber) => (
                    <PageButton
                      key={pageNumber}
                      onClick={() => goToPage(pageNumber)}
                      disabled={currentPage === pageNumber}
                    >
                      {pageNumber}
                    </PageButton>
                  ))}

                  {currentPage < totalPages - 2 && (
                    <>
                      <PageButton>...</PageButton>
                      <PageButton
                        onClick={() => goToPage(totalPages)}
                        disabled={currentPage === totalPages}
                      >
                        {totalPages}
                      </PageButton>
                    </>
                  )}

                  {currentPage < totalPages && (
                    <CaretRight size={24} onClick={nextPage} />
                  )}

                  <TableFooterRight>
                    <StyledSelect
                      value={totalPerPage}
                      onChange={(event) => {
                        setTotalPerPage(parseInt(event.target.value));
                        setCurrentPage(1);
                      }}
                    >
                      {options.map((option, index) => (
                        <StyledOption key={index} value={option}>
                          {option}
                        </StyledOption>
                      ))}
                    </StyledSelect>

                    <label>
                      Exibindo {totalShowedMax} de {filtered.length} registros
                    </label>
                  </TableFooterRight>
                </TableFooter>
              </td>
            </tr>
          </tbody>
        </table>
      </VehicleList>
    </>
  );
}
