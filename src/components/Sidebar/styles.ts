import styled from "styled-components";

export const SidebarContainer = styled.nav`
  width: ${(props) => (props.isCollapse ? "6rem" : "18rem")};
  max-height: 89rem;
  background: ${(props) => props.theme["white"]};
  display: inline-flex;
  margin-top: 6px;
  padding: 1.5rem;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  transition: 0.2s ease-in-out;

  a {
    border: none;
    text-decoration: none;
  }

  a:focus {
    box-shadow: none;
  }
`;

export const SidebarFooter = styled.div`
  display: flex;
  position: relative;
  bottom: 0px;
  align-items: end;
  width: 14.5rem;
  height: 100%;
  justify-content: ${(props) => (props.isCollapse ? "start" : "end")};
  padding: ${(props) => (props.isCollapse ? "0.5rem" : "0rem")};
  transition: 0.2s ease-in-out;

  svg:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;
