import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { BREAKPOINTS } from '../style/constants';
import { MENU } from '../data/constants';

const LogoMobile = styled.img`
  display: block;

  @media (min-width: ${BREAKPOINTS.hd}) {
    display: none;
  }
`;

const LogoDesktop = styled.img`
  display: none;

  @media (min-width: ${BREAKPOINTS.hd}) {
    display: block;
  }
`;

const Menu = styled.ul`
  display: none;
  flex-direction: row;
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;

  @media (min-width: ${BREAKPOINTS.hd}) {
    display: flex;
    height: auto;
    width: auto;
    margin-left: 5rem;
  }
`;

const MenuItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 0.9375rem;

  a {
    display: block;
    width: 15rem;
    border: 0.0625rem solid var(--color-text);
    border-radius: 0.625rem;
    font-family: Source Sans Pro;
    font-weight: bold;
    font-size: 1.5rem;
    text-align: center;
    text-decoration: none;
    color: var(--color-text);
    line-height: 2.5rem;
  }

  &:last-child {
    margin-bottom: 0;
  }

  @media (min-width: ${BREAKPOINTS.hd}) {
    margin: 0;

    a {
      width: auto;
      border: none;
      color: var(--color-primary);
    }

    & + & {
      margin-left: 3rem;
    }
  }
`;

const MenuOpenButton = styled.a`
  display: inline-block;
  padding: 0.25rem;

  @media (min-width: ${BREAKPOINTS.hd}) {
    display: none;
  }
`;

const MenuCloseButton = styled.a`
  display: none;
  padding: 0.25rem;
  position: absolute;
  top: 1.875rem;
  right: 1.25rem;
`;

const NavContainer = styled.nav`
  position: sticky;
  top: 0;
  z-index: 200;
  flex: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 1.75rem 1.25rem;
  background-image: url(/images/backgrounds/nav-mobile.png);
  background-repeat: no-repeat;
  background-position: left center;
  background-size: cover;

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
    background: linear-gradient(var(--color-secondary), var(--color-primary));

    ${LogoMobile} {
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

  @media (min-width: ${BREAKPOINTS.hd}) {
    position: unset;
    top: unset;
    z-index: unset;
    align-self: center;
    width: 80rem;
    padding: 2rem 3rem;
    justify-content: flex-start;
    background: none;
  }
`;

export const Nav = () => (
  <NavContainer id="menu">
    <Link href="/">
      <a href="/" title="inicio">
        <LogoMobile src="/images/brand/codear-logo-mobile.svg" alt="logo de codear" />
        <LogoDesktop src="/images/brand/codear-logo-desktop.svg" alt="logo de codear" />
      </a>
    </Link>
    <Menu>
      {MENU.map((option) => (
        <MenuItem key={option.path}>
          <Link href={option.path}>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a title={option.label}>
              {option.label}
            </a>
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
