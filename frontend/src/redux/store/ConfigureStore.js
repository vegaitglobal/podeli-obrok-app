import { createStore, combineReducers } from 'redux';
import { deviceIdReducer } from '../reducers/deviceIdReducer';
import { donatedMealsReducer } from '../reducers/donatedMealsReducer';
import { mealReducer } from '../reducers/mealReducer';
import reservationReducer from '../reducers/reservationsReducer';
import { sidebarMenuReducer } from '../reducers/sidebarMenuReducer';

const rootReducer = combineReducers({
  sidebar: sidebarMenuReducer,
  allMeals: mealReducer,
  donatedMeals: donatedMealsReducer,
  reservedMeals: reservationReducer,
  device: deviceIdReducer,
});
const configureStore = () => {
  return createStore(rootReducer);
};
export default configureStore;
