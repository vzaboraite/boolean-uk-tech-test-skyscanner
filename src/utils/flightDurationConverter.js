function convertFlightDuration(time) {
  const hours = Math.floor(time / 60);
  const minutes = Math.floor(time % 60);

  const durationString = `${hours}h ${minutes}`;

  return durationString;
}

export default convertFlightDuration;
