import { baseURL } from './mealService';

export const getReservationsByDeviceId = async (deviceId) => {
  return fetch(`${baseURL}/reservations?reservedByDeviceId=${deviceId}`);
};

// payload example for createReservationForMeal
// {
//     "reservedByDeviceId": "69",
//     "cancelled": false,
//     "mealId": 1
// }

export const createReservationForMeal = async (reservation) => {
  return fetch(`${baseURL}/reservations`, {
    method: 'POST',
    headers: {
      Accept: 'application/json; charset=utf-8',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(reservation)
  });
};

export const cancelReservation = async (reservationId) => {
  return fetch(`${baseURL}/reservations?reservationId=${reservationId}`, {
    method: 'DELETE'
  });
};
