import { styled } from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    padding: 1.25rem 1.5rem;
    background: ${props => props.theme['white']};
    justify-content: space-between;
    gap: 0.4rem;
    box-shadow: 0px 6px 4px 0px ${props => props.theme['neutral-8']};
`;

export const CompanyContainer = styled.div`
    align-items: center;
    display: flex;
    gap: 0.4rem;
`;

export const IconContainer = styled.div`
    align-items: center;
    display: flex;
    gap: 1rem;

    img {
        align-items: center;
        border: 1px solid;
        border-radius: 50%;
        padding: 1.5px;
        border-color: ${props => props.theme['primary-blue-5']};;

    }
`;


export const CompanyInput = styled.input`
    background: transparent;
    width: 8.5rem;
    
    border: 0;
    
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 500;
    line-height: 100%; 
    letter-spacing: -0.02188rem;

    &:focus {
        box-shadow: none;
        border-color: ${props => props.theme["neutral-6"]}
    }

    &::-webkit-calendar-picker-indicator {
        display: none !important;
    }
`;