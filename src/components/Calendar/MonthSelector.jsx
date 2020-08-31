import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { COLORS } from '../../style/constants';
import { formatMonth } from '../../utils/format';

const listGrid = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const listCalendar = css`
  margin-top: 35px;
  align-items: center;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: flex-start;
  list-style-type: none;
`;

const List = styled.ol`
  ${({ calendarViewMode }) => (calendarViewMode ? listGrid : listCalendar)}
`;

const ListItem = styled.li`
  margin-bottom: 20px;
  ${({ currentMonth }) => currentMonth
    && css`
      font-family: Source Sans Pro, sans-serif;
      font-size: 1.5rem;
      color: var(--color-primary-light);
      min-width: 12rem;
      text-align: center;
      color: var(--color-primary-lightest);
    `}
`;

const navButtonCalendar = css`
  display: block;
  padding: 0.5rem 1rem;
  background-color: transparent;
  cursor: pointer;
  fill: var(--color-primary-lightest);
  &:hover,
  &:focus {
    border-color: var(--color-secondary);
    fill: var(--color-secondary);
  }
`;

const NavButton = styled.button`
  border: none;
  ${({ calendarViewMode }) => (calendarViewMode ? navButtonCalendar : navButtonCalendar)}
`;

export const MonthSelector = ({
  currentMonth,
  currentYear,
  onPreviousMonthClick,
  onNextMonthClick,
  calendarViewMode,
}) => {
  const currentMonthText = () => formatMonth(currentMonth, currentYear);
  const previousMonthText = () => {
    let month;
    let year;

    if (currentMonth === 0) {
      month = 11;
      year = currentYear - 1;
    } else {
      month = currentMonth - 1;
      year = currentYear;
    }

    return formatMonth(month, year);
  };

  const nextMonthText = () => {
    let month;
    let year;

    if (currentMonth === 11) {
      month = 0;
      year = currentYear + 1;
    } else {
      month = currentMonth + 1;
      year = currentYear;
    }

    return formatMonth(month, year);
  };

  return (
    <nav aria-label="Eventos por mes">
      <List calendarViewMode={calendarViewMode}>
        <ListItem calendarViewMode={calendarViewMode}>
          <NavButton
            previousMonth
            aria-label={`Ver eventos para ${previousMonthText()}`}
            onClick={onPreviousMonthClick}
          >
            <lilac-icon-chevron
              color={COLORS.primaryLightest}
              hovercolor={COLORS.secondary}
            />
          </NavButton>
        </ListItem>
        <ListItem aria-hidden="true" currentMonth>
          {currentMonthText()}
        </ListItem>
        <ListItem calendarViewMode={calendarViewMode}>
          <NavButton
            nextMonth
            calendarViewMode={calendarViewMode}
            aria-label={`Ver eventos para ${nextMonthText()}`}
            onClick={onNextMonthClick}
          >
            <lilac-icon-chevron
              direction="right"
              color={COLORS.primaryLightest}
              hovercolor={COLORS.secondary}
            />
          </NavButton>
        </ListItem>
      </List>
    </nav>
  );
};

MonthSelector.propTypes = {
  currentMonth: PropTypes.number.isRequired,
  currentYear: PropTypes.number.isRequired,
  onPreviousMonthClick: PropTypes.func.isRequired,
  calendarViewMode: PropTypes.bool.isRequired,
  onNextMonthClick: PropTypes.func.isRequired,
};
