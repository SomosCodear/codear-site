import styled, { css } from 'styled-components';

const reverse = css`
  transform: scaleX(-1);
`;

const directionTransformation = {
  left: '',
  right: reverse,
};

export const Chevron = styled.img.attrs(() => ({
  src: '/icons/chevron.svg',
}))`
  ${({ direction = 'left' }) => directionTransformation[direction]};
`;
