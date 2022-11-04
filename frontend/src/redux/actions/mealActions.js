export const GET_ALL_MEALS = 'GET_ALL_MEALS';
export const GET_MEALS_BY_DEVICE_ID = 'GET_MEALS_BY_DEVICE_ID';

export const setAllMealsAction = payload => ({
  type: GET_ALL_MEALS,
  payload: payload,
});

export const setMealsByDeviceIdAction = payload => ({
  type: GET_MEALS_BY_DEVICE_ID,
  payload: payload,
});
