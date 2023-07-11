const baseURL = process.env.API_BASE_URL;

export const getReservationsByDeviceId = async (deviceId) => {
  return fetch(`${baseURL}/reservations?reservedByDeviceId=${deviceId}`);
};

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

export const cancelReservationService = async (reservationId) => {
  return fetch(`${baseURL}/reservations?reservationId=${reservationId}`, {
    method: 'DELETE'
  });
};
