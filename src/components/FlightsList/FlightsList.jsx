import React from 'react';

import STYLES from './FlightsList.scss';

const getClassName = (className) => STYLES[className] || 'UNKNOWN';

const FlightsList = ({ flights }) => {
  return (
    <ul className={getClassName('FlightsList')}>
    </ul>
  );
};

export default FlightsList;
