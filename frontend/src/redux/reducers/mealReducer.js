import { SET_ALL_MEALS } from '../actions/mealActions';

const initialState = null;
export const mealReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALL_MEALS:
      return action.payload
    default:
      return state;
  }
};
