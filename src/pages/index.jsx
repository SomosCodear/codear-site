import Link from 'next/link';
import React, { Fragment } from 'react';
import styled from 'styled-components';
import { BREAKPOINTS } from '../style/constants';
import { CORE_MEMBERS, ROUTES } from '../data/constants';
import { useLilac } from '../hooks';
import { Calendar } from '../components/Calendar';
import { Carousel } from '../components/Carousel';
import communities from '../communities.json';
import events from '../events.json';
import projects from '../projects.json';

const CommunitiesSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;

  h1 {
    font-size: 3.25rem;
    text-align: center;
  }

  h1 a {
    color: inherit;
    text-decoration: inherit;
  }

  h1 p {
    font-size: 1rem;
    font-weight: 400;
    padding: 0 1rem;
  }

  @media (min-width: ${BREAKPOINTS.hd}) {
    flex-direction: row;
    justify-content: center;
    padding: 1.5rem 0;
    background-image: url(/images/backgrounds/community-desktop.png);
    background-repeat: no-repeat;
    background-position: left center;
    background-size: cover;

    h1 {
      text-align: left;
      margin-left: 1rem;
    }

    h1:first-child {
      box-sizing: border-box;
      width: 50rem;
      padding: 0 3rem;
      font-size: 4.5rem;
      color: var(--color-text);
    }

    h1 p {
      margin: 0;
      padding: 0;
      font-size: 1rem;
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
  flex-flow: wrap;

  img {
    max-width: 3rem;
    max-height: 3rem;
    margin: 0.5rem;
    border-radius: 100px;
  }

  @media (min-width: ${BREAKPOINTS.hd}) {
    box-sizing: border-box;
    width: 30rem;
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

const ProjectsCarousel = styled(Carousel)`
  flex-grow: 1;
  align-self: stretch;
  margin: 2.5rem;
`;

const ProjectContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    flex-grow: 1;
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

  img {
    width: 6.25rem;
    border-radius: 4px;
    border: 1px solid var(--color-secondary);
  }

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

const LandingContent = styled.main`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: stretch;

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
`;

const Index = () => {
  useLilac();

  return (
    <LandingContent>
      <CalendarContainer>
        <Calendar
          name="eventos"
          events={events}
        />
      </CalendarContainer>
      <CommunitiesSection>
        <h1>
          <Link
            href={ROUTES.COMMUNITIES.page}
            as={ROUTES.COMMUNITIES.path}
          >
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>
              comunidades
            </a>
          </Link>
          <p>Descubrí los programas y servicios que ofrecemos para tu comunidad.</p>
        </h1>
        <CommunitiesBanner>
          {communities.map(({ id, name, iconFormat = 'png' }) => (
            <Link
              key={`community_${id}`}
              href={ROUTES.COMMUNITIES.page}
              as={ROUTES.COMMUNITIES.path}
            >
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a>
                <img alt={`Logo de ${name}`} src={`/images/community-logos/${id}.${iconFormat}`} />
              </a>
            </Link>
          ))}
        </CommunitiesBanner>
      </CommunitiesSection>
      <ProjectsSection>
        <h1>
          proyectos
        </h1>
        <ProjectsCarousel>
          {projects.map(({
            id, name, brandImage, description, cta,
          }) => (
            <ProjectContainer key={id}>
              <a href={cta.href} rel="noopener noreferrer" target="_blank">
                <img src={`/images/brand/${brandImage}`} alt={`Logo de ${name}`} />
              </a>
              <p>
                {description}
              </p>
              <lilac-button
                href={cta.href}
                target="_blank"
                color="secondary"
                inverted
              >
                {cta.title}
              </lilac-button>
            </ProjectContainer>
          ))}
        </ProjectsCarousel>
      </ProjectsSection>
      <UsSection>
        <h1>
          nosotros
        </h1>
        <PhotosContainer>
          {CORE_MEMBERS.map(({ photo, name }, index) => (
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
                color="secondary"
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
    </LandingContent>
  );
};

export default Index;
