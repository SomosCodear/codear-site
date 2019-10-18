import React from 'react';
import styled from 'styled-components';

const NavContainer = styled.nav`
  flex: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1.75rem 1.25rem;
  background-image: url(/images/nav-background.png);
  background-repeat: no-repeat;
  background-position: left center;
  background-size: cover;
`;

const MenuButton = styled.button`
  border: 0;
  background: none;
  padding: 0.25rem;
  cursor: pointer;
`;

export const Nav = () => (
  <NavContainer>
    <div>
      Codear
    </div>
    <MenuButton >
      <img
        src="/icons/hamburger-menu.svg"
        alt="menu"
      />
    </MenuButton>
  </NavContainer>
);
