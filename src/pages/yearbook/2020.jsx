/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
import React from 'react';
import styled from 'styled-components';
import HTMLFlipBook from 'react-pageflip';
import { BREAKPOINTS } from '../../style/constants';
import { useLilac } from '../../hooks';

const Content = styled.div`
  padding: 1.5rem 1.25rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  overflow: hidden;

  article {
    margin: 0;
  }

  h1 {
    font-size: 3rem;
    line-height: 1.1;
  }

  h2 {
    font-size: 1.875rem;
    color: var(--color-accent);
    margin-top: 0;
    border-bottom: 1px solid var(--color-accent);
    padding-bottom: 1rem;
  }

  h3 {
    font-size: 1.5rem;
    color: var(--color-primary-lightest);
  }

  p,
  li {
    font-size: 1.25rem;
    font-family: Source Sans Pro, sans-serif;
    line-height: 1.5;
    color: var(--color-primary);
  }

  @media (min-width: ${BREAKPOINTS.hd}) {
    align-self: center;
    max-width: 73.75rem;
    width: 100%;

    h1 {
      font-size: 4.5rem;
    }

    h2 {
      font-size: 3rem;
    }

    p {
      margin-left: 0;
    }
  }
`;

const Page = styled.div`
  overflow-y: hidden;

  &.--left {
    box-shadow: -2px 0px 5px rgba(0, 0, 0, 0.5);
  }

  &.--right {
    box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.5);
  }

  &.--hard {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  }

  img {
    width: 100%;
  }
`;

const FlipBook = styled(HTMLFlipBook)`
  overflow: visible;

  & .--portrait ${Page} {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  }
`;

const Download = styled.section`
  width: 100%;
  margin: 3rem 0;
  display: flex;
  justify-content: center;
`;

const yearbookPages = [
  '01_Tapa.jpg',
  '02_Interior_Tapa.jpg',
  '03_Contenidos.jpg',
  '04_Caratula_QuienesSomos_Izq.jpg',
  '05_Caratula_QuienesSomos_Der.jpg',
  '06_QuienesSomos_01.jpg',
  '07_QuienesSomos_02.jpg',
  '08_QuienesSomos_03.jpg',
  '09_QuienesSomos_04.jpg',
  '10_Caratula_LoQueHacemos_Izq.jpg',
  '11_Caratula_LoQueHacmos_Der.jpg',
  '12_LoQueHacemos_01.jpg',
  '13_LoQueHacemos_02.jpg',
  '14_LoQueHacemos_03.jpg',
  '15_LoQueHacemos_04.jpg',
  '16_LoQueHacemos_05.jpg',
  '17_LoQueHacemos_06.jpg',
  '18_LoQueHacemos_07.jpg',
  '19_LoQueHacemos_07.jpg',
  '20_LoQueHacemos_08.jpg',
  '21_LoQueHacemos_09.jpg',
  '22_LoQueHacemos_10.jpg',
  '23_LoQueHacemos_11.jpg',
  '24_LoQueHacemos_12.jpg',
  '25_LoQueHacemos_13.jpg',
  '26_LoQueHacemos_14.jpg',
  '27_LoQueHacemos_15.jpg',
  '28_LoQueHacemos_16.jpg',
  '29_LoQueHacemos_17.jpg',
  '30_LoQueHacemos_18.jpg',
  '31_LoQueHacemos_19.jpg',
  '32_LoQueHacemos_20.jpg',
  '33_LoQueHacemos_21.jpg',
  '34_LoQueHacemos_22.jpg',
  '35_LoQueHacemos_23.jpg',
  '36_Caratula_Alianzas_Izq.jpg',
  '37_Caratula_Alianzas_Der.jpg',
  '38_Alianzas_01.jpg',
  '39_Alianzas_02.jpg',
  '40_Alianzas_03.jpg',
  '41_Alianzas_04.jpg',
  '42_Alianzas_05.jpg',
  '43_Alianzas_06.jpg',
  '44_Caratula_Redes_Izq.jpg',
  '45_Caratula_Redes_Der.jpg',
  '46_Redes_01.jpg',
  '47_Redes_02.jpg',
  '48_Redes_03.jpg',
  '49_Redes_04.jpg',
  '50_Redes_05.jpg',
  '51_Redes_06.jpg',
  '52_Caratula_Donaciones_Izq.jpg',
  '53_Caratula_Donaciones_Der.jpg',
  '54_Donaciones_01.jpg',
  '55_Donaciones_02.jpg',
  '56_Donaciones_03.jpg',
  '57_Donaciones_04.jpg',
  '58_Caratula_ElFuturo_Izq.jpg',
  '59_Caratula_ElFuturo_Der.jpg',
  '60_ElFuturo_01.jpg',
  '61_ElFuturo_02.jpg',
  '62_Contratapa.jpg',
];

const Yearbook = () => {
  useLilac();

  return (
    <Content>
      <h1>anuario 2020</h1>
      <p>
        CoDeAr cumplió un año de vida, y queremos compartirlo con vos. En este libro
        digital, te acercamos nuestro primer Anuario: un resumen del año con todas
        nuestras actividades, logros y resultados. ¡Te invitamos a leerlo y compartirlo!
      </p>
      <p>
        <strong>¡Muchas gracias por acompañar nuestro crecimiento!</strong>
      </p>
      <p>
        <span role="img" aria-label="Instrucciones">
          💡
        </span>
        Hacé click en una de las páginas de la esquina o deslizá el dedo lateralmente para
        pasar de página.
      </p>
      <FlipBook
        width={592}
        height={842}
        size="stretch"
        minWidth={350}
        maxWidth={592}
        minHeight={498}
        maxHeight={842}
        flippingTime={500}
        mobileScrollSupport={false}
        showCover
      >
        {yearbookPages.map((page) => (
          <Page key={`page_${page}`}>
            <img
              src={`https://cdn.codear.org/yearbook-2020/jpg/${page}`}
              alt="Página del anuario"
            />
          </Page>
        ))}
      </FlipBook>
      <Download>
        <lilac-button
          href="https://cdn.codear.org/yearbook-2020/pdf/Anuario_Codear_2020.pdf"
          target="_blank"
        >
          Descargá el Anuario en PDF
        </lilac-button>
      </Download>
    </Content>
  );
};

Yearbook.layoutProps = {
  title: `Anuario 2020`,
  meta: {
    ogTitle: `Anuario 2020 | CoDeAr`,
    ogDescription: `Recorramos juntos todo el camino trazado durante 2020 en CoDeAr.`,
    description: `Recorramos juntos todo el camino trazado durante 2020 en CoDeAr.`,
    ogUrl: `https://codear.org/anuario/2020`,
    twitterTitle: `Anuario 2020 | CoDeAr`,
    twitterDescription: `Recorramos juntos todo el camino trazado durante 2020 en CoDeAr.`,
  },
};

export default Yearbook;
