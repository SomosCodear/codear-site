import React from 'react';
import styled from 'styled-components';
import { CORE_MEMBERS, COLLABORATORS } from '../data/constants';
import { BREAKPOINTS } from '../style/constants';

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${BREAKPOINTS.hd}) {
    flex-direction: column;
    align-items: flex-start;
    max-width: 73.75rem;
    width: 100%;
  }
`;

const Texts = styled.div`
  text-align: center;

  p {
    font-size: 1.35rem;
    line-height: 1.5rem;
  }


  @media (min-width: ${BREAKPOINTS.hd}) {
    p {
      font-size: 1.75rem;
      line-height: 2.5rem;
      text-align: center;
    }
  }
`;

const UsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin-top: 1rem;
  }

  p {
    margin: 1.5rem 3rem 0;
    text-align: center;
    font-family: Source Sans Pro, sans-serif;
    color: var(--color-primary);
  }

  @media (min-width: ${BREAKPOINTS.hd}) {
    p {
      margin: 0;
    }
  }
`;

const Members = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem;
  margin: 3rem 1.5rem;

  @media (min-width: ${BREAKPOINTS.hd}) {
    grid-gap: 5rem 3rem;
    flex-grow: 1;
    grid-template-columns: 1fr 1fr;
  }
`;

const Member = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr;
  grid-column-gap: 1rem;

  img {
    grid-row-end: span 2;
    width: 9.375rem;
    border-radius: 10px;
  }

  h2 {
    margin: 0;
    align-self: flex-end;
    text-align: left;
    font-family: Source Sans Pro, sans-serif;
    font-weight: normal;
    font-size: 2rem;
    color: var(--color-secondary);
  }

  p {
    margin: 0;
    align-self: flex-start;
    text-align: left;
    font-family: Source Sans Pro, sans-serif;
    font-size: 0.9rem;
    color: var(--color-primary);
    line-height: 1.3rem;
  }

  @media (min-width: ${BREAKPOINTS.hd}) {
    img {
      width: 12.5rem;
    }

    p {
      font-size: 1rem;
      line-height: 1.5rem;
    }

    h2 {
      font-size: 3rem;
    }
  }
`;

const About = () => (
  <UsSection>
    <Content>
      <Texts>
        <h1>
          nosotros
        </h1>
        <p>
          Somos una comunidad dedicada a la formación y difusión de conocimientos de tecnología,
          aplicando la disciplina como un instrumento transformador y potenciador para la
          sociedad.
        </p>
      </Texts>
      <Members>
        {CORE_MEMBERS.map(({ name, photo, bio }) => (
          <Member key={name}>
            <img src={photo} alt={name} />
            <h2>
              {name}
            </h2>
            <p>
              {bio}
            </p>
          </Member>
        ))}
      </Members>
      <Texts>
        <h1>
          nuestra familia extendida
        </h1>
        <p>
          Trabajamos en diversas iniciativas con personas que creen en nuestra causa y nuestros
          valores, y creamos comunidad a través de alianzas con ellas y otras organizaciones.
        </p>
      </Texts>
      <Members>
        {COLLABORATORS.map(({ name, photo, bio }) => (
          <Member key={name}>
            <img src={photo} alt={name} />
            <h2>
              {name}
            </h2>
            <p>
              {bio}
            </p>
          </Member>
        ))}
      </Members>
    </Content>
  </UsSection>
);

About.getInitialProps = async () => ({
  title: 'Conocenos',
});

export default About;
