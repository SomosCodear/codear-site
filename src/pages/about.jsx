import React from 'react';
import styled from 'styled-components';
import { MEMBERS } from '../data/constants';
import { Container } from '../components/Container';
import { Separator } from '../components/Separator';

const PhotoCommissionContainer = styled.div`
  width: 100%;
  overflow: hidden;

  img {
    width: 100vw;
    max-height: 46rem;
    object-fit: cover;
    object-position: top center;
  }

  @media (min-width: 80rem) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 80rem) {
    flex-direction: row;
    align-items: flex-start;
    max-width: 73.75rem;
    width: 100%;
  }
`;

const Texts = styled.div`
  text-align: center;
  @media (min-width: 80rem) {
    text-align: left;
    max-width: 17.5rem;
    margin: 0 3.125rem;
    box-sizing: border-box;
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
    font-family: Source Sans Pro;
    line-height: 1.5rem;
    color: var(--color-primary);
  }

  @media (min-width: 80rem) {
    p {
      margin: 0;
      text-align: left;
    }
  }
`;

const Members = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  margin: 3rem 1.5rem;

  @media (min-width: 80rem) {
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
      <PhotoCommissionContainer>
        <img src="/images/photos/us.jpg" alt="Foto de la comisión directiva" />
      </PhotoCommissionContainer>
      <Separator />
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
          {MEMBERS.map(({ name, photo, role }) => (
            <Member key={name}>
              <img src={photo} alt={name} />
              <h2>
                {name}
              </h2>
              <p>
                {role}
              </p>
            </Member>
          ))}
        </Members>
      </Content>
    </UsSection>
  </Container>
);

export default About;
