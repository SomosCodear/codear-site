import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Text = styled.span`
  position: absolute;
  width: 0.0625rem;
  height: 0.0625rem;
  padding: 0;
  margin: -0.0625rem;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`;

export const SROnlyText = ({ children }) => (
  <Text>{children}</Text>
);

SROnlyText.propTypes = {
  children: PropTypes.node.isRequired,
};
