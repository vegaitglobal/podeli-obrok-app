import Config from 'react-native-config';

const baseUrl = Config.API_BASE_URL;

export const getReservationsByDeviceId = async (deviceId) => {
  return fetch(`${baseUrl}/reservations?reservedByDeviceId=${deviceId}`);
};

export const createReservationForMeal = async (reservation) => {
  return fetch(`${baseUrl}/reservations`, {
    method: 'POST',
    headers: {
      Accept: 'application/json; charset=utf-8',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(reservation)
  });
};

export const cancelReservationService = async (reservationId) => {
  return fetch(`${baseUrl}/reservations?reservationId=${reservationId}`, {
    method: 'DELETE'
  });
};
