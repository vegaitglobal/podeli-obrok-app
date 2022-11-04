import {createStore, combineReducers} from 'redux';
import {deviceIdReducer} from '../reducers/deviceIdReducer';
import {mealReducer} from '../reducers/mealReducer';
import reservationReducer from '../reducers/reservationsReducer';
import {sidebarMenuReducer} from '../reducers/sidebarMenuReducer';

const rootReducer = combineReducers({
  sidebar: sidebarMenuReducer,
  allMeals: mealReducer,
  myMeals: mealReducer,
  reservedMeals: reservationReducer,
  device: deviceIdReducer,
});
const configureStore = () => {
  return createStore(rootReducer);
};
export default configureStore;
