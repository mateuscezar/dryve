import { styled } from "styled-components";
import { Wrench } from "phosphor-react";

export const MaintenancePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 40rem;
  text-align: center;
`;

export const MaintenanceIcon = styled(Wrench)`
  font-size: 96px;
`;

export const MaintenanceText = styled.p`
  font-size: 24px;
  margin-top: 20px;
`;
