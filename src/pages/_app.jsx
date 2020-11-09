import '@codear/lilac/dist/lilac.css';
import '../global.css';
import React from 'react';
import Router from 'next/router';
import withGA from 'next-ga';
import { ANALYTICS_ID } from '../data/config';
import { Container } from '../components/Container';

/* eslint-disable react/prop-types, react/jsx-props-no-spreading */
const CodearApp = ({ Component, pageProps }) => (
  <Container {...Component.layoutProps}>
    <Component {...pageProps} />
  </Container>
);
/* eslint-enable react/prop-types, react/jsx-props-no-spreading */

export default withGA(ANALYTICS_ID, Router)(CodearApp);
