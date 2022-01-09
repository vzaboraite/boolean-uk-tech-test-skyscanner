import React from 'react';

import STYLES from './FlightsListItem.scss';

const getClassName = (className) => STYLES[className] || 'UNKNOWN';

const FlightsListItem = ({ flight }) => {
  return (
    <li className={getClassName('FlightsListItem')}>
    </li>
  );
};

export default FlightsListItem;
