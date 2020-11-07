import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Event } from './Event';
import { SROnlyText } from '../SROnlyText';
import { formatNumber, inflect } from '../../utils/format';

const hide = css`
  display: none;
`;

const dayNumberCalendar = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 1.5rem;
  color: var(--color-secondary);
`;

const DayNumber = styled.div`
  ${({ calendarViewMode }) => (calendarViewMode ? hide : dayNumberCalendar)}
`;

const eventsCalendar = css`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  padding-left: 0.9rem;
  list-style: disc;
  font-size: 0.75rem;
  color: var(--color-primary-light);
`;

const Events = styled.div`
  ${({ calendarViewMode }) => (calendarViewMode ? null : eventsCalendar)}
`;

const eventCalendar = css`
  display: list-item;

  &::marker {
    font-size: 0.9rem;
  }
`;

const eventGrid = css`
  margin-top: 20px;
`;

const EventContainer = styled.div`
  ${({ calendarViewMode }) => (calendarViewMode ? eventGrid : eventCalendar)}
`;

const containerGrid = css`
  display: block;
  lilac-icon-bullet,
  lilac-icon-plus {
    display: none;
  }
  display: flex;
  flex-direction: column;
  align-items: stretch;
  overflow: hidden;
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
`;

const Container = styled.div`
  ${({ calendarViewMode }) => (calendarViewMode ? null : containerGrid)}
`;

const dayContainerCalendar = css`
  flex-grow: 1;
  overflow: hidden;
  padding: 0.625rem;
  border: 0.0625rem solid var(--color-secondary);
  border-radius: 0.625rem;
  ${({ empty }) =>
    empty &&
    css`
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
  ${({ today }) =>
    today &&
    css`
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
`;

const mTopCard = css`
  margin-top: 20px;
`;

const DayContainer = styled.div`
  ${({ empty }) =>
    empty &&
    css`
      display: none;
    `}

  ${({ calendarViewMode }) => (calendarViewMode ? mTopCard : dayContainerCalendar)}
`;

export const Day = ({ day, events, isToday, calendarViewMode }) => {
  const isEmpty = useMemo(() => events.length === 0, [events]);

  return (
    <Container calendarViewMode={calendarViewMode} aria-hidden={isEmpty}>
      <DayContainer today={isToday} empty={isEmpty} calendarViewMode={calendarViewMode}>
        <DayNumber calendarViewMode={calendarViewMode}>
          <SROnlyText>Eventos para el</SROnlyText>
          {formatNumber(day)}
          <SROnlyText>
            {`Hay ${events.length} ${inflect(
              events.length,
              'evento',
              'eventos',
            )} para este dia`}
          </SROnlyText>
          <lilac-icon-bullet />
          {events.length > 3 ? <lilac-icon-plus height="16" width="16" /> : null}
        </DayNumber>
        <Events calendarViewMode={calendarViewMode} role="list">
          {events.map((event) => (
            <EventContainer
              calendarViewMode={calendarViewMode}
              key={`${event.name} ${event.date}`}
            >
              <Event
                role="listitem"
                date={event.date}
                name={event.name}
                city={event.city}
                link={event.link}
                street={event.street}
                country={event.country}
                calendarViewMode={calendarViewMode}
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
  calendarViewMode: PropTypes.bool.isRequired,
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
