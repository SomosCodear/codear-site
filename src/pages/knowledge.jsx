import React from 'react';
import styled from 'styled-components';
import { BREAKPOINTS } from '../style/constants';
import { useLilac } from '../hooks';

const Content = styled.div`
  margin: 1.5rem 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h1 {
    font-size: 3rem;
    line-height: 1.1;
  }

  h2 {
    font-size: 1.875rem;
    color: var(--color-accent);
    margin-top: 0;
    padding-bottom: 1rem;
    font-weight: 400;
  }

  h3 {
    font-size: 1.5rem;
    color: var(--color-primary-lightest);
  }

  p, li {
    font-size: 1.25rem;
    font-family: Source Sans Pro, sans-serif;
    line-height: 1.5;
    color: var(--color-primary);
  }

  @media (min-width: ${BREAKPOINTS.hd}) {
    align-self: center;
    max-width: 73.75rem;
    width: 100%;

    h1 {
      font-size: 4.5rem;
    }

    h2 {
      font-size: 3rem;
    }

    p {
      margin-left: 0;
    }
  }
`;

const ProgramBanner = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 1.25rem 0 3rem;
  padding: 1.875rem;
  padding-bottom: 0;
  background-image: url(/images/backgrounds/community-desktop.png);
  background-repeat: no-repeat;
  background-position: left center;
  background-size: cover;

  h2, p {
    color: var(--color-text);
  }

  h2 {
    font-weight: 100;
    margin-bottom: 0;
    text-align: center;
  }

  lilac-button {
    align-self: center;
    position: relative;
    top: 3rem;
  }

  @media (min-width: ${BREAKPOINTS.hd}) {
    box-sizing: border-box;
    width: 100%;
    margin-top: 0;

    h2 {
      font-size: 4.5rem;
      text-align: left;
      padding-right: 5rem;
    }

    p {
      font-size: 1.5rem;
    }

    lilac-button {
      align-self: flex-end;
    }
  }
  `;

const introText = 'Estamos preparándonos para ofrecer entrenamiento a educadores que necesiten ayuda para formarse en herramientas digitales para enfrentar los desafíos de la educación on-line.';

const Comuniques = () => {
  useLilac();

  return [
    <Content>
      <h1>
      conocimiento
      </h1>
      <p>{introText}</p>
    </Content>,
    <ProgramBanner>
      <Content>
        <h2>Participá de nuestro relevamiento</h2>
        <p>Para poder ofrecer una solución que impacte en nuestra comunidad educativa, necesitamos conocer las problemáticas que se afrontan día a día. Te invitamos a sumar tu mirada completando nuestro formulario de relevamiento.</p>
        <lilac-button
          href="/surveys/online-teaching"
          target="_blank"
        >
        Quiero participar
        </lilac-button>
      </Content>
    </ProgramBanner>,
    <Content>
      <p>Próximamente anunciaremos fechas de capacitaciones on-line en gestión, administración y uso de plataformas como Google Classroom y MoodleCloud.</p>
    </Content>,
  ];
};

Comuniques.getInitialProps = async () => ({
  title: 'Conocimiento',
  meta: {
    ogTitle: 'Capacitaciones técnicas para educación digital | CoDeAr',
    ogDescription: introText,
    description: introText,
    ogUrl: 'https://codear.org/conocimiento',
    twitterTitle: 'Capacitaciones técnicas para educación digital | CoDeAr',
    twitterDescription: introText,
  },
});

export default Comuniques;
