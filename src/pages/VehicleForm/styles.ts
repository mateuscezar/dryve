import { styled } from "styled-components";
import { ButtonType, LineType } from "../../types/types";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  height: 3rem;
  flex-direction: row;
  align-items: center;
  gap: 1rem;

  a:focus {
    box-shadow: none;
  }

  svg {
    color: ${(props) => props.theme["primary-blue-5"]};

    &:hover {
      cursor: pointer;
      opacity: 0.8;
    }
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 34.25rem 34.25rem;
  grid-template-rows: repeat(3, 1fr);
  grid-template-areas:
    "infos notes"
    "infos pictures"
    "infos contacts";
  grid-gap: 1rem;
`;

export const BaseArea = styled.div`
  background: ${(props) => props.theme["white"]};
  border-radius: 8px;
  display: flex;
  flex-direction: column;

  span:first-child {
    padding: 1rem;
    border-bottom: 1px solid ${(props) => props.theme["neutral-8"]};
  }
`;

export const InfosArea = styled(BaseArea)`
  grid-area: infos;
  height: 84rem;
  max-width: 34.25rem;
`;

export const NotesArea = styled(BaseArea)`
  grid-area: notes;
  img {
    padding: 1rem;
  }
`;

export const PicturesArea = styled(BaseArea)`
  grid-area: pictures;
`;

export const ContactArea = styled(BaseArea)`
  grid-area: contacts;
  height: 15rem;
`;

export const InfosContent = styled.div`
  padding: 0rem 2rem;

  fieldset {
    border: none;
    margin-top: 2rem;
  }

  legend {
    color: ${(props) => props.theme["primary-blue-5"]};
    font-weight: 600;
  }
`;

export const InfosTabContainer = styled.div`
  display: flex;
  border-bottom: 1px solid ${(props) => props.theme["neutral-8"]};
  margin-top: 10px;

  label {
    padding: 1rem;
    font-size: 0.875rem;
    letter-spacing: -0.02188rem;
    color: ${(props) => props.theme["neutral-6"]};
  }

  label:first-child {
    cursor: pointer;
    color: ${(props) => props.theme["primary-blue-5"]};
    font-weight: 600;
    border-bottom: 3px solid ${(props) => props.theme["primary-blue-5"]};
  }
`;

export const RadioInput = styled.input`
  appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid ${(props) => props.theme["neutral-7"]};
  border-radius: 50%;
  outline: none;
  cursor: pointer;

  &:focus {
    box-shadow: none;
  }

  &:checked {
    border: 6px solid ${(props) => props.theme["primary-blue-5"]};
  }
`;

export const RadioGroup = styled.label`
  padding-top: 2rem;
  padding-right: 1.5rem;
  padding-bottom: 3rem;
  height: 2rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
`;

export const BaseInput = styled.input`
  border-radius: 6px;
  height: 2.375rem;
  border: 2px solid ${(props) => props.theme["neutral-7"]};
  padding: 1rem;
  height: 2.375rem;

  &:focus {
    box-shadow: none;
    border: 2px solid ${(props) => props.theme["primary-blue-5"]};
  }
`;

export const InputGroup = styled.div`
  position: relative;
  display: table-cell;

  label {
    position: absolute;
    top: -10px;
    left: 10px;
    padding: 2px;
    z-index: 1;
    color: ${(props) => props.theme["neutral-6"]};
    font-size: 0.875rem;
    letter-spacing: -0.02188rem;
    font-weight: 500;
    display: inline-block;
    margin-bottom: 0.5rem;
  }

  label:after {
    content: " ";
    background-color: ${(props) => props.theme["white"]};
    width: 100%;
    height: 13px;
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: -1;
  }
`;

export const Input = styled(BaseInput)`
  display: flex;
  width: ${(props) => props["width"]};
`;

export const Line = styled.div<LineType>`
  display: flex;
  width: ${(props) => props["customWidth"]};
  padding: 0.5rem 0rem;
  justify-content: space-between;
`;

export const InfoInlineArea = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 4%;

  fieldset {
    padding-top: 0.5rem;
    width: 48%;
  }
`;

export const ButtonSelect = styled.div<ButtonType>`
  display: inline-flex;
  padding: 0.5rem 1rem;
  flex-direction: column;
  align-items: center;
  border-radius: 31.25rem;
  letter-spacing: -0.03rem;
  font-size: 12px;
  margin-left: 0.1rem;
  background: ${(props) =>
    props.isActive ? props.theme["primary-blue-5"] : props.theme["neutral-8"]};
  color: ${(props) =>
    props.isActive ? props.theme["white"] : props.theme["secondary-blue-5"]};

  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;

export const ButtonTags = styled.div<ButtonType>`
  display: inline-flex;
  padding: 0.5rem 1rem;
  margin-top: 8px;
  flex-direction: row;
  align-items: center;
  border-radius: 0.375rem;
  letter-spacing: -0.02rem;
  font-size: 12px;
  margin-right: 0.6rem;
  font-weight: 600;
  gap: 0.5rem;
  border: 1px solid
    ${(props) =>
      props.isMain ? props.theme["primary-blue-9"] : props.theme["neutral-9"]};
  background: ${(props) =>
    props.isMain ? props.theme["white"] : props.theme["neutral-9"]};
  color: ${(props) =>
    props.isMain
      ? props.theme["primary-blue-5"]
      : props.theme["secondary-blue-5"]};

  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;

export const SellingGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-template-areas:
    "priceMax priceKBB"
    "prixeMin pricePersonal";
  padding: 1rem 0rem;
`;

export const PriceMaxArea = styled.div`
  grid-area: priceMax;
`;

export const PriceMinArea = styled.div`
  grid-area: prixeMin;
`;

export const PriceBaseGroup = styled.div`
  height: 3.4rem;
  font-size: 0.9rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  letter-spacing: -0.01875rem;
  border: none;

  span {
    padding: 0rem !important;
    border: none !important;
  }

  label {
    font-weight: 600;
    border: none;
  }
`;

export const PriceKBBArea = styled(PriceBaseGroup)`
  grid-area: priceKBB;
  background: ${(props) => props.theme["green"]};
  border: 1px solid ${(props) => props.theme["neutral-7"]};
  border-radius: 0.375rem 0.375rem 0rem 0rem;
  color: ${(props) => props.theme["white"]};
`;

export const PricePersonalArea = styled(PriceBaseGroup)`
  grid-area: pricePersonal;
  border: 1px solid ${(props) => props.theme["neutral-7"]};
  border-radius: 0rem 0rem 0.375rem 0.375rem;
`;
export const NewImage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  justify-content: center;
  align-items: center;
  width: 122px;
  height: 86px;
  margin-right: 4px;
  border-radius: 0.3125rem;
  border: 1px dashed ${(props) => props.theme["neutral-7"]};
  background: ${(props) => props.theme["primary-blue-10"]};
  color: ${(props) => props.theme["primary-blue-5"]};
  font-size: 0.75rem;
  line-height: 0.75rem;
  letter-spacing: -0.01875rem;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 1rem 1.3rem;

  img {
    width: 126px;
    height: 90px;
  }
`;

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 2rem;
  overflow: overlay;
`;

export const ContactAvatar = styled.div<ButtonType>`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 4rem;
  height: 4rem;
  background: ${(props) => props.theme["primary-blue-10"]};
  border: ${(props) => (props.isActive ? "1px" : "0px")} solid
    ${(props) => props.theme["primary-blue-5"]};
  border-radius: 50%;
  color: ${(props) => props.theme["primary-blue-5"]};
`;

export const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  width: 12rem;
  height: 4rem;
  padding: 0rem 0.5rem;

  label {
    color: ${(props) => props.theme["secondary-blue-5"]};
    font-size: 1rem;
    line-height: 0.875rem;
    letter-spacing: -0.02188rem;
  }

  span {
    color: ${(props) => props.theme["neutral-5"]};
    font-size: 0.8rem;
    line-height: 1rem;
    letter-spacing: -0.01875rem;
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 100%;
  height: 5rem;
  padding: 2rem;

  border-top: 1px solid ${(props) => props.theme["neutral-8"]};
`;

export const ButtonSubmit = styled.div`
  display: inline-flex;
  padding: 0.5rem 1rem;
  width: 6rem;
  height: 2.5rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 0.875rem;
  letter-spacing: -0.02188rem;
  background: ${(props) => props.theme["primary-blue-5"]};
  color: ${(props) => props.theme["white"]};

  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;
