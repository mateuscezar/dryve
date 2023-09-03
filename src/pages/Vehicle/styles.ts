import { styled } from "styled-components";

export const VehicleHeader = styled.div`
  display: flex;
  width: 100%;
  height: 3rem;
  flex-direction: row;
  justify-content: space-between;
`;

export const LeftArea = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  svg {
    position: relative;
    left: -2.5rem;
    color: ${(props) => props.theme["neutral-7"]};
  }
`;

export const RightArea = styled.div`
  display: flex;
  gap: 1rem;
`;

export const InputSearch = styled.input`
  display: flex;
  width: 17.2rem;
  height: 2.4rem;
  color: ${(props) => props.theme["secondary-blue-5"]};
  border-radius: 0.375rem;
  border: 1px solid ${(props) => props.theme["neutral-7"]};
  padding: 0rem 2rem 0rem 1rem;

  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme["neutral-7"]};
  }
`;

const BaseButton = styled.button`
  display: flex;
  padding: 0.5rem 1rem;
  align-items: center;
  gap: 0.5rem;
  border-radius: 0.375rem;
  font-size: 0.875rem;

  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }

  &:focus {
    box-shadow: none;
  }
`;

export const ButtonFilter = styled(BaseButton)`
  background: ${(props) => props.theme["white"]};
  border: 1px solid ${(props) => props.theme["primary-blue-9"]};
  border-color: ${(props) => props.theme["primary-blue-9"]};
  color: ${(props) => props.theme["primary-blue-5"]};
`;

export const ButtonAdd = styled(BaseButton)`
  background: ${(props) => props.theme["primary-blue-5"]};
  border: 1px solid ${(props) => props.theme["primary-blue-5"]};
  border-color: ${(props) => props.theme["primary-blue-5"]};
  color: ${(props) => props.theme["white"]};
  height: 100%;
`;

export const VehicleList = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-top: 2rem;

  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;
    background-color: ${(props) => props.theme["white"]};
    border-radius: 10px;
    border: 1px solid ${(props) => props.theme["neutral-8"]};

    th {
      padding: 1rem;
      text-align: left;
      color: ${(props) => props.theme["neutral-6"]};
      font-size: 0.875rem;
      line-height: 1.6;
      font-weight: normal;
      border-bottom: 1px solid ${(props) => props.theme["neutral-8"]};

      &:first-child {
        width: 50%;
        padding-left: 1.5rem;
        text-align: left;
      }

      &:last-child {
        padding-right: 1.5rem;
      }
    }

    td {
      text-align: left;
      padding: 4px;
      font-size: 0.875rem;
      line-height: 1.6;
      border-bottom: 1px solid ${(props) => props.theme["neutral-8"]};

      svg {
        padding: 0.2rem;
        margin-top: 3px;
        color: ${(props) => props.theme["primary-blue-5"]};
        cursor: pointer;
      }

      &:first-child {
        text-align: left;
        width: 50%;
        padding-left: 1.5rem;
      }

      &:last-child {
        padding-right: 1.5rem;
      }
    }
  }
`;

export const PageButton = styled.button`
  width: 2rem;
  padding: 0.3rem;
  align-items: center;
  text-align: center;
  border-radius: 0.375rem;
  border: 1px solid ${(props) => props.theme["neutral-8"]};
  background: ${(props) => props.theme["white"]};
  line-height: 1;
  cursor: pointer;

  &:hover:not([disabled]) {
    opacity: 0.7;
  }

  &:disabled {
    background: ${(props) => props.theme["primary-blue-5"]};
    color: ${(props) => props.theme["white"]};
    cursor: default;
  }

  &:focus {
    box-shadow: none;
  }
`;

export const TableFooter = styled.div`
  display: flex;
  width: 100%;
  height: 2rem;
  gap: 0.4rem;
`;

export const TableFooterRight = styled.div`
  display: flex;
  width: 100%;
  height: 2rem;
  gap: 1rem;
  margin-top: 4px;
  flex-direction: row-reverse;
  color: ${(props) => props.theme["neutral-6"]};
`;

export const SelectTotalPerPage = styled.select`
  display: flex;
  width: 100%;
  height: 2rem;
  margin-top: 4px;
  flex-direction: row-reverse;
  color: ${(props) => props.theme["neutral-6"]};
`;

export const StyledSelect = styled.select`
  width: 2.5rem;
  height: 1.75rem;
  border-radius: 0.375rem;
  border: 1px solid ${(props) => props.theme["neutral-7"]};

  &:focus {
    box-shadow: none;
  }
`;

export const StyledOption = styled.option`
  padding: 8px;
  cursor: pointer;
  border-radius: 0.375rem;
  border: 1px solid ${(props) => props.theme["neutral-7"]};

  &:hover {
    background-color: ${(props) => props.theme["white"]};
  }
`;
