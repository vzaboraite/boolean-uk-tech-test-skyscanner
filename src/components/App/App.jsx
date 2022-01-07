import React, { useEffect, useState } from 'react';
import BpkText from 'bpk-component-text';

import Header from '../Header';

import STYLES from './App.scss';

const getClassName = (className) => STYLES[className] || 'UNKNOWN';

const App = () => {
  console.log('Inside App.jsx');
  const [itineraries, setItineraries] = useState([]);
  const [legs, setLegs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/flights.json')
      .then((res) => res.json())
      .then((data) => {
        setItineraries(data.itineraries);
        setLegs(data.legs);
      });
  }, []);

  console.log({ itineraries });
  console.log({ legs });

  return (
    <div className={getClassName('App')}>
      <Header />
      <main className={getClassName('App__main')}>
        <BpkText tagName="p">Over to you...</BpkText>
        {/* TODO: Add a component to display results here */}
      </main>
    </div>
  );
};

export default App;
