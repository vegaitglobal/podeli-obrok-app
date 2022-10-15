import React from 'react';
import {TouchableOpacity} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {screens} from '../constants/screens';
import MapScreen from '../screens/MapScreen/MapScreen';
import MealsListScreen from '../screens/MealsListScreen/MealsListScreen';
import DonorFormScreen from '../screens/DonorFormScreen/DonorFormScreen';
import {DefaultTheme, useRoute} from '@react-navigation/native';
import {lightOrange, white} from '../constants/colors';
import styled from 'styled-components';
import NavBarLogo from '../images/navBarLogo.png';
import HamburgerIcon from '../images/hamburger.png';
import BackIcon from '../images/backIcon.png';

const AppStack = createNativeStackNavigator();
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: white,
    background: 'rgb(240, 119, 53)',
  },
};
const LogoImage = styled.Image`
  width: 143px;
  height: 22px;
`;

const HeaderImageContainer = styled.Image`
  height: 24px;
  width: 24px;
`;

const LogoTitle = () => <LogoImage source={NavBarLogo} resizeMode="contain" />;

const HeaderHamburger = () => (
  <HeaderImageContainer source={HamburgerIcon} resizeMode="contain" />
);
const HeaderBackButton = () => (
  <HeaderImageContainer source={BackIcon} resizeMode="contain" />
);

const AppStackNavigator = ({navigation}) => {
  const route = useRoute();
  const checkBackAction = () => {
    if (
      route.params.screen === screens.map ||
      route.params.screen === screens.addMeal
    )
      navigation.navigate(screens.home);
  };
  return (
    <AppStack.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: lightOrange,
        },
        headerTitle: () => <LogoTitle />,
        headerRight: () => (
          <TouchableOpacity
            onPress={() => navigation.navigate(screens.drawerNavigator)}>
            <HeaderHamburger />
          </TouchableOpacity>
        ),
        headerLeft: () => (
          <TouchableOpacity onPress={checkBackAction}>
            <HeaderBackButton />
          </TouchableOpacity>
        ),
      }}
      theme={MyTheme}>
      <AppStack.Screen name={screens.map} component={MapScreen} />
      <AppStack.Screen name={screens.mealsList} component={MealsListScreen} />
      <AppStack.Screen name={screens.addMeal} component={DonorFormScreen} />
    </AppStack.Navigator>
  );
};

export default AppStackNavigator;
