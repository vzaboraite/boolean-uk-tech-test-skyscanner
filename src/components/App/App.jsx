import React, { useEffect, useState } from 'react';
import BpkText from 'bpk-component-text';

import Header from '../Header';

import STYLES from './App.scss';
import FlightsList from '../FlightsList';

const getClassName = (className) => STYLES[className] || 'UNKNOWN';

const App = () => {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/flights.json')
      .then((res) => res.json())
      .then((data) => {
        const itineraries = data.itineraries;
        const legs = data.legs;

        const flightsData = itineraries.map((itinerary) => {
          const updatedLegs = itinerary.legs.map((leg) =>
            legs.find((legItem) => legItem.id === leg)
          );
          const updatedItinerary = {
            ...itinerary,
            legs: updatedLegs,
          };
          return updatedItinerary;
        });

        setFlights(flightsData);
      });
  }, []);

  if (flights.length === 0) {
    return 'Loading...';
  }

  return (
    <div className={getClassName('App')}>
      <Header />
      <main className={getClassName('App__main')}>
        {flights && <FlightsList flights={flights} />}
      </main>
    </div>
  );
};

export default App;
