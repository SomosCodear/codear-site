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
  flex-wrap: wrap;
  justify-content: space-around;

  a {
    padding: 0.3rem;
  }

  img {
    width: 1.5rem;
    height: 1.5rem;
  }

  [href*='t.me'] img,
  [href*='github.com'] img {
    filter: invert(1) brightness(3);
  }

  [href*='cafecito'] img {
    width: auto;
  }

  @media (min-width: ${BREAKPOINTS.hd}) {
    margin-top: 0;
    flex-wrap: none;
    justify-content: normal;

    * + * {
      margin-left: 1.5rem;
    }
  }
`;

export const Footer = () => (
  <FooterContainer>
    <FooterContent>
      {`© 2019 - ${new Date().getFullYear()}`}
      <br />
      Comunidad de Desarrolladores de Argentina
      <DonationContainer>
        <a href="https://codear.org/donar" target="_blank" rel="noopener noreferrer">
          #TuApoyoSuma: Doná hoy
        </a>
      </DonationContainer>
      <SocialMediaContainer>
        <a
          href="https://instagram.com/somoscodear/"
          target="_blank"
          rel="noopener noreferrer"
          title="Seguinos en Instagram"
        >
          <img
            src="/images/social-media-logos/logo-instagram.svg"
            alt="Logo de Instagram"
          />
        </a>
        <a
          href="https://twitter.com/SomosCodear"
          target="_blank"
          rel="noopener noreferrer"
          title="Seguinos en Twitter"
        >
          <img src="/images/social-media-logos/logo-twitter.svg" alt="Logo de Twitter" />
        </a>
        <a
          href="https://linkedin.com/company/codear"
          target="_blank"
          rel="noopener noreferrer"
          title="Seguinos en LinkedIn"
        >
          <img
            src="/images/social-media-logos/logo-linkedin.svg"
            alt="Logo de LinkedIn"
          />
        </a>
        <a
          href="https://github.com/somoscodear"
          target="_blank"
          rel="noopener noreferrer"
          title="Explorá nuestro código en GitHub"
        >
          <img src="/images/social-media-logos/logo-github.svg" alt="Logo de GitHub" />
        </a>
        <a
          href="https://youtube.com/c/codear"
          target="_blank"
          rel="noopener noreferrer"
          title="Seguinos en YouTube"
        >
          <img src="/images/social-media-logos/logo-youtube.svg" alt="Logo de YouTube" />
        </a>
        <a
          href="https://t.me/somoscodear"
          target="_blank"
          rel="noopener noreferrer"
          title="Seguinos en Telegram"
        >
          <img
            src="/images/social-media-logos/logo-telegram.svg"
            alt="Logo de Telegram"
          />
        </a>
        <a href="https://cafecito.app/codear" rel="noopener noreferrer" target="_blank">
          <img
            srcSet="https://cdn.cafecito.app/imgs/buttons/button_3.png 1x, https://cdn.cafecito.app/imgs/buttons/button_3_2x.png 2x, https://cdn.cafecito.app/imgs/buttons/button_3_3.75x.png 3.75x"
            src="https://cdn.cafecito.app/imgs/buttons/button_3.png"
            alt="Invitame un café en cafecito.app"
          />
        </a>
      </SocialMediaContainer>
    </FooterContent>
  </FooterContainer>
);
