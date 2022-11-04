export const getReservationsByDeviceId = async deviceId => {
  return fetch(`${baseURL}/reservations?reservedByDeviceId=${deviceId}`);
};

//payload example for createReservationForMeal
// {
//     "reservedByDeviceId": "69",
//     "cancelled": false,
//     "mealId": 1
// }

export const createReservationForMeal = async reservation => {
  const ax = axios.create({baseURL});
  return ax.post('/reservations', reservation);
};

export const cancelReservation = async reservationId => {
  const ax = axios.create({baseURL});
  return ax.delete(`/reservations?reservationId=${reservationId}`, payload);
};
