import React, { useEffect } from 'react';
import styled from 'styled-components';
import events from '../events.json';
import { Container } from '../components/Container';
import { Nav } from '../components/Nav';
import { Calendar } from '../components/Calendar';

const MainContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  overflow: auto;
`;

const Index = () => {
  useEffect(() => {
    if(typeof window !== 'undefined') {
      window.WOW = require('@codear/lilac');
    }
  }, []);

  return (
    <Container>
      <Nav />
      <MainContainer>
        <Calendar
          name="calendario"
          events={events}
        />
      </MainContainer>
    </Container>
  );
}

export default Index;
