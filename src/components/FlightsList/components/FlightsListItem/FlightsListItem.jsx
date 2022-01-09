import React from 'react';
import convertFlightDuration from '../../../../utils/flightDurationConverter';
import convertFlightTime from '../../../../utils/flightTimeConverter';

import STYLES from './FlightsListItem.scss';

const getClassName = (className) => STYLES[className] || 'UNKNOWN';

const FlightsListItem = ({ flight }) => {
  const { price, agent, legs } = flight;

  return (
    <li className={getClassName('FlightsListItem')}>
      <div className={getClassName('FlightsListItem__legs__grid')}>
        {legs.map((leg) => {
          const {
            id: legId,
            airline_id,
            airline_name,
            arrival_airport,
            departure_airport,
            arrival_time,
            departure_time,
            duration_mins: duration,
            stops,
          } = leg;

          const convertedArrivalTime = convertFlightTime(arrival_time);
          const convertedDepartureTime = convertFlightTime(departure_time);

          const convertedFlightDuration = convertFlightDuration(duration);

          return (
            <React.Fragment key={legId}>
              <div
                className={getClassName('FlightsListItem__legs__trip__grid')}
              >
                <img
                  src={`https://logos.skyscnr.com/images/airlines/favicon/${airline_id}.png`}
                  alt={`${airline_name}`}
                  className={getClassName(
                    'FlightsListItem__legs__airline-image'
                  )}
                />
                <div
                  className={getClassName('FlightsListItem__legs__departure')}
                >
                  <div
                    className={getClassName(
                      'FlightsListItem__legs__departure__time'
                    )}
                  >
                    {convertedDepartureTime}
                  </div>
                  <div
                    className={getClassName(
                      'FlightsListItem__legs__departure__airport'
                    )}
                  >
                    {departure_airport}
                  </div>
                </div>
                <div>-&gt;</div>
                <div className={getClassName('FlightsListItem__legs__arrival')}>
                  <div
                    className={getClassName(
                      'FlightsListItem__legs__arrival__time'
                    )}
                  >
                    {convertedArrivalTime}
                  </div>
                  <div
                    className={getClassName(
                      'FlightsListItem__legs__arrival__airport'
                    )}
                  >
                    {arrival_airport}
                  </div>
                </div>
              </div>
              <div
                className={getClassName(
                  'FlightsListItem__legs__duration-stops'
                )}
              >
                <div>{convertedFlightDuration}</div>
                <div>{stops === 0 ? `Direct` : `${stops} Stop`}</div>
              </div>
            </React.Fragment>
          );
        })}
      </div>

      <div className={getClassName('FlightsListItem__agent_select__grid')}>
        <div className={getClassName('FlightsListItem__agent_price')}>
          <div>{price}</div>
          <div>{agent.toLowerCase()}</div>
        </div>
        <button>Select</button>
      </div>
    </li>
  );
};

export default FlightsListItem;
