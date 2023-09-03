import {
  PageContainer,
  HeaderContainer,
  GridContainer,
  InfosArea,
  NotesArea,
  PicturesArea,
  ContactArea,
  InfosContent,
  InfosTabContainer,
  RadioInput,
  RadioGroup,
  Input,
  InputGroup,
  Line,
  InfoInlineArea,
  ButtonSelect,
  ButtonTags,
  SellingGridContainer,
  PriceMaxArea,
  PriceMinArea,
  PriceKBBArea,
  PricePersonalArea,
  ImageContainer,
  NewImage,
  ContactContainer,
  ContactAvatar,
  ContactDetails,
  FooterContainer,
  ButtonSubmit,
} from "./styles";
import { CaretLeft, Plus, X } from "phosphor-react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import Select from "react-select";
import inspect from "../../assets/Inspect.svg";
import car1 from "../../assets/images-car/1.svg";
import car2 from "../../assets/images-car/2.svg";
import car3 from "../../assets/images-car/3.svg";
import car4 from "../../assets/images-car/4.svg";
import car5 from "../../assets/images-car/5.svg";
import car6 from "../../assets/images-car/6.svg";
import car7 from "../../assets/images-car/7.svg";
import car8 from "../../assets/images-car/8.svg";
import car9 from "../../assets/images-car/9.svg";
import car10 from "../../assets/images-car/10.svg";
import car11 from "../../assets/images-car/11.svg";
import car12 from "../../assets/images-car/12.svg";
import car13 from "../../assets/images-car/13.svg";
import car14 from "../../assets/images-car/14.svg";

type FormData = {
  firstName: string;
  lastName: string;
};

export interface Option {
  readonly value: string;
  readonly label: string;
}

