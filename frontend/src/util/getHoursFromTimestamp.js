export const getHoursFromTimestamp = (string) => {
  return string.split('T')[1].substring(0, 2);
};
