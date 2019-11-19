import React from 'react';
import styled from 'styled-components';
import { BREAKPOINTS } from '../style/constants';

const FooterContainer = styled.footer`
  flex: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2.5rem 1.5rem;
  background-image: url(/images/backgrounds/community-mobile.png);
  background-repeat: no-repeat;
  background-position: left 25%;
  background-size: 300%;
  color: var(--color-text);
  font-size: 0.875rem;
  font-family: Source Sans Pro;

  @media (min-width: ${BREAKPOINTS.hd}) {
    padding: 0;
    background-image: url(/images/backgrounds/footer-desktop.png);
    background-position: left top;
    background-size: cover;
  }
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media (min-width: ${BREAKPOINTS.hd}) {
    box-sizing: border-box;
    width: 80rem;
    padding: 1.75rem 3rem;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const SocialMediaContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1.5rem;

  * + * {
    margin-left: 1.5rem;
  }

  @media (min-width: ${BREAKPOINTS.hd}) {
    margin-top: 0;
  }
`;

export const Footer = () => (
  <FooterContainer>
    <FooterContent>
      © 2019 | Comunidad de Desarrolladores de Argentina
      <SocialMediaContainer>
        <a href="https://www.instagram.com/somoscodear/" target="_blank" rel="noopener noreferrer">
          <img src="/images/social-media-logos/logo-instagram.svg" alt="instagram" />
        </a>
        <a href="https://twitter.com/SomosCodear" target="_blank" rel="noopener noreferrer">
          <img src="/images/social-media-logos/logo-twitter.svg" alt="twitter" />
        </a>
      </SocialMediaContainer>
    </FooterContent>
  </FooterContainer>
);
