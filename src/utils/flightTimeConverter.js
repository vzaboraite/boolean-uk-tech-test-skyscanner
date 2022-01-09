/* 
   Formatting arrival and departure times to hours and minutes from given date string.
   Resource => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString
*/
function convertFlightTime(date) {
  const dateToConvert = new Date(date);
  const flightTime = dateToConvert.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });

  return flightTime;
}

export default convertFlightTime;
