import React from 'react';

export const Calendar = ({ name, events }) => (
  <lilac-calendar
    name={name}
    events={JSON.stringify(events)} />
)
