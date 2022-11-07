import { SET_RESERVATIONS_BY_DEVICE_ID } from '../actions/reservationActions';

const initialState = null;

const reservationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_RESERVATIONS_BY_DEVICE_ID:
      ({...action.payload});
    default:
      return state;
  }
};

export default reservationReducer;
