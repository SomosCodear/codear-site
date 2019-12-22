import Link from 'next/link';
import React, { Fragment, useEffect } from 'react';
import styled from 'styled-components';
import { Calendar } from '../components/Calendar';
import { Container, Content } from '../components/Container';
import { MEMBERS, ROUTES } from '../data/constants';
import events from '../events.json';
import { BREAKPOINTS } from '../style/constants';

const CommunitiesSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;

  h1 {
    font-size: 3.25rem;
  }

  @media (min-width: ${BREAKPOINTS.hd}) {
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

  @media (min-width: ${BREAKPOINTS.hd}) {
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

  @media (min-width: ${BREAKPOINTS.hd}) {
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
    font-family: Source Sans Pro, sans-serif;
    color: var(--color-primary);
    text-align: center;
  }

  img {
    max-width: 150px;
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

  @media (min-width: ${BREAKPOINTS.hd}) {
    grid-template-columns: repeat(5, 6.5rem);
    justify-content: flex-start;
    margin: 0;
  }
`;

const PhotoStrut = styled.div`
  display: none;

  @media (min-width: ${BREAKPOINTS.hd}) {
    display: block;
  }
`;

const MeetTheTeamContainer = styled.span`
  display: flex;
  lilac-button {
    width: 100%;
  }
`;

const MeetTheTeam = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-family: Source Sans Pro, sans-serif;
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
    font-family: Source Sans Pro, sans-serif;
    color: var(--color-primary);
    text-align: center;
  }

  lilac-button {
    display: flex;
  }

  @media (min-width: ${BREAKPOINTS.hd}) {
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

const CalendarContainer = styled.div`
  @media (min-width: 45rem) {
    align-self: center;
  }
  @media (min-width: ${BREAKPOINTS.hd}) {
    grid-area: calendar;
    padding-left: 3rem;
  }
`;

const LandingContainer = styled(Container)`
  ${Content} {
    @media (min-width: ${BREAKPOINTS.hd}) {
      display: grid;
      grid-template-columns: 1fr 53rem 27rem 1fr;
      grid-template-areas:
        "     .       calendar    projects        .     "
        "communities communities communities communities"
        "     .          us          us           .     ";

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

  @media (min-width: ${BREAKPOINTS.wideScreen}) {
    background-image:
    url(/images/backgrounds/content-left.svg),
    url(/images/backgrounds/content-right.svg);
    background-repeat: no-repeat, no-repeat;
    background-size: 35%,24%;
    background-position: right -14% top, left top;
  }
`;

const Index = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // eslint-disable-next-line global-require
      require('@webcomponents/webcomponentsjs/webcomponents-bundle');
      // eslint-disable-next-line global-require
      require('@codear/lilac');
    }
  }, []);

  return (
    <LandingContainer>
      <CalendarContainer>
        <Calendar
          name="eventos"
          events={events}
        />
      </CalendarContainer>
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
          <a href="https://webconf.tech" rel="noopener noreferrer" target="_blank">
            <img src="/images/brand/webconf-logo.png" alt="Logo de WebConf" />
          </a>
          <p>
            <b>WebConf</b>
            &nbsp;es la primera conferencia de tecnologías Web del interior del país,
            nacida en la ciudad de Córdoba. En la última edición, 270 personas de distintas
            provincias se sumaron a este espacio para compartir conocimiento.
          </p>
          <lilac-button
            href="https://webconf.tech"
            target="_blank"
            secondary
            inverted
          >
            ¿Querés ser disertante?
          </lilac-button>
        </ProjectContainer>
      </ProjectsSection>
      <UsSection>
        <h1>
          nosotros
        </h1>
        <PhotosContainer>
          {MEMBERS.map(({ photo, name }, index) => (
            <Fragment key={name}>
              <img src={photo} alt={name} />
              {(index + 1) % 3 === 0 ? (
                <>
                  <PhotoStrut />
                  <PhotoStrut />
                  <PhotoStrut />
                </>
              ) : null}
            </Fragment>
          ))}
          <Link href={ROUTES.ABOUT.page} as={ROUTES.ABOUT.path}>
            <MeetTheTeamContainer>
              <lilac-button
                href={ROUTES.ABOUT.path}
                title="Conocé al equipo"
                secondary
                inverted
              >
                <MeetTheTeam>
                  CONOCÉ
                  <br />
                  AL EQUIPO
                </MeetTheTeam>
              </lilac-button>
            </MeetTheTeamContainer>
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
