import React from 'react';
import styled from 'styled-components';
import { Container } from '../components/Container';


const PhotoCommission = styled.img`
  object-fit: contain;
`;

const About = () => (
  <Container>
    <PhotoCommission src="/images/photos/us.jpg" alt="comisión directiva" />
  </Container>
);

export default About;
