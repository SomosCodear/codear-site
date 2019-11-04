import React, { useEffect } from 'react';
import styled from 'styled-components';
import events from '../events.json';
import Head from 'next/head';
import { Container } from '../components/Container';
import { Nav } from '../components/Nav';
import { Footer } from '../components/Footer';
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

const UsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2.5rem 0;

  p {
    margin: 2.5rem 2.5rem 0;
    font-family: Source Sans Pro;
    color: var(--color-primary);
    text-align: center;
  }
`;

const PhotosContainer = styled.div`
  align-self: stretch;
  margin: 0 0.5rem;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, 6.5rem);
  grid-auto-rows: 6.5rem;
  grid-gap: 0.5rem;
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
            <img src="/images/community-logos/beer-js.png" alt="Logo de BeerJs" />
            <img src="/images/community-logos/met-cba.png" alt="Logo de MeT CBA" />
            <img
              src="/images/community-logos/facebook-dev-circle.png"
              alt="Logo de Facebook Dev Circle"
            />
          </CommunitiesBanner>
        </CommunitiesSection>
        <section>
          <h1>
            proyectos
          </h1>
          <ProjectContainer>
            <img src="/images/brand/webconf-logo.png" alt="Logo de Webconf" />
            <p>
              <b>WebConf</b> es la primera conferencia de tecnologías Web del interior del país,
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
        </section>
        <section>
          <h1>
            nosotros
          </h1>
          <UsContainer>
            <PhotosContainer>
              <img src="/images/photos/santi.png" alt="Santiago Persico" />
              <img src="/images/photos/agus.png" alt="Agustin Carrasco" />
              <img src="/images/photos/ata.png" alt="Atahualpa Sánchez" />
              <img src="/images/photos/flor.png" alt="Florencia Carillo" />
              <img src="/images/photos/homer0.png" alt="Leo Apiwan" />
              <img src="/images/photos/joey.png" alt="Joel Villarreal Bertoldi" />
              <img src="/images/photos/migue.png" alt="Migue Moyano" />
              <img src="/images/photos/nabi.png" alt="Nabi Gudiño" />
            </PhotosContainer>
            <p>
              Somos una comunidad dedicada a la formación y difusión de conocimientos de
              tecnología, aplicando la disciplina como un instrumento transformador y potenciador
              para la sociedad.
            </p>
          </UsContainer>
        </section>
        <Footer />
      </MainContainer>
    </Container>
  );
}

export default Index;
