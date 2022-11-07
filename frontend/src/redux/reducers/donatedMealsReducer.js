import { SET_MEALS_BY_DEVICE_ID } from '../actions/mealActions';

const initialState = null;
export const donatedMealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MEALS_BY_DEVICE_ID:
      return action.payload;
    default:
      return state;
  }
};
