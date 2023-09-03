import { HeaderContainer, CompanyInput, CompanyContainer, IconContainer } from "./styles";
import logoDryve from '../../assets/Logo.svg';
import homeIcon from '../../assets/HomeIcon.svg';
import avatar from '../../assets/Avatar.svg';
import { CaretDown, BellSimple, Gear  } from "phosphor-react";

export function Header() {

    const companyName:string = "Dryve - Ribeirão Preto"

    return (
        <HeaderContainer>
            <CompanyContainer>
                <img src={logoDryve} alt=""></img>
                <img src={homeIcon} alt=""></img>
                <CompanyInput 
                    id="company" 
                    list="company-suggestions" 
                    value={companyName}
                />
                <datalist id="company-suggestions">
                    <option value={companyName} />
                </datalist>
                <CaretDown size={12} />
            </CompanyContainer>
            <IconContainer>
                <BellSimple size={18} />
                <Gear size={18} />
                <img src={avatar} alt=""></img>
            </IconContainer>
        </HeaderContainer>
    )
}