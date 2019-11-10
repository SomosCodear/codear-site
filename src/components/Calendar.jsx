import React from 'react';
import PropTypes from 'prop-types';

export const Calendar = ({ name, events }) => (
  <lilac-calendar
    name={name}
    events={JSON.stringify(events)}
  />
);

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
