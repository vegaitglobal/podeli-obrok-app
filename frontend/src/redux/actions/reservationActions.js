export const GET_RESERVATIONS_BY_DEVICE_ID = 'GET_RESERVATIONS_BY_DEVICE_ID';

export const getReservationsByDeviceId = payload => ({
  type: GET_RESERVATIONS_BY_DEVICE_ID,
  payload: payload,
});
