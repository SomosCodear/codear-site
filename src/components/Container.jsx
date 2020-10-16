import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Head from 'next/head';
import { META } from '../data/constants';
import { BREAKPOINTS } from '../style/constants';
import { Nav } from './Nav';
import { Footer } from './Footer';
import { Separator } from './Separator';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;

  @media (min-width: ${BREAKPOINTS.wideScreen}) {
    background-image:
    url(/images/backgrounds/content-left.svg),
    url(/images/backgrounds/content-right.svg);
    background-repeat: no-repeat, no-repeat;
    background-size: 35%,24%;
    background-position: right -14% top, left top;
  }
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

  h1 {
    margin: 0;
    font-size: 4.5rem;
    font-weight: 100;
    color: var(--color-primary-light);
  }
`;

export const Container = ({
  children,
  title,
  meta,
}) => {
  const metaWithDefaults = useMemo(
    () => ({ ...META, ...meta }),
    [meta],
  );

  return (
    <Wrapper>
      <Head>
        <title>
          {`${title} `}
          | Comunidad de Desarrolladores de Argentina (CoDeAr)
        </title>
        <meta name="description" content={metaWithDefaults.description} />
        <meta property="og:title" content={metaWithDefaults.ogTitle} />
        <meta property="og:site_name" content={metaWithDefaults.ogSiteName} />
        <meta property="og:description" content={metaWithDefaults.ogDescription} />
        <meta property="og:url" content={metaWithDefaults.ogUrl} />
        <meta property="og:locale" content={metaWithDefaults.ogLocale} />
        <meta property="og:image" content={metaWithDefaults.ogImage} />
        <meta property="og:type" content={metaWithDefaults.ogType} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaWithDefaults.twitterTitle} />
        <meta name="twitter:description" content={metaWithDefaults.twitterDescription} />
        <meta name="twitter:site" content={metaWithDefaults.twitterSite} />
        <meta name="twitter:creator" content={metaWithDefaults.twitterCreator} />
        <meta name="facebook-domain-verification" content={metaWithDefaults.facebookDomainVerification} />
      </Head>
      <Separator />
      <Nav />
      <ContentWrapper>
        {children}
        <Footer />
      </ContentWrapper>
    </Wrapper>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  meta: PropTypes.objectOf(PropTypes.string),
};

Container.defaultProps = {
  title: '¡Hola!',
  meta: {},
};
