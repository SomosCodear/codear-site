import React from 'react';
import styled from 'styled-components';
import { BREAKPOINTS } from '../style/constants';

export const Container = styled.div`
  display: none;

  @media (min-width: ${BREAKPOINTS.hd}) {
    display: block;
    background: linear-gradient(90deg, #350c4b, #474a7d);
    min-height: 0.75rem;
    max-width: 100%;
    overflow-x: hidden;

    img {
      margin: 0 auto;
      display: block;
    }
  }
`;

export const Separator = () => (
  <Container>
    <img src="/images/backgrounds/nav-desktop.png" aria-hidden="true" alt="" />
  </Container>
);
