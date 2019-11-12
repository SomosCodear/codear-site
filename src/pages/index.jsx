import React, { useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import events from '../events.json';
import { ABOUT } from '../data/constants';
import { Container, Content } from '../components/Container';
import { Calendar } from '../components/Calendar';

const CommunitiesSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;

  h1 {
    font-size: 3.25rem;
  }

  @media (min-width: 80rem) {
    flex-direction: row;
    justify-content: center;
    padding: 1.5rem 0;
    background-image: url(/images/backgrounds/community-desktop.png);
    background-repeat: no-repeat;
    background-position: left center;
    background-size: cover;

    h1:first-child {
      box-sizing: border-box;
      width: 55rem;
      padding: 0 3rem;
      font-size: 4.5rem;
      color: var(--color-text);
    }
  }
`;

const CommunitiesBanner = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 1.25rem;
  padding: 1.875rem;
  background-image: url(/images/backgrounds/community-mobile.png);
  background-repeat: no-repeat;
  background-position: left center;
  background-size: cover;

  img + img {
    margin-left: 0.5rem;
  }

  @media (min-width: 80rem) {
    box-sizing: border-box;
    width: 25rem;
    margin-top: 0;
    background: none;
  }
`;

const ProjectsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 80rem) {
    padding-right: 3rem;
  }
`;

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2.5rem 4.5rem;

  p {
    margin: 2rem 0;
    font-family: Source Sans Pro;
    color: var(--color-primary);
    text-align: center;
  }
`;

const PhotosContainer = styled.div`
  align-self: stretch;
  margin: 2.5rem 0.5rem 0;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, 6.5rem);
  grid-auto-rows: 6.5rem;
  grid-gap: 0.5rem;

  a {
    text-decoration: none;
    color: var(--color-secondary);
  }

  @media (min-width: 80rem) {
    grid-template-columns: repeat(5, 6.5rem);
    justify-content: flex-start;
    margin: 0;
  }
`;

const PhotoStrut = styled.div`
  display: none;

  @media (min-width: 80rem) {
    display: block;
  }
`;

const MeetTheTeam = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  border: 0.0625rem solid var(--color-secondary);
  border-radius: 0.625rem;
  font-family: Source Sans Pro;
  font-size: 0.875rem;
  text-align: center;
`;

const UsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2.5rem;

  p {
    margin: 2.5rem 2.5rem 0;
    font-family: Source Sans Pro;
    color: var(--color-primary);
    text-align: center;
  }

  @media (min-width: 80rem) {
    padding: 0 3rem;
    display: grid;
    align-items: flex-start;
    grid-template-columns: 0.4fr 0.6fr;
    grid-template-rows: min-content 1fr;
    grid-gap: 0 7rem;
    grid-template-areas:
      "   title    photos"
      "description photos";
    margin: 4rem 0;

    h1 {
      grid-area: title;
    }

    p {
      grid-area: description;
      margin: 2rem 0 0;
      text-align: left;
      font-size: 1.5rem;
    }

    ${PhotosContainer} {
      grid-area: photos;
    }
  }
`;

const LandingContainer = styled(Container)`
  ${Content} {
    @media (min-width: 45rem) {
      lilac-calendar {
        align-self: center;
      }
    }

    @media (min-width: 80rem) {
      display: grid;
      grid-template-columns: 1fr 53rem 27rem 1fr;
      grid-template-areas:
        "     .       calendar    projects        .     "
        "communities communities communities communities"
        "     .          us          us           .     ";

      lilac-calendar {
        grid-area: calendar;
        padding-left: 3rem;
      }

      ${ProjectsSection} {
        grid-area: projects;
      }

      ${CommunitiesSection} {
        grid-area: communities;
      }

      ${UsSection} {
        grid-area: us;
      }
    }
  }
`;

const Index = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // eslint-disable-next-line global-require
      require('@codear/lilac');
    }
  }, []);

  return (
    <LandingContainer>
      <Calendar
        name="eventos"
        events={events}
      />
      <CommunitiesSection>
        <h1>
          comunidades
        </h1>
        <CommunitiesBanner>
          <img src="/images/community-logos/beer-js.png" alt="Logo de BeerJs" />
          <img src="/images/community-logos/met-cba.png" alt="Logo de MeT CBA" />
          <img
            src="/images/community-logos/facebook-dev-circle.png"
            alt="Logo de Facebook Dev Circle"
          />
        </CommunitiesBanner>
      </CommunitiesSection>
      <ProjectsSection>
        <h1>
          proyectos
        </h1>
        <ProjectContainer>
          <img src="/images/brand/webconf-logo.png" alt="Logo de Webconf" />
          <p>
            <b>WebConf</b>
            &nbsp;es la primera conferencia de tecnologías Web del interior del país,
            nacida en la ciudad de Córdoba. En la última edición, 270 personas de distintas
            provincias se sumaron a este espacio para compartir conocimiento.
          </p>
          <lilac-button
            href="https://webconf.tech"
            target="_blank"
            secundario
          >
            DESCUBRÍ WebConf
          </lilac-button>
        </ProjectContainer>
      </ProjectsSection>
      <UsSection>
        <h1>
          nosotros
        </h1>
        <PhotosContainer>
          <img src="/images/photos/santi.png" alt="Santiago Persico" />
          <img src="/images/photos/agus.png" alt="Agustin Carrasco" />
          <img src="/images/photos/ata.png" alt="Atahualpa Sánchez" />
          <PhotoStrut />
          <PhotoStrut />
          <PhotoStrut />
          <img src="/images/photos/flor.png" alt="Florencia Carillo" />
          <img src="/images/photos/homer0.png" alt="Leo Apiwan" />
          <img src="/images/photos/joey.png" alt="Joel Villarreal Bertoldi" />
          <PhotoStrut />
          <PhotoStrut />
          <PhotoStrut />
          <img src="/images/photos/migue.png" alt="Migue Moyano" />
          <img src="/images/photos/nabi.png" alt="Nabi Gudiño" />
          <Link href={ABOUT.path}>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>
              <MeetTheTeam>
                CONOCÉ
                <br />
                AL EQUIPO
              </MeetTheTeam>
            </a>
          </Link>
        </PhotosContainer>
        <p>
          Somos una comunidad dedicada a la formación y difusión de conocimientos de
          tecnología, aplicando la disciplina como un instrumento transformador y potenciador
          para la sociedad.
        </p>
      </UsSection>
    </LandingContainer>
  );
};

export default Index;
