import React from 'react';
import styled from 'styled-components';
import { BREAKPOINTS } from '../style/constants';
import comuniques from '../comuniques.json';

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
    border-bottom: 1px solid var(--color-accent);
    padding-bottom: 1rem;
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

const PlaceAndDate = styled.p`
  font-style: italic;
`;

const Components = {
  p: ({ children }) => <p>{children}</p>,
  subtitle: ({ children }) => <h3>{children}</h3>,
  indentedBlock: ({ children }) => <IndentedBlock>{children}</IndentedBlock>,
  emphasis: ({ children }) => <p><strong>{children}</strong></p>,
}

const Comuniques = () => (
  <Content>
    <h1>
      comunicaciones
    </h1>
    {comuniques.map((comunique, index) => <article key={`comunique${index}`}>
      <a name={comunique.slug}></a>
      <PlaceAndDate>Córdoba, {comunique.date}</PlaceAndDate>
      <h2>{comunique.title}</h2>
      {comunique.content.map(block => block.type ? Components[block.type]({ children: block.content }) : Components.p({ children: block }))}
    </article>)}
  </Content>
);

Comuniques.getInitialProps = async () => ({
  title: 'Comunicaciones',
});

export default Comuniques;
