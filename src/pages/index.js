import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Container } from '../components/Container';
import { Nav } from '../components/Nav';

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
        <lilac-calendar
          name="calendario"
          events='[
            {
              "date": "2019-10-30T15:00:00.000Z",
              "name": "Really long test event name that does not fit on the screen",
              "street": "test",
              "city": "Cordoba",
              "country": "Argentina",
              "link": "https://google.com"
            },
            {
              "date": "2019-10-18T15:00:00.000Z",
              "name": "Test event",
              "street": "test",
              "city": "Cordoba",
              "country": "Argentina",
              "link": "https://google.com"
            },
            {
              "date": "2019-10-18T19:00:00.000Z",
              "name": "Test event",
              "street": "test",
              "city": "Cordoba",
              "country": "Argentina",
              "link": "https://google.com"
            },
            {
              "date": "2019-10-18T15:00:00.000Z",
              "name": "Test event",
              "street": "test",
              "city": "Cordoba",
              "country": "Argentina",
              "link": "https://google.com"
            },
            {
              "date": "2019-10-18T15:00:00.000Z",
              "name": "Test event",
              "street": "test",
              "city": "Cordoba",
              "country": "Argentina",
              "link": "https://google.com"
            },
            {
              "date": "2019-11-18T15:00:00.000Z",
              "name": "Test event",
              "street": "test",
              "city": "Cordoba",
              "country": "Argentina",
              "link": "https://google.com"
            },
            {
              "date": "2019-11-03T20:00:00.000Z",
              "name": "Beer JS",
              "street": "Blabla",
              "city": "Cordoba",
              "country": "Argentina",
              "link": "https://google.com"
            }
          ]'
        ></lilac-calendar>
      </MainContainer>
    </Container>
  );
}

export default Index;
