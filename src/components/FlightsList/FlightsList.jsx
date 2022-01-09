import React from 'react';

import STYLES from './FlightsList.scss';
import FlightsListItem from './components/FlightsListItem/FlightsListItem';

const getClassName = (className) => STYLES[className] || 'UNKNOWN';

const FlightsList = ({ flights }) => {
  return (
    <ul className={getClassName('FlightsList')}>
      {flights.map((flight) => {
        return <FlightsListItem key={flight.id} flight={flight} />;
      })}
    </ul>
  );
};

export default FlightsList;
