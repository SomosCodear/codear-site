import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Logo = styled.img``;

const Menu = styled.ul`
  display: none;
  flex-direction: row;
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
`;

const MenuItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 15px;
  &:last-child {
    margin-bottom: 0;
  }
`;

const MenuLink = styled.a`
  display: block;
  width: 240px;
  border: 1px solid white;
  border-radius: 10px;
  font-family: Source Sans Pro;
  font-weight: bold;
  font-size: 24px;
  text-align: center;
  text-decoration: none;
  color: white;
  line-height: 40px;
`;

const MenuOpenButton = styled.a`
  display: inline-block;
  padding: 0.25rem;
`;

const MenuCloseButton = styled.a`
  display: inline-block;
  padding: 0.25rem;
  position: absolute;
  top: 30px;
  right: 20px;
`;

const NavContainer = styled.nav`
  flex: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 1.75rem 1.25rem;
  background-image: url(/images/backgrounds/nav.png);
  background-repeat: no-repeat;
  background-position: left center;
  background-size: cover;
  ${MenuCloseButton} {
    display: none;
  }
  &:target {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 1000;
    left: 0;
    top: 0;
    background-image: url(/images/backgrounds/menu.png);
    background-repeat: no-repeat;
    background-position: -1px -1px;
    background-size: auto;
    ${Logo} {
      position: absolute;
    }
    ${Menu} {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    ${MenuCloseButton} {
      display: inline-block;
    }
    ${MenuOpenButton} {
      display: none;
    }
  }
`;

const MenuContainer = styled.div`
  position: fixed;
  display: none;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  z-index: 1000;
  left: 0;
  top: 0;
  background-image: url(/images/backgrounds/menu.png);
  background-repeat: no-repeat;
  background-position: -1px -1px;
  &:target {
    display: flex;
  }
`;

const MENU_OPTIONS = [
  {
    page: 'about',
    path: 'conocenos',
    label: 'conocenos',
  },
  {
    page: 'schedule',
    path: 'agenda',
    label: 'agenda',
  },
  {
    page: 'projects',
    path: 'proyectos',
    label: 'proyectos',
  },
  {
    page: 'coc',
    path: 'codigo-de-conducta',
    label: 'código de conducta',
  },
];

export const Nav = () => (
  <NavContainer id="menu">
    <Logo src="/images/brand/codear-logo-mobile.svg" alt="logo de codear" />
    <Menu>
      {MENU_OPTIONS.map((option) => (
        <MenuItem key={option.path}>
          <Link href={`/${option.page}`} as={`/${option.path}`}>
            <MenuLink
              href={`/${option.path}`}
              title={option.label}
            >{option.label}</MenuLink>
          </Link>
        </MenuItem>
      ))}
    </Menu>
    <MenuOpenButton href="#menu" title="Abrir menu">
      <img
        src="/icons/hamburger-menu.svg"
        alt="Abrir menu"
      />
    </MenuOpenButton>
    <MenuCloseButton href="#" title="Cerrar menu">
      <img
        src="/icons/chevron-up.svg"
        alt="Cerrar menu"
      />
    </MenuCloseButton>
  </NavContainer>
);
