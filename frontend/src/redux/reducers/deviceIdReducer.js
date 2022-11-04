import {SET_DEVICE_ID} from '../actions/deviceIdActions';

const initialState = {
  id: '',
};
export const deviceIdReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DEVICE_ID:
      return {
        id: action.payload,
      };
    default:
      return state;
  }
};
