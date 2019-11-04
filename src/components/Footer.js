import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  flex: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 2.5rem 1.5rem;
  background-image: url(/images/backgrounds/community.png);
  background-repeat: no-repeat;
  background-position: left 60%;
  background-size: cover;
  color: var(--color-text);
  font-size: 0.875rem;
  font-family: Source Sans Pro;
`;

const SocialMediaContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Footer = () => (
  <FooterContainer>
    © 2019 | Comunidad de Desarrolladores de Argentina
    <SocialMediaContainer>
    </SocialMediaContainer>
  </FooterContainer>
);
