import {
  MaintenancePageContainer,
  MaintenanceIcon,
  MaintenanceText,
} from "./styles";

export function Home() {
  return (
    <MaintenancePageContainer>
      <MaintenanceIcon />
      <MaintenanceText>
        Desculpe, esta página está em manutenção.
      </MaintenanceText>
    </MaintenancePageContainer>
  );
}
