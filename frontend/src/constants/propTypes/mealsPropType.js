import PropTypes from 'prop-types';

const { arrayOf, string, bool, number } = PropTypes;

export const mealsListPropType = arrayOf({
  createdByDeviceId: string,
  name: string,
  description: string,
  address: string,
  phone: string,
  smsOnly: bool,
  daysToExpiry: number,
  hoursToExpiry: number,
  expiresOn: string,
  startPickupTime: string,
  endPickupTime: string,
  lat: number,
  long: number,
});

export const mealPropType = {
  createdByDeviceId: string,
  name: string,
  description: string,
  address: string,
  phone: string,
  smsOnly: bool,
  daysToExpiry: number,
  hoursToExpiry: number,
  expiresOn: string,
  startPickupTime: string,
  endPickupTime: string,
  lat: number,
  long: number,
};
