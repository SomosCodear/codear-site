import React from 'react';
import styled from 'styled-components';

const NavContainer = styled.nav`
  flex: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1.75rem 1.25rem;
  background-image: url(/images/backgrounds/nav.png);
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
    <img src="/images/brand/codear-logo-mobile.svg" alt="logo de codear" />
    <MenuButton >
      <img
        src="/icons/hamburger-menu.svg"
        alt="menu"
      />
    </MenuButton>
  </NavContainer>
);
