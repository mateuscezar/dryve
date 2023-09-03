import { SidebarContainer, SidebarFooter } from "./styles";
import { Item } from "./components/Item";
import sbBankIcon from "../../assets/sidebar-icons/Bank.svg";
import sbCalendarIcon from "../../assets/sidebar-icons/Calendar.svg";
import sbCarIcon from "../../assets/sidebar-icons/Car.svg";
import sbChartIcon from "../../assets/sidebar-icons/Chart.svg";
import sbDashboardIcon from "../../assets/sidebar-icons/Dashboard.svg";
import sPriceTagIcon from "../../assets/sidebar-icons/PriceTag.svg";
import sbUserIcon from "../../assets/sidebar-icons/User.svg";
import sbRocketIcon from "../../assets/sidebar-icons/Rocket.svg";
import { useEffect, useState } from "react";
import { ArrowLineLeft, ArrowLineRight } from "phosphor-react";
import { NavLink, useLocation } from "react-router-dom";

export function Sidebar() {
  const [activeMenu, setActiveMenu] = useState(0);
  const [collapse, setcollapse] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const curPath = window.location.pathname.split("/")[1];
    const activeItem = menus.findIndex((item) => item.route === `/${curPath}`);
    setActiveMenu(curPath.length === 0 ? 0 : activeItem);
  }, [location]);

  const handleItemSelected = (index: number) => {
    setActiveMenu(index);
  };

  const handleCollapse = () => {
    setcollapse((isCollapsed) => !isCollapsed);
  };

  const menus = [
    {
      icon: sbDashboardIcon,
      name: "Resumo",
      route: "/home",
    },
    {
      icon: sPriceTagIcon,
      name: "Oportunidades",
      route: "/promotion",
    },
    {
      icon: sbCalendarIcon,
      name: "Agenda",
      route: "/calendar",
    },
    {
      icon: sbCarIcon,
      name: "Veículos",
      route: "/vehicle",
    },
    {
      icon: sbRocketIcon,
      name: "Publicação",
      route: "/release",
    },
    {
      icon: sbUserIcon,
      name: "Contatos",
      route: "/contact",
    },
    {
      icon: sbChartIcon,
      name: "Analytics",
      route: "/analytics",
    },
    {
      icon: sbBankIcon,
      name: "Financiamento",
      route: "/financing",
    },
  ];

  return (
    <SidebarContainer isCollapse={collapse}>
      {menus.map((item, index) => (
        <NavLink to={item.route} title={item.name}>
          <Item
            key={item.name}
            {...item}
            isCollapse={collapse}
            isActive={activeMenu == index}
            onClick={() => handleItemSelected(index)}
          ></Item>
        </NavLink>
      ))}
      <SidebarFooter isCollapse={collapse}>
        {collapse && <ArrowLineRight size={18} onClick={handleCollapse} />}
        {!collapse && <ArrowLineLeft size={18} onClick={handleCollapse} />}
      </SidebarFooter>
    </SidebarContainer>
  );
}
