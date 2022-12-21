import {SET_SIDEBAR_ACTIVE, SET_SIDEBAR_POSITION} from '../actions/sidebarMenuAction';

const initalState = {
  isActive: false,
  topPosition: 0
};

export const sidebarMenuReducer = (state = initalState, action) => {
  switch (action.type) {
    case SET_SIDEBAR_ACTIVE:
      return {
        ...state,
        isActive: action.payload,
      };
    case SET_SIDEBAR_POSITION:
      return {
        ...state,
        topPosition: action.payload,
      }
    default:
      return state;
  }
};
export default sidebarMenuReducer;
