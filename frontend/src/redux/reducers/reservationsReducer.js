import {GET_RESERVATIONS_BY_DEVICE_ID} from '../actions/reservationActions';

const initialState = [
  {
    id: '',
    reservedByDeviceId: '',
    cancelled: '',
    meal: {
      id: '',
      createdByDeviceId: '',
      name: '',
      description: '',
      address: '',
      phone: '',
      smsOnly: '',
      daysToExpiry: '',
      hoursToExpiry: '',
      expiresOn: '',
      startPickupTime: '',
      endPickupTime: '',
      lat: '',
      long: '',
    },
  },
];

const reservationReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RESERVATIONS_BY_DEVICE_ID:
      ({...action.payload});
    default:
      return state;
  }
};

export default reservationReducer;
