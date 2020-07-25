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
  font-family: Source Sans Pro, sans-serif;

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
  align-items: center;
  text-align: center;

  @media (min-width: ${BREAKPOINTS.hd}) {
    box-sizing: border-box;
    width: 80rem;
    text-align: left;
    padding: 1.75rem 3rem;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const DonationContainer = styled.div`
  margin-top: 2rem;
  margin-bottom: 1rem;

  a {
    font-size: 1.1rem;
    color: var(--color-white);
    text-decoration: none;
    border-radius: 1rem;
    border-color: rgba(255, 255, 255, 0.3);
    border-width: 3px;
    border-style: solid;
    padding: 1rem;
  }

  a:hover {
    border-color: var(--color-white);
  }

  @media (min-width: ${BREAKPOINTS.hd}) {
    margin: 0;
    font-size: 1.35rem;
    border-color: rgba(255, 255, 255, 0);
  }
`;

const SocialMediaContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1.5rem;

  * + * {
    margin-left: 1.5rem;
  }

  img {
    width: 1.5rem;
    height: 1.5rem;
  }

  [href*="pscp.tv"] img {
    filter: invert(1);
  }

  @media (min-width: ${BREAKPOINTS.hd}) {
    margin-top: 0;
  }
`;

export const Footer = () => (
  <FooterContainer>
    <FooterContent>
      {`© 2019 - ${new Date().getFullYear()}`}
      <br />
      Comunidad de Desarrolladores de Argentina
      <DonationContainer>
        <a href="https://codear.org/donar" target="_blank" rel="noopener noreferrer">#TuApoyoSuma: Doná hoy</a>
      </DonationContainer>
      <SocialMediaContainer>
        <a href="https://fb.me/somoscodear/" target="_blank" rel="noopener noreferrer" title="Seguinos en Facebook">
          <img src="/images/social-media-logos/logo-facebook.svg" alt="Logo de Facebook" />
        </a>
        <a href="https://instagram.com/somoscodear/" target="_blank" rel="noopener noreferrer" title="Seguinos en Instagram">
          <img src="/images/social-media-logos/logo-instagram.svg" alt="Logo de Instagram" />
        </a>
        <a href="https://twitter.com/SomosCodear" target="_blank" rel="noopener noreferrer" title="Seguinos en Twitter">
          <img src="/images/social-media-logos/logo-twitter.svg" alt="Logo de Twitter" />
        </a>
        <a href="https://pscp.tv/SomosCodear" target="_blank" rel="noopener noreferrer" title="Seguinos en Periscope">
          <img src="/images/social-media-logos/logo-periscope.svg" alt="Logo de Periscope" />
        </a>
        <a href="https://linkedin.com/company/codear" target="_blank" rel="noopener noreferrer" title="Seguinos en LinkedIn">
          <img src="/images/social-media-logos/logo-linkedin.svg" alt="Logo de LinkedIn" />
        </a>
        <a href="https://codear.eventbrite.com/" target="_blank" rel="noopener noreferrer" title="Seguinos en Eventbrite">
          <img src="/images/social-media-logos/logo-eventbrite.svg" alt="Logo de Eventbrite" />
        </a>
        <a href="https://youtube.com/c/codear" target="_blank" rel="noopener noreferrer" title="Seguinos en YouTube">
          <img src="/images/social-media-logos/logo-youtube.svg" alt="Logo de YouTube" />
        </a>
      </SocialMediaContainer>
    </FooterContent>
  </FooterContainer>
);
