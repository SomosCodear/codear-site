import React, { useEffect } from 'react';
import styled from 'styled-components';
import events from '../events.json';
import Head from 'next/head';
import { Container } from '../components/Container';
import { Nav } from '../components/Nav';
import { Calendar } from '../components/Calendar';

const MainContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  overflow: auto;

  h1 {
    margin: 0;
    font-size: 4.5rem;
    font-weight: 100;
    color: var(--color-primary-light);
  }

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const CommunitiesSection = styled.section`
  margin-top: 3rem;

  h1 {
    font-size: 3.25rem;
  }
`;

const CommunitiesBanner = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 1.25rem;
  padding: 1.875rem;
  background-image: url(/images/backgrounds/community.png);
  background-repeat: no-repeat;
  background-position: left center;
  background-size: cover;

  img + img {
    margin-left: 0.5rem;
  }
`

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

const Index = () => {
  useEffect(() => {
    if(typeof window !== 'undefined') {
      require('@codear/lilac');
    }
  }, []);

  return (
    <Container>
      <Head>
        <title>CoDeAr</title>
      </Head>
      <Nav />
      <MainContainer>
        <Calendar
          name="calendario"
          events={events}
        />
        <CommunitiesSection>
          <h1>
            comunidades
          </h1>
          <CommunitiesBanner>
            <img src="/images/community-logos/beer-js.png" alt="logo de beerjs" />
            <img src="/images/community-logos/met-cba.png" alt="logo de met cba" />
            <img
              src="/images/community-logos/facebook-dev-circle.png"
              alt="logo de facebook dev circle"
            />
          </CommunitiesBanner>
        </CommunitiesSection>
        <section>
          <h1>
            proyectos
          </h1>
          <ProjectContainer>
            <img src="/images/brand/webconf-logo.png" alt="logo de webconf" />
            <p>
              <b>WebConf</b> es la primera conferencia de tecnologías Web del interior del país,
              nacida en la ciudad de Córdoba. En la última edición, 270 personas de distintas
              provincias se sumaron a este espacio para compartir conocimiento.
            </p>
            <lilac-button
              href="https://webconf.tech"
              alt="sitio de la webconf"
              target="_blank"
              secundario
            >
              DESCUBRÍ WebConf
            </lilac-button>
          </ProjectContainer>
        </section>
        <section>
          <h1>
            nosotros
          </h1>
        </section>
      </MainContainer>
    </Container>
  );
}

export default Index;
