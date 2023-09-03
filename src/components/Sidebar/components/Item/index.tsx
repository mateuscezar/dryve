import { SidebarItem } from "./styles";

interface SidebarItem {
  icon: string;
  name: string;
  isActive: boolean;
  isCollapse: boolean;
  onClick: () => void;
}

export function Item({
  icon,
  name,
  isActive,
  isCollapse,
  onClick,
}: SidebarItem) {
  return (
    <SidebarItem
      isActive={isActive}
      isCollapse={isCollapse}
      onClick={() => onClick()}
    >
      <img src={icon} alt="" style={{ width: 24 }}></img>
      {!isCollapse ? name : ""}
    </SidebarItem>
  );
}
