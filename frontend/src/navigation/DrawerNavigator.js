import { createDrawerNavigator } from '@react-navigation/drawer';
import MealsListScreen from '../screens/MealsListScreen/MealsListScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name='MealsList' component={MealsListScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
