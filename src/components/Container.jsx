import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Head from 'next/head';
import { BREAKPOINTS } from '../style/constants';
import { Nav } from './Nav';
import { Footer } from './Footer';
import { Separator } from './Separator';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

export const HeaderLine = styled.div`
  @media (min-width: ${BREAKPOINTS.hd}) {
    min-height: 0.75rem;
    background-image: url(/images/backgrounds/nav-desktop.png);
    background-position: left top;
    background-repeat: no-repeat;
    background-size: auto;
  }
`;

export const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

export const Content = styled.main`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: stretch;

  h1 {
    margin: 0;
    font-size: 4.5rem;
    font-weight: 100;
    color: var(--color-primary-light);
  }
`;

export const Container = ({ children, className }) => (
  <Wrapper className={className}>
    <Head>
      <title>CoDeAr</title>
    </Head>
    <Separator />
    <Nav />
    <ContentWrapper>
      <Content>
        {children}
      </Content>
      <Footer />
    </ContentWrapper>
  </Wrapper>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Container.defaultProps = {
  className: null,
};
