import { Header } from "../../components/Header";
import { Outlet } from 'react-router-dom';
import { LayoutContainer, OutletContainer, ContentContainer } from "./styles";
import { Sidebar } from './../../components/Sidebar';

export function DefaultLayout() {
    return (
        <LayoutContainer>
            <Header />
            <ContentContainer>
                <Sidebar />
                <OutletContainer>
                    <Outlet />
                </OutletContainer>
            </ContentContainer>
        </LayoutContainer>
    )
}