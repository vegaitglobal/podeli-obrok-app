import moment from 'moment';

export const convertExpirationDays = (expirationDate) => {
  const expiresOnDays = moment(expirationDate)
    .subtract(moment().day(), 'days')
    .day();
  return expiresOnDays.toString().length === 1
    ? '0' + expiresOnDays.toString()
    : expiresOnDays.toString();
};

export const convertExpirationHours = (expirationDate) => {
  const expiresOnHours = moment(expirationDate).subtract(moment()).hour();
  return expiresOnHours.toString().length === 1
    ? '0' + expiresOnHours.toString()
    : expiresOnHours.toString();
};

export const checkNumberDigit = (number) =>
  number?.toString().length === 1
    ? '0' + number?.toString()
    : number?.toString();
