import { VehicleModel } from "../../../../types/interfaces";
import { FieldContainer, FieldDetail } from "./styles";

export function FieldInfo(vehicle: VehicleModel) {
  const formatNumber = (value: number) => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  return (
    <FieldContainer>
      <img src={vehicle.image}></img>
      <FieldDetail>
        <label>
          <b>
            {`${vehicle.brand_name.toUpperCase()} ${vehicle.model_name.toUpperCase()}`}
          </b>
        </label>
        <label>{vehicle.name.toUpperCase()}</label>
        <label>{`${vehicle.manufacturing_year}/${vehicle.model_year} • ${vehicle.fuel_type}`}</label>
        <label>
          {`${formatNumber(vehicle.mileage)} km • `}
          <span>R$: {formatNumber(vehicle.ad_selling_price)}</span>
        </label>
      </FieldDetail>
    </FieldContainer>
  );
}
