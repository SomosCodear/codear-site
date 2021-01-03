/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
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
  '/images/yearbook/2020/01_Tapa.jpg',
  '/images/yearbook/2020/02_Interior_Tapa.jpg',
  '/images/yearbook/2020/03_Contenidos.jpg',
  '/images/yearbook/2020/04_Caratula_QuienesSomos_Izq.jpg',
  '/images/yearbook/2020/05_Caratula_QuienesSomos_Der.jpg',
  '/images/yearbook/2020/06_QuienesSomos_01.jpg',
  '/images/yearbook/2020/07_QuienesSomos_02.jpg',
  '/images/yearbook/2020/08_QuienesSomos_03.jpg',
  '/images/yearbook/2020/09_QuienesSomos_04.jpg',
  '/images/yearbook/2020/10_Caratula_LoQueHacemos_Izq.jpg',
  '/images/yearbook/2020/11_Caratula_LoQueHacmos_Der.jpg',
  '/images/yearbook/2020/12_LoQueHacemos_01.jpg',
  '/images/yearbook/2020/13_LoQueHacemos_02.jpg',
  '/images/yearbook/2020/14_LoQueHacemos_03.jpg',
  '/images/yearbook/2020/15_LoQueHacemos_04.jpg',
  '/images/yearbook/2020/16_LoQueHacemos_05.jpg',
  '/images/yearbook/2020/17_LoQueHacemos_06.jpg',
  '/images/yearbook/2020/18_LoQueHacemos_07.jpg',
  '/images/yearbook/2020/19_LoQueHacemos_07.jpg',
  '/images/yearbook/2020/20_LoQueHacemos_08.jpg',
  '/images/yearbook/2020/21_LoQueHacemos_09.jpg',
  '/images/yearbook/2020/22_LoQueHacemos_10.jpg',
  '/images/yearbook/2020/23_LoQueHacemos_11.jpg',
  '/images/yearbook/2020/24_LoQueHacemos_12.jpg',
  '/images/yearbook/2020/25_LoQueHacemos_13.jpg',
  '/images/yearbook/2020/26_LoQueHacemos_14.jpg',
  '/images/yearbook/2020/27_LoQueHacemos_15.jpg',
  '/images/yearbook/2020/28_LoQueHacemos_16.jpg',
  '/images/yearbook/2020/29_LoQueHacemos_17.jpg',
  '/images/yearbook/2020/30_LoQueHacemos_18.jpg',
  '/images/yearbook/2020/31_LoQueHacemos_19.jpg',
  '/images/yearbook/2020/32_LoQueHacemos_20.jpg',
  '/images/yearbook/2020/33_LoQueHacemos_21.jpg',
  '/images/yearbook/2020/34_LoQueHacemos_22.jpg',
  '/images/yearbook/2020/35_LoQueHacemos_23.jpg',
  '/images/yearbook/2020/36_Caratula_Alianzas_Izq.jpg',
  '/images/yearbook/2020/37_Caratula_Alianzas_Der.jpg',
  '/images/yearbook/2020/38_Alianzas_01.jpg',
  '/images/yearbook/2020/39_Alianzas_02.jpg',
  '/images/yearbook/2020/40_Alianzas_03.jpg',
  '/images/yearbook/2020/41_Alianzas_04.jpg',
  '/images/yearbook/2020/42_Alianzas_05.jpg',
  '/images/yearbook/2020/43_Alianzas_06.jpg',
  '/images/yearbook/2020/44_Caratula_Redes_Izq.jpg',
  '/images/yearbook/2020/45_Caratula_Redes_Der.jpg',
  '/images/yearbook/2020/46_Redes_01.jpg',
  '/images/yearbook/2020/47_Redes_02.jpg',
  '/images/yearbook/2020/48_Redes_03.jpg',
  '/images/yearbook/2020/49_Redes_04.jpg',
  '/images/yearbook/2020/50_Redes_05.jpg',
  '/images/yearbook/2020/51_Redes_06.jpg',
  '/images/yearbook/2020/52_Caratula_Donaciones_Izq.jpg',
  '/images/yearbook/2020/53_Caratula_Donaciones_Der.jpg',
  '/images/yearbook/2020/54_Donaciones_01.jpg',
  '/images/yearbook/2020/55_Donaciones_02.jpg',
  '/images/yearbook/2020/56_Donaciones_03.jpg',
  '/images/yearbook/2020/57_Donaciones_04.jpg',
  '/images/yearbook/2020/58_Caratula_ElFuturo_Izq.jpg',
  '/images/yearbook/2020/59_Caratula_ElFuturo_Der.jpg',
  '/images/yearbook/2020/60_ElFuturo_01.jpg',
  '/images/yearbook/2020/61_ElFuturo_02.jpg',
  '/images/yearbook/2020/62_Contratapa.jpg',
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
            <Image layout="fill" src={page} alt="Página del anuario" />
          </Page>
        ))}
      </FlipBook>
      <Download>
        <lilac-button href="/downloads/Anuario_Codear_2020.pdf" target="_blank">
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
