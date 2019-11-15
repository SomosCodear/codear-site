import React from 'react';
import styled from 'styled-components';
import { Container } from '../components/Container';

const Content = styled.div`
  margin: 1.5rem 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h1 {
    font-size: 4rem;
    line-height: 1.1;
  }

  h2 {
    font-size: 1.875rem;
    color: var(--color-accent);
  }

  p, li {
    font-size: 1.25rem;
    font-family: Source Sans Pro;
    line-height: 1.5;
    color: var(--color-primary);
  }

  ul {
    margin: 2rem 0;
    padding-left: 1rem;

    li {
      padding-left: 1rem;
    }

    li::marker {
      font-size: 1rem;
      color: var(--color-accent);
    }
  }

  @media (min-width: 80rem) {
    align-self: center;
    max-width: 73.75rem;
    width: 100%;

    h1 {
      font-size: 4.5rem;
    }

    h2 {
      font-size: 3rem;
    }

    p, ul {
      margin-left: 20rem;
    }
  }
`;

const Intro = styled.p`
  margin: 2rem 0;

  @media (min-width: 80rem) {
    margin-left: 0 !important;
    font-weight: bold;
  }
`;

const Important = styled.p`
  margin: 1rem 0;
  font-weight: bold;

  a {
    color: var(--color-accent);
    text-decoration: none;
  }
`;

const ObjectivesSection = styled.section`
  h2 {
    font-size: 3rem;
    color: var(--color-primary-lightest);
  }

  @media (min-width: 80rem) {
    display: grid;
    grid-template-columns: min-content 1fr;
    grid-column-gap: 7.4rem;

    h2 {
      margin: 0;
      grid-row-end: span 2;
    }

    ul {
      margin: 1rem 0 0;
    }

    p {
      margin-left: 0;
    }
  }
`;

const OutroSection = styled.section`
  h2 {
    color: var(--color-primary-lightest);
  }
`;

const Coc = () => (
  <Container>
    <Content>
      <h1>
        código de conducta
      </h1>
      <Intro>
        Quienes formamos parte de CoDeAr nos comprometemos a mantener un ambiente confortable y
        seguro para todas las personas dentro de la conferencia, más allá de su identidad y
        expresión de género, orientación sexual, discapacidades, apariencia física, etnia,
        nacionalidad, religión (o falta de la misma), nivel socio-económico u otras
        características personales.
      </Intro>
      <ObjectivesSection>
        <h2>
          Objetivos
        </h2>
        <ul>
          <li>
            Especificar un estándar básico de comportamiento para que las personas con distintos
            valores sociales y estilos de comunicación puedan participar de las actividades de
            CoDear respetuosamente.
          </li>
          <li>
            Proveer un mecanismo de resolución de conflictos en la comunidad si surgiera alguno.
          </li>
          <li>
            Fomentar la participación de todas las personas interesadas en las actividades de
            CoDeAr, ya que la diversidad y los distintos puntos de vista son muy importantes
            para esta comunidad.
          </li>
        </ul>
        <Important>
          Ante cualquier inconveniente, la organización está disponible para intermediar y
          resolver conflictos. No dudes en solicitar la ayuda de las personas identificadas
          como organizadoras en estos casos.
        </Important>
      </ObjectivesSection>
      <section>
        <article>
          <h2>
            Está terminantemente prohibido el acoso.
          </h2>
          <p>
            Por acoso entendemos la comunicación ofensiva, las imágenes sexuales en espacios
            públicos, el uso de lenguaje sexualizado, la intimidación deliberada, acecho,
            acoso fotográfico o grabación sin el consentimiento de la persona, interrupción
            sostenida de conversaciones, insultos, comentarios degradantes, ataques personales,
            chistes discriminatorios, contacto físico inapropiado y atención sexual no deseada.
          </p>
        </article>
        <article>
          <h2>
            No toleramos el comportamiento abusivo.
          </h2>
          <p>
            Si algún participante presenta un comportamiento abusivo, la organización de la
            actividad o cualquier representante de la Comisión Directiva de CoDeAr podrá accionar
            de la forma que considere oportuna, ya sea con un pedido al ofensor para cambiar su
            comportamiento o la expulsión del mismo según la gravedad de la situación.
          </p>
        </article>
      </section>
      <OutroSection>
        <h2>
          Ayudanos a crear ambientes positivos.
        </h2>
        <p>
          Ejemplos de comportamiento que contribuyen a crear un ambiente positivo:
        </p>
        <ul>
          <li>
            Utilizar lenguaje neutro.
          </li>
          <li>
            Respetar los distintos puntos de vista y experiencias.
          </li>
          <li>
            Aceptar las críticas constructivas.
          </li>
          <li>
            Mostrar empatía hacia quienes participan de las actividades.
          </li>
        </ul>
        <Important>
          Desde la Asociación estaremos disponibles, en todo momento, para ayudar a las personas
          que asistan a resolver cualquier conflicto que pudiera ocurrir. Ante la menor duda,
          incomodidad o si notás que alguien está sufriendo una situación de acoso, no dudes en
          ponerte en contacto a&nbsp;
          <a href="mailto:cc@codear.org" title="cc@codear.org">
            cc@codear.org
          </a>
          .
        </Important>
      </OutroSection>
    </Content>
  </Container>
);

export default Coc;
