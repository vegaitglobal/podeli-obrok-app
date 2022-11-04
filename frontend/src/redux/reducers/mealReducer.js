import {GET_ALL_MEALS, GET_MEALS_BY_DEVICE_ID} from '../actions/mealActions';

const initialState = [];
export const mealReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_MEALS:
      return action.payload
    case GET_MEALS_BY_DEVICE_ID:
      ({...action.payload});
    default:
      return state;
  }
};
