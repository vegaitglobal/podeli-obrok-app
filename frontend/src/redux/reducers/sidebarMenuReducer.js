import {
  SET_SIDEBAR_ACTIVE,
  SET_SIDEBAR_POSITION,
  IS_MY_MEALS_ACTIVE
} from '../actions/sidebarMenuAction';

const initalState = {
  isActive: false,
  topPosition: 0,
  isMyMeals: false
};

export const sidebarMenuReducer = (state = initalState, action) => {
  switch (action.type) {
    case SET_SIDEBAR_ACTIVE:
      return {
        ...state,
        isActive: action.payload
      };
    case IS_MY_MEALS_ACTIVE:
      return {
        ...state,
        isMyMeals: action.payload
      };
    case SET_SIDEBAR_POSITION:
      return {
        ...state,
        topPosition: action.payload
      };
    default:
      return state;
  }
};
export default sidebarMenuReducer;
