import React, { Fragment } from 'react';
import styled from 'styled-components';
import { MEMBERS } from '../data/constants';
import { Container } from '../components/Container';

const PhotoCommission = styled.img`
  width: 100vw;
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
    font-family: Source Sans Pro;
    color: var(--color-primary);
  }
`;

const Members = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr;
  grid-gap: 1rem;
  margin: 3rem 1.5rem;

  img {
    grid-row-end: span 2;
  }

  h2 {
    margin: 0;
    align-self: flex-end;
    text-align: left;
    font-family: Source Sans Pro;
    font-weight: bold;
    font-size: 1.5rem;
    color: var(--color-secondary);
  }

  p {
    margin: 0;
    align-self: flex-start;
    text-align: left;
    font-family: Source Sans Pro;
    font-size: 1.5rem;
    color: var(--color-primary);
  }
`;

const About = () => (
  <Container>
    <UsSection>
      <PhotoCommission src="/images/photos/us.jpg" alt="comisión directiva" />
      <h1>
        nosotros
      </h1>
      <p>
        Somos una comunidad dedicada a la formación y difusión de conocimientos de tecnología,
        aplicando la disciplina como un instrumento transformador y potenciador para la sociedad.
      </p>
      <Members>
        {MEMBERS.map(({ name, photo, role }) => (
          <Fragment key={name}>
            <img src={photo} alt={name} />
            <h2>
              {name}
            </h2>
            <p>
              {role}
            </p>
          </Fragment>
        ))}
      </Members>
    </UsSection>
  </Container>
);

export default About;
