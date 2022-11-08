import { screens } from '../../constants/screens';
import * as RootNavigation from '../../navigation/RootNavigation';

export const baseURL = 'http://10.0.2.2:3000';

export const getAllMeals = () => {
  return fetch(`${baseURL}/meals`);
};

// get donated meals for a user
export const getMealsByDeviceid = async (deviceId) => {
  return fetch(`${baseURL}/meals?createdByDeviceId=${deviceId}`);
};

// payload for create meal:
// {
//   "createdByDeviceId": "333433",
//   "name": "paprika paprika",
//   "description": "punjene paprike punjene paprike punjene paprike",
//   "address": "ulica paprike",
//   "phone": "44234",
//   "smsOnly": true,
//   "daysToExpiry": 5,
//   "hoursToExpiry": 5,
//   "expiresOn": "2022-10-20T17:46:35.746Z",
//   "startPickupTime": "2022-10-14T22:04:28.236Z",
//   "endPickupTime": "2022-10-14T22:04:28.236Z",
//   "lat": 78.4343,
//   "long": -56.656
// }
export const createMeal = async (meal) => {
  return fetch(`${baseURL}/meals`, {
    method: 'POST',
    headers: {
      Accept: 'application/json; charset=utf-8',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(meal),
  })
    .then(() => {
      RootNavigation.navigate(screens.createdMeal);
    })
    .catch((error) => console.log('error: ', error));
};
