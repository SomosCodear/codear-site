module.exports = {
  env: {
    ANALYTICS_ID: process.env.ANALYTICS_ID,
  },
  async rewrites() {
    return [
      { source: '/', destination: '/' },
      { source: '/conocenos', destination: '/about' },
      { source: '/codigo-de-conducta', destination: '/coc' },
      { source: '/comunicaciones', destination: '/comuniques' },
      { source: '/comunidades', destination: '/communities' },
      { source: '/conocimiento', destination: '/knowledge' },
      { source: '/encuentros/proximo', destination: '/api/next-encuentros-codear' },
      { source: '/anuario/2020', destination: '/yearbook/2020' },
    ];
  },
  async redirects() {
    return [
      {
        source: '/gh/:id',
        destination: 'https://github.com/somoscodear/:id',
        permanent: false,
      },
      {
        source: '/figma/:id',
        destination: 'https://www.figma.com/file/:id',
        permanent: false,
      },
    ];
  },
  catchAllRouting: true,
};
