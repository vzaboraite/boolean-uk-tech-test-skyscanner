import 'bpk-stylesheets';
import 'bpk-stylesheets/font';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

ReactDOM.render(React.createElement(App), document.getElementById('root'));

/* Create functionality in a sensible file to do the following:
 * TODO - retrieve the results from the provided flight.json
 * TODO - a better format for displaying results to the results page.
 */

/*
1. fetch data from `http://localhost:3000/flights.json in App.jsx(parent component)
2. store in state
3. render retrieved data:
    3.1 create components to render the flights data:
    - FlightsList.jsx
    - FlightsListItem.jsx
4. styles:
    - small-screen size 480px portrait orientation
*/
