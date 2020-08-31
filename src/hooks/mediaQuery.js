const mediaQuery = (query) => {
  let mediaMatch = null;

  if (typeof window !== 'undefined') {
    // eslint-disable-next-line
    mediaMatch = window.matchMedia(query);
  }

  return mediaMatch.matches;
};

export default mediaQuery;
