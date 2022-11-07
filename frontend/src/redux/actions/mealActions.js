export const SET_ALL_MEALS = 'SET_ALL_MEALS';
export const SET_MEALS_BY_DEVICE_ID = 'SET_MEALS_BY_DEVICE_ID';

export const setAllMealsAction = payload => ({
  type: SET_ALL_MEALS,
  payload: payload,
});

export const setMealsByDeviceIdAction = payload => ({
  type: SET_MEALS_BY_DEVICE_ID,
  payload: payload,
});
