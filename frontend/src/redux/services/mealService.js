import axios from 'axios';

export const getAllMeals = async () => {
  const ax = axios.create({baseURL});
  return ax.get('/meals');
};

//moji obroci
export const getMealsByDeviceid = async () => {
  const ax = axios.create({baseURL});
  const deviceId = '123';
  return ax.get(`/meals?createdByDeviceId=${deviceId}`);
};

//payload for create meal:
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
export const createMeal = async meal => {
  const ax = axios.create({baseURL});
  return ax.post('/meals', meal);
};
