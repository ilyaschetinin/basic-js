module.exports = function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }

  // validation based on https://stackoverflow.com/a/643827
  if (Object.prototype.toString.call(date) !== '[object Date]') {
    throw new Error();
  }

  let season;
  const month = date.getMonth();
  switch (month) {
    case 0:
    case 1:
    case 11:
      season = 'winter';
      break;
    case 2:
    case 3:
    case 4:
      season = 'spring';
      break;
    case 5:
    case 6:
    case 7:
      season = 'summer';
      break;
    case 8:
    case 9:
    case 10:
      season = 'fall';
      break;
  }

  return season;
};
