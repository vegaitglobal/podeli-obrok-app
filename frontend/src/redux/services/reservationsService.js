import { API_BASE_URL } from '@env';

export const getReservationsByDeviceId = async (deviceId) => {
  return fetch(`${API_BASE_URL}/reservations?reservedByDeviceId=${deviceId}`);
};

export const createReservationForMeal = async (reservation) => {
  return fetch(`${API_BASE_URL}/reservations`, {
    method: 'POST',
    headers: {
      Accept: 'application/json; charset=utf-8',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(reservation)
  });
};

export const cancelReservationService = async (reservationId) => {
  return fetch(`${API_BASE_URL}/reservations?reservationId=${reservationId}`, {
    method: 'DELETE'
  });
};
