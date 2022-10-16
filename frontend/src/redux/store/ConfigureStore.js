import {createStore, combineReducers} from 'redux';
import {sidebarMenuReducer} from '../reducers/sidebarMenuReducer';
const rootReducer = combineReducers({sidebar: sidebarMenuReducer});
const configureStore = () => {
  return createStore(rootReducer);
};
export default configureStore;
