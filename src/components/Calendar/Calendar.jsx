import React, {
  useState, useCallback, useMemo, useEffect,
} from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { BREAKPOINTS } from '../../style/constants';
import mediaQuery from '../../hooks/mediaQuery';
import { MonthSelector } from './MonthSelector';
import { SROnlyText } from '../SROnlyText';
import { formatMonth } from '../../utils/format';
import { Day } from './Day';

const SectionCardCalendar = css`
  display: none;

  @media (min-width: ${BREAKPOINTS.lilac.mobile}) {
    margin-top: -70px;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    min-height: unset;
    grid-auto-rows: 5.25rem;
    grid-gap: 0.625rem;
    display: grid;
    min-height: 20rem;
    max-width: 90.5rem;
  }
`;

const Section = styled.section`
  position: relative;
  justify-content: center;
  padding-left: 4.1rem;
  padding-right: 4.1rem;

  @media (min-width: ${BREAKPOINTS.lilac.mobile}) {
    lilac-overlay {
      margin-top: 5rem;
    }
  }

  ${({ calendarViewMode }) => (calendarViewMode ? null : SectionCardCalendar)}
`;

const Header = styled.header`
  z-index: 1;

  @media (min-width: ${BREAKPOINTS.lilac.mobile}) {
    display: flex;
    flex-direction: column-reverse;
    grid-column-start: 1;
    grid-column-end: 6;
  }
`;

const Title = styled.h2`
  display: initial;
  font-weight: 100;
  color: var(--color-primary-light);
  margin: 0;
  font-size: 2.5rem;

  @media (max-width: ${BREAKPOINTS.lilac.mobile}) {
    display: flex;
    justify-content: center;
  }

  @media (min-width: ${BREAKPOINTS.lilac.mobile}) {
    font-size: 3.25rem;
  }
`;

const ContainerNavegation = styled.div`
  padding-left: 4.1rem;
  padding-right: 4.1rem;

  @media (max-width: ${BREAKPOINTS.lilac.mobile}) {
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }
`;

const ButtonsCalendarContainer = styled.div`
  display: flex;
  padding: 0 63px 0 0;
  justify-content: flex-end;
  gap: 20px;
  margin-bottom: 20px;

  lilac-button {
    outline: 0 !important;
  }

  @media (max-width: ${BREAKPOINTS.lilac.mobile}) {
    display: none;
  }
`;

const Subtitle = styled.h3``;

export const Calendar = ({ name, events }) => {
  const today = new Date();
  const [calendarViewMode, setCalendarViewMode] = useState(false);
  const [highlightCurrentDay, setHighlightCurrentDay] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const daysInMonth = useMemo(() => {
    const lastDay = new Date(currentYear, currentMonth + 1, 0);
    const numberOfDays = lastDay.getDate();
    return Array.from(Array(numberOfDays), (_, index) => index + 1);
  }, [currentYear, currentMonth]);

  const hasNoEventsForMonth = useMemo(
    () => events.find(({ date }) => {
      const eventDate = new Date(date);
      return (
        eventDate.getFullYear() === currentYear
          && eventDate.getMonth() === currentMonth
      );
    }) == null,
    [events, currentYear, currentMonth],
  );

  const getEventsForDay = useCallback(
    (day) => events.filter(({ date }) => {
      const eventDate = new Date(date);
      return (
        eventDate.getFullYear() === currentYear
          && eventDate.getMonth() === currentMonth
          && eventDate.getDate() === day
      );
    }),
    [currentMonth, currentYear, events],
  );

  const handlePreviousMonthEvent = useCallback(() => {
    const nextCurrentMonth = currentMonth - 1;
    if (nextCurrentMonth < 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(nextCurrentMonth);
    }
  }, [currentMonth, currentYear, setCurrentMonth, setCurrentYear]);

  const handleNextMonthEvent = useCallback(() => {
    const nextCurrentMonth = currentMonth + 1;
    if (nextCurrentMonth > 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(nextCurrentMonth);
    }
  }, [currentMonth, currentYear, setCurrentMonth, setCurrentYear]);

  const handleCalendarMode = useCallback((viewMode) => {
    setCalendarViewMode(viewMode);
  }, []);

  useEffect(() => setHighlightCurrentDay(true), []);

  useEffect(() => {
    if (mediaQuery('(max-width: 768px)')) {
      setCalendarViewMode(true);
    }
  }, []);

  return (
    <>
      <ButtonsCalendarContainer>
        <lilac-button
          inverted
          color="secondary"
          onClick={() => handleCalendarMode(true)}
        >
          Ver como grilla
        </lilac-button>
        <lilac-button
          inverted
          color="secondary"
          onClick={() => handleCalendarMode(false)}
        >
          Ver cómo calendario
        </lilac-button>
      </ButtonsCalendarContainer>
      <ContainerNavegation>
        <MonthSelector
          currentYear={currentYear}
          currentMonth={currentMonth}
          calendarViewMode={calendarViewMode}
          onNextMonthClick={handleNextMonthEvent}
          onPreviousMonthClick={handlePreviousMonthEvent}
        />
        <Title calendarViewMode={calendarViewMode}>{name}</Title>
      </ContainerNavegation>
      <Section calendarViewMode={calendarViewMode}>
        <Header>
          <SROnlyText>
            <Subtitle>
              {`Eventos para ${formatMonth(currentMonth, currentYear)}`}
            </Subtitle>
          </SROnlyText>
        </Header>
        {daysInMonth.map((currentDay) => (
          <Day
            key={currentDay}
            day={currentDay}
            calendarViewMode={calendarViewMode}
            events={getEventsForDay(currentDay)}
            isToday={
              highlightCurrentDay
              && currentMonth === today.getMonth()
              && currentDay === today.getDate()
            }
          />
        ))}
        {hasNoEventsForMonth ? (
          <lilac-overlay size="big" open>
            <lilac-overlay-title>
              No tenemos eventos agendados para este mes
            </lilac-overlay-title>
          </lilac-overlay>
        ) : null}
      </Section>
    </>
  );
};

Calendar.propTypes = {
  name: PropTypes.string.isRequired,
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
