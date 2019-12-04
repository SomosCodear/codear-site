/* global window */
const body = typeof window === 'undefined' ? null : window.document.body;

export const enableScroll = () => {
  body.style.position = '';
  body.style.height = '';
  body.style.overflow = '';
};

export const disableScroll = () => {
  body.style.position = 'fixed';
  body.style.height = '100%';
  body.style.overflow = 'hidden';
};
