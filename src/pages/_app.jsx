import '@codear/lilac/dist/lilac.css';
import '../global.css';
import React from 'react';
import Router from 'next/router';
import withGA from 'next-ga';
import { Container } from '../components/Container';

/* eslint-disable react/prop-types, react/jsx-props-no-spreading */
const CodearApp = ({ Component, pageProps }) => (
  <Container {...pageProps}>
    <Component {...pageProps} />
  </Container>
);
/* eslint-enable react/prop-types, react/jsx-props-no-spreading */

export default withGA('UA-148017514-1', Router)(CodearApp);
