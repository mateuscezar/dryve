import styled from "styled-components";

export const FieldContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 1rem;

  line-height: 1;
  letter-spacing: -0.01875rem;

  img {
    width: 6rem;
    height: 4.5rem;
    border-radius: 0.25rem;
    border: 1px solid ${(props) => props.theme["neutral-8"]};
  }
`;

export const FieldDetail = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: start;

  span {
    color: ${(props) => props.theme["primary-blue-5"]};
    font-size: 0.75rem;
    font-style: normal;
    letter-spacing: -0.01875rem;
    font-weight: 600;
  }
`;
