import React from 'react';
import convertFlightDuration from '../../../../utils/flightDurationConverter';
import convertFlightTime from '../../../../utils/flightTimeConverter';

import BpkText from 'bpk-component-text';

import LongArrowRightIcon from 'bpk-component-icon/sm/long-arrow-right';

import STYLES from './FlightsListItem.scss';

const getClassName = (className) => STYLES[className] || 'UNKNOWN';

const FlightsListItem = ({ flight }) => {
  const { price, agent, legs } = flight;

  return (
    <li className={getClassName('FlightsListItem')}>
      <div className={getClassName('FlightsListItem__legs')}>
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
            <div
              className={getClassName('FlightsListItem__legs__leg')}
              key={legId}
            >
              <img
                src={`https://logos.skyscnr.com/images/airlines/favicon/${airline_id}.png`}
                alt={`${airline_name}`}
                className={getClassName(
                  'FlightsListItem__legs__leg__airline-image'
                )}
              />
              <div
                className={getClassName(
                  'FlightsListItem__legs__leg__departure'
                )}
              >
                <BpkText
                  tagName="p"
                  className={getClassName(
                    'FlightsListItem__legs__leg__departure__time'
                  )}
                >
                  {convertedDepartureTime}
                </BpkText>
                <BpkText
                  tagName="p"
                  className={getClassName(
                    'FlightsListItem__legs__leg__departure__airport'
                  )}
                >
                  {departure_airport}
                </BpkText>
              </div>
              <BpkText textStyle="base">
                <LongArrowRightIcon
                  className={getClassName('FlightsListItem__legs__leg__arrow')}
                />
              </BpkText>
              <div
                className={getClassName('FlightsListItem__legs__leg__arrival')}
              >
                <BpkText
                  tagName="p"
                  className={getClassName(
                    'FlightsListItem__legs__leg__arrival__time'
                  )}
                >
                  {convertedArrivalTime}
                </BpkText>
                <BpkText
                  tagName="p"
                  className={getClassName(
                    'FlightsListItem__legs__leg__arrival__airport'
                  )}
                >
                  {arrival_airport}
                </BpkText>
              </div>
              <div
                className={getClassName(
                  'FlightsListItem__legs__leg__duration-stops'
                )}
              >
                <BpkText
                  className={getClassName(
                    'FlightsListItem__legs__leg__duration-stops__duration'
                  )}
                  tagName="p"
                >
                  {convertedFlightDuration}
                </BpkText>
                <BpkText
                  className={getClassName(
                    `FlightsListItem__legs__leg__duration-stops__stops__${
                      stops === 0 ? 'primary' : 'red'
                    }`
                  )}
                  tagName="p"
                >
                  {stops === 0 ? `Direct` : `${stops} Stop`}
                </BpkText>
              </div>
            </div>
          );
        })}
      </div>

      <div className={getClassName('FlightsListItem__select')}>
        <div className={getClassName('FlightsListItem__select__agent-price')}>
          <BpkText
            className={getClassName(
              'FlightsListItem__select__agent-price__price'
            )}
            tagName="p"
          >
            {price}
          </BpkText>
          <BpkText
            className={getClassName(
              'FlightsListItem__select__agent-price__agent'
            )}
            tagName="p"
          >
            {agent.toLowerCase()}
          </BpkText>
        </div>
        <button className={getClassName('FlightsListItem__select__button')}>
          Select
        </button>
      </div>
    </li>
  );
};

export default FlightsListItem;
