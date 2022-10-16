import {
  SET_SIDEBAR_ACTIVE,
  SET_SIDEBAR_UNACTIVE,
} from '../actions/sidebarMenuAction';

const initalState = {isActive: false};

export const sidebarMenuReducer = (state = initalState, action) => {
  switch (action.type) {
    case SET_SIDEBAR_ACTIVE:
      return {
        isActive: action.payload,
      };
    // case SET_SIDEBAR_UNACTIVE:
    //   return {
    //     ...state,
    //     count: action.payload,
    //   };
    default:
      return state;
  }
};
export default sidebarMenuReducer;
