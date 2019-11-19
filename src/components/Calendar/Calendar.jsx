import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { BREAKPOINTS } from '../../style/constants';
import { MonthSelector } from './MonthSelector';
import { SROnlyText } from '../SROnlyText';
import { formatMonth } from '../../utils/format';
import { Day } from './Day';

const Section = styled.section`
  position: relative;
  max-width: 47.5rem;
  padding: 1rem;
  @media (min-width: ${BREAKPOINTS.lilac.mobile}) {
    display: grid;
    grid-template-columns: repeat(auto-fill, 6.25rem);
    grid-auto-rows: 6.25rem;
    grid-gap: 0.625rem;
  }
`;

const Header = styled.header`
  z-index: 1;
  @media (min-width: ${BREAKPOINTS.lilac.mobile}) {
    display: flex;
    flex-direction: column-reverse;
    grid-column-start: 1;
    grid-column-end: 5;
  }
`;

const Title = styled.h2`
  display: none;
  @media (min-width: ${BREAKPOINTS.lilac.mobile}) {
    display: initial;
    font-size: 4rem;
    font-weight: 100;
    color: var(--color-primary-light);
    margin: 0;
  }
`;

const Subtitle = styled.h3``;
const Days = styled.div`
  position: relative;
  padding: 0;
  margin: 0.25rem 0 0;
  min-height: 27rem;
  @media (min-width: ${BREAKPOINTS.lilac.mobile}) {
    display: contents;
    min-height: unset;
  }
`;

export const Calendar = ({
  name,
  events,
}) => {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const getDaysInMonth = () => {
    // passing 0 to the day parameter makes the new date to point to the last day of the previous
    // month; hence the currentMonth + 1
    const lastDay = new Date(currentYear, currentMonth + 1, 0);
    return lastDay.getDate();
  };

  const hasEventsForMonth = () => events.find(({ date }) => {
    const eventDate = new Date(date);
    return eventDate.getFullYear() === currentYear
      && eventDate.getMonth() === currentMonth;
  }) != null;

  const getEventsForDay = (day) => events.filter(({ date }) => {
    const eventDate = new Date(date);
    return eventDate.getFullYear() === currentYear
      && eventDate.getMonth() === currentMonth
      && eventDate.getDate() === day;
  });

  const handlePreviousMonthEvent = () => {
    const nextCurrentMonth = currentMonth - 1;
    if (nextCurrentMonth < 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(nextCurrentMonth);
    }
  };

  const handleNextMonthEvent = () => {
    const nextCurrentMonth = currentMonth + 1;
    if (nextCurrentMonth > 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(nextCurrentMonth);
    }
  };

  const renderDay = (currentDay) => (
    <Day
      key={currentDay}
      day={currentDay}
      events={getEventsForDay(currentDay)}
      isToday={currentMonth === today.getMonth() && today.getDate() === currentDay}
    />
  );

  const renderNoEventsOverlay = () => (
    <lilac-overlay size="big" open>
      <lilac-overlay-title>
        No tenemos eventos agendados para este mes
      </lilac-overlay-title>
    </lilac-overlay>
  );

  const days = Array.from(Array(getDaysInMonth()), (_, index) => index + 1);
  return (
    <Section>
      <Header>
        <Title>{name}</Title>
        <MonthSelector
          currentMonth={currentMonth}
          currentYear={currentYear}
          onPreviousMonthClick={handlePreviousMonthEvent}
          onNextMonthClick={handleNextMonthEvent}
        />
        <SROnlyText>
          <Subtitle>
            {`Eventos para ${formatMonth(currentMonth, currentYear)}`}
          </Subtitle>
        </SROnlyText>
      </Header>
      <Days>
        {days.map(renderDay)}
        {hasEventsForMonth() ? null : renderNoEventsOverlay()}
      </Days>
    </Section>
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
