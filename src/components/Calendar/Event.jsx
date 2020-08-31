import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { COLORS } from '../../style/constants';
import { SROnlyText } from '../SROnlyText';
import { formatNumber } from '../../utils/format';
import { useEdgeHTML } from '../../hooks';

const hide = css`
  display: none;
`;

const containerEvent = css`
  margin-top: 0;
  max-width: 100%;
  ${({ inline }) => inline
    && css`
      display: inline-block;
      margin-bottom: -4px;
    `}
`;

const Container = styled.a`
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
  text-decoration: none;
  color: var(--color-primary-light);

  ${({ calendarViewMode }) => (calendarViewMode ? null : containerEvent)}
`;

const EventDate = styled.span`
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

  ${({ calendarViewMode }) => (calendarViewMode ? null : hide)}
`;

const EventDay = styled.span`
  display: block;
  font-size: 4rem;
  line-height: 4rem;
`;

const eventInfoCalendar = css`
  border: 0;
  padding: 0;
  display: block;
`;

const eventInfoGrid = css`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
  padding: 0.625rem 1.25rem;
  border: solid 0.0625rem var(--color-secondary);
  border-right: 0;
`;

const EventInfo = styled.span`
  ${({ calendarViewMode }) => (calendarViewMode ? eventInfoGrid : eventInfoCalendar)}
`;

const eventNameCalendar = css`
  text-transform: none;
  font-weight: 400;
  font-size: inherit;
  color: inherit;
  display: block;
`;

const eventNameGrid = css`
  flex-grow: 1;
  overflow: hidden;
  font-family: Source Sans Pro;
  font-size: 1.5rem;
  font-weight: 700;
  text-transform: uppercase;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const EventName = styled.span`
  ${({ calendarViewMode }) => (calendarViewMode ? eventNameGrid : eventNameCalendar)}
`;

const eventAddressMetaGrid = css`
  display: block;
  color: var(--color-primary);
`;

const EventAddressMeta = styled.span`
  ${({ calendarViewMode }) => (calendarViewMode ? eventAddressMetaGrid : hide)}
`;

const eventArrowGrid = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1.25rem;
  border: solid 0.0625rem var(--color-secondary);
  border-left: 0;
  border-radius: 0 0.625rem 0.625rem 0;
  fill: var(--color-secondary);
`;

const EventArrow = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1.25rem;
  border: solid 0.0625rem var(--color-secondary);
  border-left: 0;
  border-radius: 0 0.625rem 0.625rem 0;
  fill: var(--color-secondary);

  ${({ calendarViewMode }) => (calendarViewMode ? eventArrowGrid : hide)}
`;

const DAY_NAMES = ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'];

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
  calendarViewMode,
}) => {
  const fdate = new Date(date);
  const edge = useEdgeHTML();

  return (
    <Container
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir página del evento"
      inline={edge}
    >
      <EventDate calendarViewMode={calendarViewMode}>
        <span>
          <span aria-hidden="true">{DAY_NAMES[fdate.getDay()]}</span>
          <SROnlyText>{SR_DAY_NAMES[fdate.getDay()]}</SROnlyText>
        </span>
        <EventDay>{formatNumber(fdate.getDate())}</EventDay>
        <div>
          <SROnlyText>a las</SROnlyText>
          {formatNumber(fdate.getHours())}
          :
          {formatNumber(fdate.getMinutes())}
        </div>
      </EventDate>
      <EventInfo calendarViewMode={calendarViewMode}>
        <EventName calendarViewMode={calendarViewMode} title={name}>
          {name}
        </EventName>
        <EventAddressMeta calendarViewMode={calendarViewMode}>
          <SROnlyText>Dirección:</SROnlyText>
          {street}
        </EventAddressMeta>
        <EventAddressMeta calendarViewMode={calendarViewMode}>
          <SROnlyText>Ciudad:</SROnlyText>
          {`${city}, ${country}`}
        </EventAddressMeta>
      </EventInfo>
      <EventArrow calendarViewMode={calendarViewMode} aria-hidden="true">
        <lilac-icon-chevron
          direction="right"
          color={COLORS.secondary}
          width="16"
          height="40"
        />
      </EventArrow>
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
  calendarViewMode: PropTypes.bool.isRequired,
  city: PropTypes.string,
  country: PropTypes.string,
  link: PropTypes.string,
};
