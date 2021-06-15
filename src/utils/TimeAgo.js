module.exports.timeAgo = (timegot) => {
  const utc1 = new Date(timegot);
  const utc2 = new Date();
  const week = Math.floor((utc2 - utc1) / (1000 * 7 * 24 * 60 * 60));
  if (week == 1) {
    return timetosend = '1 W';
  }
  else if (week > 1) {
    return timetosend = week + ' W';
  }
  else {
    const day = Math.floor((utc2 - utc1) / (1000 * 24 * 60 * 60));
    var timetosend;
    if (day == 1) {
      return timetosend = day + ' D';
    }
    else if (day > 1) {
      return timetosend = day + ' D';
    }
    else {
      const hour = Math.floor((utc2 - utc1) / (1000 * 60 * 60));
      if (hour == 1) {
        return timetosend = hour + ' H';
      }
      else if (hour > 1) {
        return timetosend = hour + ' H';
      }
      else {
        const minuts = Math.floor((utc2 - utc1) / (1000 * 60));
        if (minuts == 1) {
          return timetosend = minuts + ' MIN';
        }
        else if (minuts > 1) {
          return timetosend = minuts + ' MINS';
        }
        else {
          const seconds = Math.floor((utc2 - utc1) / (1000));
          if (seconds == 1) {
            return timetosend = seconds + ' S';
          }
          else if (seconds < 1) {
            return timetosend = '0 S'
          }
          else {
            return timetosend = seconds + ' S'
          }
        }
      }
    }
  }
}