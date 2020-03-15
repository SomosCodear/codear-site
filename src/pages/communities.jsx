import React from 'react';
import styled from 'styled-components';
import { BREAKPOINTS } from '../style/constants';
import { URLS } from '../data/constants';
import communities from '../communities.json';
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

const Intro = styled.section`
  p {
    font-family: Source Sans Pro, sans-serif;
    color: var(--color-primary);
  }

  @media (min-width: ${BREAKPOINTS.hd}) {
    font-size: 1.5rem;
    line-height: 1.5;
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

const List = styled.ol`
  display: flex;
  list-style: none;
  margin: 0 auto;
  padding: 0;
  flex-direction: column;
  align-items: center;

  li {
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-top: 2rem;
    align-items: center;

    h4 {
      margin-top: 1rem;
      margin-bottom: 0;
      font-size: 1.5rem;
    }
  }

  @media (min-width: ${BREAKPOINTS.hd}) {
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0;
    align-items: initial;

    li {
      flex-direction: row;
      width: 50%;
    }
  }
`;

const ListDescription = styled.article`
  display: flex;
  flex-direction: column;

  @media (min-width: ${BREAKPOINTS.hd}) {
    text-align: left;
    padding: 1rem;
  }
`;

const LegalNotice = styled.section`
  margin: 2rem 0;
  text-align: justify;

  h2, p {
    font-size: 0.75rem;
    margin: 0;
    color: var(--color-primary-lightest);
  }
`;

const SocialMediaIcon = styled.img`
  filter: invert(58%) sepia(35%) saturate(857%) hue-rotate(192deg) brightness(59%) contrast(150%);
  margin-right: 0.5rem;
`;

const CommunityLogo = styled.img`
  max-width: 140px;
  max-height: 140px;

  @media (min-width: ${BREAKPOINTS.hd}) {
    margin-right: 1rem;
  }
