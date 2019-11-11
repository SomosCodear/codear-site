import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Head from 'next/head';
import { Nav } from './Nav';
import { Footer } from './Footer';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  height: 100vh;
  overflow: hidden;

  @media (min-width: 80rem) {
    overflow: auto;
  }
`;

export const HeaderLine = styled.div`
  @media (min-width: 80rem) {
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
  overflow: auto;

  @media (min-width: 80rem) {
    overflow: visible;
  }
`;

export const Content = styled.main`
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
    <HeaderLine />
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
