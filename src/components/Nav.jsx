import Link from 'next/link';
import { withRouter } from 'next/router';
import React, { useState, useCallback, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { MENU } from '../data/constants';
import { BREAKPOINTS } from '../style/constants';
import { enableScroll, disableScroll } from '../utils/scroll';

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
    font-family: Source Sans Pro, sans-serif;
    font-weight: bold;
    font-size: 1.5rem;
    text-align: center;
    text-decoration: none;
    color: var(--color-text);
    line-height: 2.5rem;
    transition: color linear 100ms;
    text-transform: lowercase;
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

      &:after {
        content: '';
        display: block;
        width: 0%;
        margin-left: 50%;
        height: 3px;
        transition: width linear 100ms;
      }

      &:hover {
        color: var(--color-primary-lightest);
        padding-bottom: 0;

        &:after {
          width: 50%;
          background: linear-gradient(90deg, #ffffff, var(--color-primary-lightest));
        }
      }

      &.current {
        color: var(--color-secondary);

        &:after {
          width: 50%;
          background: linear-gradient(90deg, #ffffff, var(--color-secondary));
        }
      }
    }

    & + & {
      margin-left: 3rem;
    }
  }
`;

const MenuOpenButton = styled.button`
  display: inline-block;
  padding: 0.25rem;
  background: transparent;
  border: 0;

  @media (min-width: ${BREAKPOINTS.hd}) {
    display: none;
  }
`;

const MenuCloseButton = styled.button`
  display: none;
  padding: 0.25rem;
  position: absolute;
  top: 1.875rem;
  right: 1.25rem;
  background: transparent;
  border: 0;
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

  ${({ open }) => open && css`
    display: block;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 1000;
    left: 0;
    top: 0;
    background: linear-gradient(90deg, var(--color-primary), var(--color-secondary));

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
  `}

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

export const Nav = withRouter(({ router }) => {
  const [open, setOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setOpen((isOpen) => !isOpen);
  }, []);

  useEffect(() => {
    if (open) {
      disableScroll();
    }

    return enableScroll;
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [router.route]);

  return (
    <NavContainer open={open}>
      <Link href="/">
        <a href="/" title="Inicio">
          <LogoMobile src="/images/brand/codear-logo-mobile.svg" alt="Logo de CoDeAr" />
          <LogoDesktop src="/images/brand/codear-logo-desktop.svg" alt="Logo de CoDeAr" />
        </a>
      </Link>
      <Menu>
        {MENU.map((option) => (
          <MenuItem key={option.path}>
            <Link href={option.page} as={option.path}>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a alt={option.label} className={router.asPath === option.path ? 'current' : ''}>
                {option.label}
              </a>
            </Link>
          </MenuItem>
        ))}
      </Menu>
      <MenuOpenButton title="Abrir menu" onClick={toggleMenu}>
        <img
          src="/icons/hamburger-menu.svg"
          alt="Abrir menu"
        />
      </MenuOpenButton>
      <MenuCloseButton title="Cerrar menu" onClick={toggleMenu}>
        <img
          src="/icons/chevron-up.svg"
          alt="Cerrar menu"
        />
      </MenuCloseButton>
    </NavContainer>
  );
});
