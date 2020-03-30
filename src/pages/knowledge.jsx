import React from 'react';
import styled from 'styled-components';
import { BREAKPOINTS } from '../style/constants';
import { useLilac } from '../hooks';
import webinars from '../webinars.json';

const Content = styled.div`
  margin: 1.5rem 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h1 {
    font-size: 3rem !important;
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

  lilac-button {
    align-self: center;
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

    lilac-button {
      align-self: flex-end;
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

const Webinar = styled.article`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  padding: 3rem 0;

  & + & {
    border-top: 1px solid var(--color-accent);
  }

  h3 {
    margin-top: 0;
    margin-bottom: 0.5rem;
    text-align: center;
    align-self: center;
  }

  lilac-button {
    align-self: center;
  }

  & > a {
    align-self: center;
  }

  img {
    width: 100%;
    margin-bottom: 1.5rem;
    align-self: center;
  }

  @media (min-width: ${BREAKPOINTS.hd}) {
    img {
      max-width: 50rem;
    }

    lilac-button {
      width: 20rem;
      align-self: flex-end;
    }
  }
`;

const DateTime = styled.div`
  margin: 0;
  font-weight: bold;
  font-size: 1rem;
  align-self: center;
`;

const Description = styled.section`
  text-align: justify;
  font-size: 1rem;
  line-height: 1.5rem;
  margin: 2rem 0;

  @media (min-width: ${BREAKPOINTS.hd}) {
    border-left: 10px solid var(--color-accent);
    padding-left: 3rem;
  }
`;

const Links = styled.nav`
  margin: 0;
  padding: 0;
  display: flex;
  flex-flow: row;
  align-self: flex-end;

  lilac-button {
    align-self: flex-start;
  }

  lilac-button + lilac-button {
    margin-left: 1rem;
  }
`;

const introText = 'Estamos preparándonos para ofrecer entrenamiento a educadores que necesiten ayuda para formarse en herramientas digitales para enfrentar los desafíos de la educación on-line.';

const Knowledge = () => {
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
        <h2>#EncuentrosCodear</h2>
      </Content>
    </ProgramBanner>,
    <Content>
      {webinars.map(({
        dateText, dateJson, name, description, links, image,
      }) => (
        <Webinar key={dateJson}>
          <a href={links.recording || links.signup}>
            <img src={`/images/webinars/${image}`} alt={`Imagen del evento: ${name}`} />
          </a>
          <h3>{name}</h3>
          <DateTime>{dateText}</DateTime>
          <Description>{description}</Description>
          <Links>
            {new Date().valueOf() < Date.parse(dateJson) && (
              <lilac-button
                target="_blank"
                color="secondary"
                href={links.signup}
              >
                Inscribite al evento
              </lilac-button>
            )}
            {links.recording && new Date().valueOf() > Date.parse(dateJson) && (
              <lilac-button
                target="_blank"
                color="secondary"
                href={links.recording}
              >
                Reviví el encuentro
              </lilac-button>
            )}
            {links.extra && links.extra.href && (
              <lilac-button
                target="_blank"
                href={links.extra.href}
              >
                {links.extra.label}
              </lilac-button>
            )}
          </Links>
        </Webinar>
      ))}
    </Content>,
    <ProgramBanner>
      <Content>
        <h2>edupunto.</h2>
        <p>
          Abrimos este espacio para proponer herramientas, plataformas
          tecnológicas, conocimiento y experiencias que creemos que pueden sumar a la
          transformación digital de la educación.
        </p>
        <lilac-button
          href="https://edu.codear.org"
          target="_blank"
        >
          Visitá edupunto
        </lilac-button>
      </Content>
    </ProgramBanner>,
    <Content>
      <p>
        Esta iniciativa surge a partir de las conversaciones que tuvieron lugar en el primer
        #EncuentroCodear de 2020, donde nos reunimos con docentes y educadores de diversos
        puntos del país para discutir dónde nos encontramos hoy en día y hacia dónde podemos ir.
      </p>
      <p>
        Publicaremos contenido frecuentemente para acompañar este proceso repentino de
        transformación de la educación, centralizando en este portal buenas prácticas,
        ideas, herramientas y más.
      </p>
    </Content>,
  ];
};

Knowledge.getInitialProps = async () => ({
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

export default Knowledge;
