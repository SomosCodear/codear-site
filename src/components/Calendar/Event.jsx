import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { BREAKPOINTS, COLORS } from '../../style/constants';
import { SROnlyText } from '../SROnlyText';
import { formatNumber } from '../../utils/format';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
  @media (min-width: ${BREAKPOINTS.lilac.mobile}) {
    margin-top: 0;
  }
`;

const EventDate = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.625rem;
  background-color: var(--color-secondary);
  border-radius: 0.625rem 0 0 0.625rem;
  font-weight: 300;
  font-size: 1.5rem;
  line-height: 1.5rem;
  color: var(--color-text);
  @media (min-width: ${BREAKPOINTS.lilac.mobile}) {
    display: none;
  }
`;

const EventDay = styled.div`
  font-size: 4rem;
  line-height: 4rem;
`;

const EventInfo = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
  padding: 0.625rem 1.25rem;
  border: solid 0.0625rem var(--color-secondary);
  border-right: 0;
  @media (min-width: ${BREAKPOINTS.lilac.mobile}) {
    border: 0;
    padding: 0;
  }
`;

const EventName = styled.span`
  flex-grow: 1;
  overflow: hidden;
  font-family: Source Sans Pro;
  font-size: 1.5rem;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--color-primary-light);
  white-space: nowrap;
  text-overflow: ellipsis;
  @media (min-width: ${BREAKPOINTS.lilac.mobile}) {
    text-transform: none;
    font-weight: 400;
    font-size: inherit;
    color: inherit;
  }
`;

const EventAddressMeta = styled.div`
  color: var(--color-primary);
  @media (min-width: ${BREAKPOINTS.lilac.mobile}) {
    display: none;
  }
`;

const EventLink = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1.25rem;
  border: solid 0.0625rem var(--color-secondary);
  border-left: 0;
  border-radius: 0 0.625rem 0.625rem 0;
  fill: var(--color-secondary);
  @media (min-width: ${BREAKPOINTS.lilac.mobile}) {
    display: none;
  }
`;

const DAY_NAMES = [
  'dom',
  'lun',
  'mar',
  'mié',
  'jue',
  'vie',
  'sáb',
];

const SR_DAY_NAMES = [
  'domingo',
  'lunes',
  'martes',
  'miercoles',
  'jueves',
  'viernes',
  'sábado',
];

export const Event = ({
  date,
  name,
  street,
  city,
  country,
  link,
}) => {
  const fdate = new Date(date);
  return (
    <Container>
      <EventDate>
        <div>
          <span aria-hidden="true">
            {DAY_NAMES[fdate.getDay()]}
          </span>
          <SROnlyText>
            {SR_DAY_NAMES[fdate.getDay()]}
          </SROnlyText>
        </div>
        <EventDay>
          {formatNumber(fdate.getDate())}
        </EventDay>
        <div>
          <SROnlyText>a las</SROnlyText>
          {formatNumber(fdate.getHours())}
          :
          {formatNumber(fdate.getMinutes())}
        </div>
      </EventDate>
      <EventInfo>
        <EventName title={name}>
          {name}
        </EventName>
        <EventAddressMeta>
          <SROnlyText>Dirección:</SROnlyText>
          {street}
        </EventAddressMeta>
        <EventAddressMeta>
          <SROnlyText>Ciudad:</SROnlyText>
          {`${city}, ${country}`}
        </EventAddressMeta>
      </EventInfo>
      <EventLink
        href={link}
        target="_blank"
        aria-label="Abrir página del evento"
      >
        <lilac-icon-chevron
          direction="right"
          color={COLORS.secondary}
          width="16"
          height="40"
        />
      </EventLink>
    </Container>
  );
};

Event.defaultProps = {
  street: '',
  city: '',
  country: '',
  link: '',
};

Event.propTypes = {
  date: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  street: PropTypes.string,
  city: PropTypes.string,
  country: PropTypes.string,
  link: PropTypes.string,
};
