import styled from 'styled-components';

export const SidebarItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: ${props => props.isCollapse ? '2.5rem' : '14.5rem'};
  height: 2.5rem;
  border-radius: 0.375rem;
  padding: 0.5rem;
  background: ${props => props.isActive ? props.theme['primary-blue-5'] : 'transparent'};
  color: ${props => props.isActive ? props.theme['white'] : props.theme['secondary-blue-5']};
  font-size: 0.875rem;
  transition: 0.2s ease-in-out;

  &:hover {
      opacity: 0.8;
      cursor: pointer;
  }

  img{
    filter: ${props => props.isActive ? 'invert(1)' : 'invert(0)'};
  }
`;