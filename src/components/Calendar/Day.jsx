import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { BREAKPOINTS } from '../../style/constants';
import { Event } from './Event';
import { SROnlyText } from '../SROnlyText';
import { formatNumber, inflect } from '../../utils/format';

const DayNumber = styled.div`
  display: none;
  @media (min-width: ${BREAKPOINTS.lilac.mobile}) {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 1.5rem;
    color: var(--color-secondary);
  }
`;

const Events = styled.div`
  @media (min-width: ${BREAKPOINTS.lilac.mobile}) {
    padding-left: 0.9rem;
    list-style: disc;
    font-size: 0.75rem;
    line-height: 1.5;
    color: var(--color-primary-light);
  }
`;

const EventContainer = styled.div`
  @media (min-width: ${BREAKPOINTS.lilac.mobile}) {
    display: list-item;
    &::marker {
      font-size: 0.9rem;
    }
  }
`;

const Container = styled.div`
  display: block;
  lilac-icon-bullet, lilac-icon-plus {
    display: none;
  }
  @media (min-width: ${BREAKPOINTS.lilac.mobile}) {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    lilac-icon-bullet {
      margin-left: 0.375rem;
    }
    lilac-icon-plus {
      flex-grow: 1;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      stroke: var(--color-gray);
    }
  }
`;

const DayContainer = styled.div`
  ${({ empty }) => empty && css`
    display: none;
  `}
  @media (min-width: ${BREAKPOINTS.lilac.mobile}) {
    flex-grow: 1;
    overflow: hidden;
    padding: 0.625rem;
    border: 0.0625rem solid var(--color-secondary);
    border-radius: 0.625rem;
    ${({ empty }) => empty && css`
      display: block;
    `}
    &:hover {
      ${DayNumber} {
        font-weight: bold;
      }
      lilac-icon-bullet {
        display: block;
        fill: var(--color-secondary);
      }
    }
    ${({ today }) => today && css`
      background-color: var(--color-secondary);
      ${DayNumber} {
        color: var(--color-text);
        font-weight: 700;
      }
      ${Events}, a {
        color: var(--color-text);
      }
      &:hover lilac-icon-bullet {
        fill: var(--color-text);
      }
    `}
  }
`;

export const Day = ({
  day,
  events,
  isToday,
}) => {
  const isEmpty = useMemo(() => events.length === 0, [events]);
  return (
    <Container
      aria-hidden={isEmpty}
    >
      <DayContainer
        today={isToday}
        empty={isEmpty}
      >
        <DayNumber>
          <SROnlyText>Eventos para el</SROnlyText>
          {formatNumber(day)}
          <SROnlyText>
            {`Hay ${events.length} ${inflect(events.length, 'evento', 'eventos')} para este dia`}
          </SROnlyText>
          <lilac-icon-bullet />
          {
            events.length > 3
              ? <lilac-icon-plus height="16" width="16" />
              : null
          }
        </DayNumber>
        <Events role="list">
          {events.map((event) => (
            <EventContainer key={`${event.name} ${event.date}`}>
              <Event
                role="listitem"
                date={event.date}
                name={event.name}
                street={event.street}
                city={event.city}
                country={event.country}
                link={event.link}
              />
            </EventContainer>
          ))}
        </Events>
      </DayContainer>
    </Container>
  );
};

Day.propTypes = {
  day: PropTypes.number.isRequired,
  isToday: PropTypes.bool.isRequired,
  events: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      street: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
