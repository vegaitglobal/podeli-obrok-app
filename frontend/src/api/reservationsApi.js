export const fetchReservationsByDeviceId = () => () => {
  try {
    return getReservationsByDeviceId(getState().device.id);
  } catch (err) {
    console.log('error message: ', err);
  }
};