`;

const IntroText = 'Una parte esencial de nuestra actividad como organización es el trabajo en conjunto con otras comunidades de tecnología del país. Como parte de nuestros esfuerzos por reducir la barrera de ingreso a la industria tecnológica y de fomentar la difusión abierta del conocimiento, brindamos difusión, asesoramiento y apoyo técnico en la realización de diversas actividades.';

const Communities = () => {
  useLilac();

  return [
    <Content key="first-block">
      <h1>
      comunidades
      </h1>
      <Intro>
        <p>
          {IntroText}
        </p>
      </Intro>
    </Content>,
    <ProgramBanner key="second-block">
      <Content>
        <h2>Programa de Apoyo a Comunidades de Tecnología</h2>
        <p>
        Abrimos nuestra plataforma digital basada en G Suite para Organizaciones sin
        Fines de Lucro para que tu comunidad pueda disponer de una infraestructura
        tecnológica adecuada para la realización de sus actividades,
        ya sean on-line u off-line.
        </p>
        <lilac-button
          href="/submissions/tcsp"
          target="_blank"
        >
        Sumate al programa
        </lilac-button>
      </Content>
    </ProgramBanner>,
    <Content key="third-block">
      <List>
        <li>
          <img src="/icons/chalkboard.svg" alt="Ícono de pizarra" />
          <ListDescription>
            <h4>Áula virtual</h4>
            <p>
            Podrás ofrecer cursos, talleres y workshops utilizando Google Classroom
            para contenidos educativos.
            </p>
          </ListDescription>
        </li>
        <li>
          <img src="/icons/calendar-date.svg" alt="Ícono de calendario" />
          <ListDescription>
            <h4>Calendario</h4>
            <p>
            Utilizá Google Calendar para comunicar las fechas de tus actividades
            y que las personas de tu comunidad puedan enterarse cuándo y dónde ocurrirán.
            </p>
          </ListDescription>
        </li>
        <li>
          <img src="/icons/letter.svg" alt="Ícono de sobre para correo electrónico" />
          <ListDescription>
            <h4>Correo electrónico</h4>
            <p>
            Te brindamos una cuenta de Gmail bajo el dominio @comunidades.codear.org,
            para que puedas centralizar toda la comunicación externa hacia tu
            comunidad en un único lugar.
            </p>
          </ListDescription>
        </li>
        <li>
          <img src="/icons/film.svg" alt="Ícono de cámara de video" />
          <ListDescription>
            <h4>Videollamadas</h4>
            <p>
            Con Google Meet, podrás dar webinars y organizar llamadas on-line con hasta
            100 personas en simultáneo (no incluye soporte para grabación).
            </p>
          </ListDescription>
        </li>
        <li>
          <img src="/icons/cloud-upload-96.svg" alt="Ícono de nube para carga de archivos" />
          <ListDescription>
            <h4>Nube de archivos</h4>
            <p>
            Podrás subir el material con el que trabaje tu comunidad a Google Drive,
            con una capacidad de almacenamiento de hasta 30 Gb.
            </p>
          </ListDescription>
        </li>
      </List>
      <LegalNotice>
        <h2>TÉRMINOS Y CONDICIONES DE USO</h2>
        <p>
        El uso de estos servicios implica la aceptación de los términos y condiciones de G Suite
        para Organizaciones sin Fines de Lucro. Una vez aprobada la solicitud de adhesión al
        Programa de Apoyo a Comunidades de Tecnología, la persona que actúe en representación
        de la comunidad beneficiaria recibirá las credenciales de acceso correspondientes,
        con una cuenta de G Suite bajo el dominio @comunidades.codear.org.
          <strong> RESTRICCIONES: </strong>
        El uso de esta cuenta queda exclusivamente restringido
        para las actividades y comunicaciones de la comunidad beneficiaria, no pudiendo extender
        su propósito a otros fines que no sean los declarados en la solicitud de adhesión.
          <strong> ACEPTACIÓN, DENEGACIÓN Y REVOCACIÓN DE ACCESO: </strong>
        La Comunidad de Desarrolladores de Argentina se reserva el derecho de aceptar o rechazar
        las solicitudes conforme a una evaluación caso por caso, así como también de suspender o
        revocar el acceso de manera permanente a su plataforma de servicios digitales en el caso
        de detectar comportamientos que no se correspondan con el uso previamente declarado en la
        solicitud de adhesión.
          <strong> CÓDIGO DE CONDUCTA: </strong>
        La adhesión al Programa de Apoyo a Comunidades de Tecnología implica la aceptación del
        Código de Conducta de la Comunidad de Desarrolladores de Argentina.
        </p>
      </LegalNotice>
    </Content>,
    <ProgramBanner key="fourth-block">
      <Content>
        <h2>Asamblea de Comunidades</h2>
        <p>
        Un espacio digital donde representantes de todas las comunidades de tecnología pueden
        reunirse a intercambiar ideas y coordinar esfuerzos en conjunto.
        </p>
        <lilac-button
          href="/submissions/casm"
          target="_blank"
        >
        Unite a la Asamblea
        </lilac-button>
      </Content>
    </ProgramBanner>,
    <Content key="fifth-block">
      <List>
        {communities.map(({ id, name, links }) => (
          <li key={`community_${id}`}>
            <CommunityLogo src={`/images/community-logos/${id}.png`} alt={`Logo de ${name}`} />
            <ListDescription>
              <h4>{name}</h4>
              <p>
                {links.map(({ type, username }) => (
                  <a key={`${id}_${type}_link`} href={`${URLS[type]}${username}`} target="_blank" rel="noopener noreferrer" title={`Seguí a esta comunidad en @${username}`}>
                    <SocialMediaIcon key={`${id}_${type}_icon`} src={`/images/social-media-logos/logo-${type}.svg`} alt={`Ícono de ${type}`} />
                  </a>
                ))}
              </p>
            </ListDescription>
          </li>
        ))}
      </List>
      <LegalNotice>
        <h2>TÉRMINOS Y CONDICIONES DE PARTICIPACIÓN</h2>
        <p>
        La participación en la Asamblea de Comunidades implica la aceptación los términos y
        condiciones de Slack para Organizaciones sin Fines de Lucro.
          <strong> CÓDIGO DE CONDUCTA: </strong>
        La adhesión a la Asamblea de Comunidades implica la aceptación del
        Código de Conducta de la Comunidad de Desarrolladores de Argentina.
          <strong> ACEPTACIÓN, DENEGACIÓN Y REVOCACIÓN DE ACCESO: </strong>
        La Comunidad de Desarrolladores de Argentina se reserva el derecho de aceptar o rechazar
        las solicitudes conforme a una evaluación caso por caso, así como también de suspender o
        revocar el acceso de manera permanente a la Asamblea de Comunidades en el caso
        de detectar comportamientos que no se correspondan con el Código de Conducta.
        </p>
      </LegalNotice>
    </Content>,
  ];
};

Communities.getInitialProps = async () => ({
  title: 'Comunidades',
  meta: {
    ogTitle: 'Servicios para comunidades | CoDeAr',
    ogDescription: IntroText,
    description: IntroText,
    ogUrl: 'https://codear.org/comunidades',
    twitterTitle: 'Servicios para comunidades | CoDeAr',
    twitterDescription: IntroText,
  },
});

export default Communities;
