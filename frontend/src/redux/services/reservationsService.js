export const getReservationsByDeviceId = async (deviceId) => {
  return fetch(
    `${process.env.API_BASE_URL}/reservations?reservedByDeviceId=${deviceId}`,
  );
};

export const createReservationForMeal = async (reservation) => {
  return fetch(`${process.env.API_BASE_URL}/reservations`, {
    method: 'POST',
    headers: {
      Accept: 'application/json; charset=utf-8',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(reservation),
  });
};

export const cancelReservationService = async (reservationId) => {
  return fetch(
    `${process.env.API_BASE_URL}/reservations?reservationId=${reservationId}`,
    {
      method: 'DELETE',
    },
  );
};
