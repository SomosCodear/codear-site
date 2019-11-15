import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { formatMonth } from '../../utils/format';

const List = styled.ol`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
  @media (min-width: 45rem) {
    justify-content: flex-start;
  }
`;

const ListItem = styled.li`
  ${({ currentMonth }) => currentMonth && css`
    font-family: Source Sans Pro;
    font-size: 1.5rem;
    color: var(--color-primary-light);
    @media (min-width: 45rem) {
      min-width: 12rem;
      text-align: center;
      color: var(--color-primary-lightest);
    }
  `}
`;

const NavButton = styled.button`
  display: block;
  padding: 0.5rem 1rem;
  border: solid 0.0625rem var(--color-primary-lightest);
  border-radius: 0.625rem;
  background-color: transparent;
  cursor: pointer;
  fill: var(--color-primary-lightest);
  &:hover, &:focus {
    border-color: var(--color-secondary);
    fill: var(--color-secondary);
  }
  @media (min-width: 45rem) {
    padding: 0;
    border: 0;
  }
`;

export const MonthSelector = ({
  currentMonth,
  currentYear,
  onPreviousMonthClick,
  onNextMonthClick,
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
    <nav aria-label="Eventos por més">
      <List>
        <ListItem>
          <NavButton
            previousMonth
            aria-label={`Ver eventos para ${previousMonthText()}`}
            onClick={onPreviousMonthClick}
          >
            <lilac-icon-chevron
              color="#657CBD"
              hovercolor="#A70055"
            />
          </NavButton>
        </ListItem>
        <ListItem
          aria-hidden="true"
          currentMonth
        >
          {currentMonthText()}
        </ListItem>
        <ListItem>
          <NavButton
            nextMonth
            aria-label={`Ver eventos para ${nextMonthText()}`}
            onClick={onNextMonthClick}
          >
            <lilac-icon-chevron
              direction="right"
              color="#657CBD"
              hovercolor="#A70055"
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
  onNextMonthClick: PropTypes.func.isRequired,
};
