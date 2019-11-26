import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class CodearDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () => originalRenderPage({
        // eslint-disable-next-line react/jsx-props-no-spreading
        enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
      });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <html lang="es-AR">
        <Head>
          <meta name="description" content="Somos una asociación civil dedicada a la formación y difusión de conocimientos de tecnología, aplicándola como un instrumento transformador y potenciador para la sociedad." />
          <meta property="og:title" content="CoDeAr | Comunidad de Desarrolladores de Argentina" />
          <meta property="og:site_name" content="CoDeAr | Comunidad de Desarrolladores de Argentina" />
          <meta property="og:description" content="Somos una asociación civil dedicada a la formación y difusión de conocimientos de tecnología, aplicándola como un instrumento transformador y potenciador para la sociedad." />
          <meta property="og:url" content="https://codear.org" />
          <meta property="og:locale" content="es_AR" />
          <meta property="og:image" content="https://codear.org/icons/apple-icon-180x180.png" />
          <meta name="twitter:title" content="CoDeAr | Comunidad de Desarrolladores de Argentina" />
          <meta name="twitter:description" content="Somos una asociación civil dedicada a la formación y difusión de conocimientos de tecnología, aplicándola como un instrumento transformador y potenciador para la sociedad." />
          <meta name="twitter:site" content="@SomosCodear" />
          <meta name="twitter:creator" content="@SomosCodear" />
          <link rel="manifest" href="manifest.json" />
          <link rel="shortcut icon" sizes="16x16" href="/icons/favicon-16x16.png" />
          <link rel="shortcut icon" sizes="32x32" href="/icons/favicon-32x32.png" />
          <link rel="shortcut icon" sizes="96x96" href="/icons/favicon-96x96.png" />
          <link rel="apple-touch-icon" sizes="57x57" href="/icons/apple-icon-57x57.png" />
          <link rel="apple-touch-icon" sizes="60x60" href="/icons/apple-icon-60x60.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="/icons/apple-icon-72x72.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="/icons/apple-icon-76x76.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="/icons/apple-icon-114x114.png" />
          <link rel="apple-touch-icon" sizes="120x120" href="/icons/apple-icon-120x120.png" />
          <link rel="apple-touch-icon" sizes="144x144" href="/icons/apple-icon-144x144.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="/icons/apple-icon-152x152.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-icon-180x180.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default CodearDocument;
