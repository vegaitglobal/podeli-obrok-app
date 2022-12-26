export const SET_SIDEBAR_ACTIVE = 'SET_SIDEBAR_ACTIVE';
export const SET_SIDEBAR_POSITION = 'SET_SIDEBAR_POSITION';
export const IS_MY_MEALS_ACTIVE = 'IS_MY_MEALS_ACTIVE';

export const setSidebarMenuActiveAction = (isActive) => {
  return {
    type: SET_SIDEBAR_ACTIVE,
    payload: isActive
  };
};

export const setSidebarPosition = (topPosition) => ({
  type: SET_SIDEBAR_POSITION,
  payload: topPosition
});

export const setMyMealsActiveAction = (isMyMeals) => {
  return {
    type: IS_MY_MEALS_ACTIVE,
    payload: isMyMeals
  };
};