export function VehicleForm() {
  const [condition, setCondition] = useState("3");
  const [classification, setClassification] = useState("A");
  const [isModalTagOpen, setIsModalTagOpen] = useState(false);

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = handleSubmit((data) => console.log(data));

  const toggleModal = () => {
    setIsModalTagOpen(!isModalTagOpen);
  };

  const carAccessories: readonly Option[] = [
    { value: "alarm", label: "Alarmes" },
    { value: "floor-mats", label: "Tapetes" },
  ];

  const carFeatures: readonly Option[] = [
    { value: "single-owner", label: "Único Dono" },
  ];

  const classifications: readonly Option[] = [
    { value: "A", label: "A" },
    { value: "B", label: "B" },
    { value: "C", label: "C" },
    { value: "D", label: "D" },
    { value: "E", label: "E" },
  ];

  const conditions: readonly Option[] = [
    { value: "1", label: "Razoável" },
    { value: "2", label: "Bom" },
    { value: "3", label: "Excelente" },
  ];

  const carImagess: readonly Option[] = [
    { value: car1, label: "Imagem 1" },
    { value: car2, label: "Imagem 2" },
    { value: car3, label: "Imagem 3" },
    { value: car4, label: "Imagem 4" },
    { value: car5, label: "Imagem 5" },
    { value: car6, label: "Imagem 6" },
    { value: car7, label: "Imagem 7" },
    { value: car8, label: "Imagem 8" },
    { value: car9, label: "Imagem 9" },
    { value: car10, label: "Imagem 10" },
    { value: car11, label: "Imagem 11" },
    { value: car12, label: "Imagem 12" },
    { value: car13, label: "Imagem 13" },
    { value: car14, label: "Imagem 14" },
  ];

  return (
    <PageContainer>
      <HeaderContainer>
        <NavLink to="/vehicle" style={{ textDecoration: "none" }}>
          <CaretLeft size={18} />
        </NavLink>
        <h3>Editar veículo</h3>
      </HeaderContainer>

      <GridContainer>
        <InfosArea>
          <span>Informações</span>
          <InfosContent>
            <InfosTabContainer>
              <label>Dados do veículo</label>
              <label>Preço médio</label>
            </InfosTabContainer>

            <form onSubmit={onSubmit}>
              <fieldset>
                <legend>Dados do veículo</legend>

                <RadioGroup>
                  <RadioInput type="radio" name="options" value="new" checked />
                  0 km
                </RadioGroup>
                <RadioGroup>
                  <RadioInput type="radio" name="options" value="used" />
                  Seminovo
                </RadioGroup>

                <Line width="14.5rem">
                  <InputGroup>
                    <label>Placa</label>
                    <Input type="text" name="plate" width="6.5rem" />
                  </InputGroup>

                  <InputGroup>
                    <label>Renavam</label>
                    <Input type="text" name="renavam" width="6.5rem" />
                  </InputGroup>
                </Line>

                <Line width="100%">
                  <InputGroup>
                    <label>Marca</label>
                    <Input type="text" name="brand" width="14.5rem" />
                  </InputGroup>

                  <InputGroup>
                    <label>Modelo</label>
                    <Input type="text" name="model" width="14.9rem" />
                  </InputGroup>
                </Line>

                <Line width="100%">
                  <InputGroup>
                    <label>Carroceria</label>
                    <Input type="text" name="bodywork" width="14.5rem" />
                  </InputGroup>

                  <InputGroup>
                    <label>Ano fabricação</label>
                    <Input type="text" name="year" width="7rem" />
                  </InputGroup>

                  <InputGroup>
                    <label>Ano modelo</label>
                    <Input type="text" name="yearmodel" width="7rem" />
                  </InputGroup>
                </Line>

                <Line width="100%">
                  <InputGroup>
                    <label>Versão</label>
                    <Input type="text" name="bodywork" width="30rem" />
                  </InputGroup>
                </Line>

                <Line width="100%">
                  <InputGroup>
                    <label>Combustível</label>
                    <Input type="text" name="fuel" width="14.5rem" />
                  </InputGroup>

                  <InputGroup>
                    <label>Câmbio</label>
                    <Input type="text" name="exchange" width="14.9rem" />
                  </InputGroup>
                </Line>

                <Line width="100%">
                  <InputGroup>
                    <label>Quilometragem</label>
                    <Input type="text" name="km" width="14.5rem" />
                  </InputGroup>

                  <InputGroup>
                    <label>Cor</label>
                    <Input type="text" name="color" width="14.9rem" />
                  </InputGroup>
                </Line>
              </fieldset>

              <fieldset>
                <legend>Acessórios</legend>

                <Line width="100%">
                  <Select
                    defaultValue={[carAccessories[0]]}
                    isMulti
                    name="accs"
                    options={carAccessories}
                    styles={{
                      control: (baseStyles, state) => ({
                        ...baseStyles,
                        width: "30rem",
                        borderRadius: "6px",
                      }),
                    }}
                  />
                </Line>
              </fieldset>

              <fieldset>
                <legend>Características</legend>

                <Line width="100%">
                  <Select
                    defaultValue={[carFeatures[0]]}
                    isMulti
                    name="accs"
                    options={carFeatures}
                    styles={{
                      control: (baseStyles, state) => ({
                        ...baseStyles,
                        width: "30rem",
                        borderRadius: "6px",
                      }),
                    }}
                  />
                </Line>
              </fieldset>

              <fieldset>
                <legend>Localização</legend>

                <Line width="100%">
                  <InputGroup>
                    <label>Estado</label>
                    <Input type="text" name="brand" width="10.5rem" />
                  </InputGroup>

                  <InputGroup>
                    <label>Cidade</label>
                    <Input type="text" name="model" width="18.9rem" />
                  </InputGroup>
                </Line>
              </fieldset>

              <InfoInlineArea>
                <fieldset>
                  <legend>Classificação</legend>
                  {classifications.map((item) => (
                    <ButtonSelect
                      onClick={() => setClassification(item.value)}
                      isActive={classification == item.value}
                    >
                      {item.label}
                    </ButtonSelect>
                  ))}
                </fieldset>

                <fieldset>
                  <legend>Condição geral do veículo</legend>
                  {conditions.map((item) => (
                    <ButtonSelect
                      onClick={() => setCondition(item.value)}
                      isActive={condition == item.value}
                    >
                      {item.label}
                    </ButtonSelect>
                  ))}
                </fieldset>
              </InfoInlineArea>

              <fieldset>
                <legend>Tags</legend>
                <ButtonTags isMain onClick={toggleModal}>
                  <Plus size={12} /> Adicionar
                </ButtonTags>

                <ButtonTags>
                  <X size={12} /> Particular
                </ButtonTags>
                <ButtonTags>
                  <X size={12} /> Super Oferta
                </ButtonTags>
              </fieldset>

              <InfosTabContainer>
                <label>Avaliação de venda</label>
                <label>Avaliação de revenda</label>
                <label>Preço desejado</label>
              </InfosTabContainer>

              <SellingGridContainer>
                <PriceMaxArea>
                  <Line width="100%">
                    <InputGroup>
                      <label>Preço máximo</label>
                      <Input type="text" name="bodywork" width="14rem" />
                    </InputGroup>
                  </Line>
                </PriceMaxArea>
                <PriceMinArea>
                  <Line width="100%">
                    <InputGroup>
                      <label>Preço mínimo</label>
                      <Input type="text" name="bodywork" width="14rem" />
                    </InputGroup>
                  </Line>
                </PriceMinArea>
                <PriceKBBArea>
                  <span>Faixa de Preço KBB™</span>
                  <label>R$ 65.298 - R$ 69.298</label>
                </PriceKBBArea>
                <PricePersonalArea>
                  <span>Preço para Particular</span>
                  <label>R$ 67.264</label>
                </PricePersonalArea>
              </SellingGridContainer>
            </form>
          </InfosContent>

          <FooterContainer>
            <ButtonSubmit>Salvar</ButtonSubmit>
          </FooterContainer>
        </InfosArea>

        <NotesArea>
          <span>Notas de inspeção</span>
          <img src={inspect} alt=""></img>
        </NotesArea>

        <PicturesArea>
          <span>Fotos do veículo</span>

          <ImageContainer>
            <NewImage>
              <Plus size={12} />
              Adicionar Fotos
            </NewImage>
            {carImagess.map((image) => (
              <img src={image.value} title={image.label}></img>
            ))}
          </ImageContainer>
        </PicturesArea>

        <ContactArea>
          <span>Contatos vinculados</span>
          <ContactContainer>
            <ContactAvatar isActive>AB</ContactAvatar>
            <ContactDetails>
              <label>Alfa Bravo</label>
              <span>email@domainname.com</span>
              <span>(16) 99999-9999</span>
            </ContactDetails>

            <ContactAvatar>CD</ContactAvatar>
            <ContactDetails>
              <label>Charlie Delta</label>
              <span>email@domainname.com</span>
              <span>(16) 99999-9999</span>
            </ContactDetails>

            <ContactAvatar>EF</ContactAvatar>
            <ContactDetails>
              <label>Echo Foxtrot</label>
              <span>email@domainname.com</span>
              <span>(16) 99999-9999</span>
            </ContactDetails>
          </ContactContainer>
        </ContactArea>
      </GridContainer>
    </PageContainer>
  );
}
