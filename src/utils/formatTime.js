export const pad = (string) => (string + "").padStart(2, 0);

export const getWeekdayMonthYear = (time) =>
  ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][time.getDay()] +
  ", " +
  [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ][time.getMonth()] +
  " " +
  pad(time.getDate()) +
  ", " +
  time.getFullYear();

export const getHoursMinutesSeconds = (time) =>
  pad(time.getHours()) +
  ":" +
  pad(time.getMinutes()) +
  ":" +
  pad(time.getSeconds());
