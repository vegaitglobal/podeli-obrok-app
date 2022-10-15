import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { Pressable, View, Text, StyleSheet } from 'react-native';

import MealsListScreen from '../screens/MealsListScreen/MealsListScreen';
import AboutUsScreen from '../screens/AboutUsScreen/AboutUsScreen';
import AuthorWordScreen from '../screens/AuthorWordScreen/AuthorWordScreen';
import DonationsScreen from '../screens/DonationsScreen/DonationsScreen';
import { lightOrange, white } from '../constants/colors';
import styled from 'styled-components/native';

const Drawer = createDrawerNavigator();

const styles = StyleSheet.create({
  drawerStyle: {
    color: 'white',
    textTransform: 'uppercase',
    fontWeight: '600',
  },
});

const DrawerLine = styled(View)`
  background-color: ${white};
  width: 15px;
  height: 2px;
  margin-bottom: 2px;
`;

const DrawerNavigator = () => {
  const navigation = useNavigation();
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerPosition: 'right',
        drawerType: 'front',
        drawerStyle: { backgroundColor: lightOrange },
        headerLeft: false,
        headerRight: () => (
          <Pressable
            style={{ backgroundColor: 'red', marginRight: 20 }}
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
          >
            <DrawerLine />
            <DrawerLine />
            <DrawerLine />
          </Pressable>
        ),
      }}
    >
      <Drawer.Screen
        name='MealsList'
        component={MealsListScreen}
        options={{
          drawerLabel: 'Rezervisani obroci',
          drawerLabelStyle: styles.drawerStyle,
        }}
      />
      <Drawer.Screen
        name='AboutUs'
        component={AboutUsScreen}
        options={{
          drawerLabel: 'O nama',
          drawerLabelStyle: styles.drawerStyle,
        }}
      />
      <Drawer.Screen
        name='AuthorWord'
        component={AuthorWordScreen}
        options={{
          drawerLabel: 'Reč autora',
          drawerLabelStyle: styles.drawerStyle,
        }}
      />
      <Drawer.Screen
        name='Donations'
        component={DonationsScreen}
        options={{
          drawerLabel: 'Donacije',
          drawerLabelStyle: styles.drawerStyle,
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
