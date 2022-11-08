import React from 'react';
import { TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { screens } from '../constants/screens';
import MapScreen from '../screens/MapScreen/MapScreen';
import MealsListScreen from '../screens/MealsListScreen/MealsListScreen';
import DonorFormScreen from '../screens/DonorFormScreen/DonorFormScreen';
import { DefaultTheme, useNavigation } from '@react-navigation/native';
import { darkOrange, lightOrange, white } from '../constants/colors';
import styled from 'styled-components';
import NavBarLogo from '../images/navBarLogo.png';
import HamburgerIcon from '../images/hamburger.png';
import BackIcon from '../images/backIcon.png';
import { setSidebarMenuActiveAction } from '../redux/actions/sidebarMenuAction';
import { connect } from 'react-redux';
import AboutUsScreen from '../screens/AboutUsScreen/AboutUsScreen';
import AuthorWordScreen from '../screens/AuthorWordScreen/AuthorWordScreen';
import DonationsScreen from '../screens/DonationsScreen/DonationsScreen';
import CreatedMealScreen from '../screens/CreatedMealScreen/CreatedMealScreen';
import CloseIcon from '../images/close-icon.png';
import HomeScreen from '../screens/HomeScreen';
import * as RootNavigation from './RootNavigation';

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

const AppStackNavigator = ({ setSidebar, sidebarMenu }) => {
  return (
    <AppStack.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: lightOrange,
        },
        headerTitleAlign: 'center',
        headerBackVisible: false,
        headerTitle: () => <LogoTitle />,
        headerRight: () => (
          <TouchableOpacity onPress={() => setSidebar(!sidebarMenu)}>
            {sidebarMenu ? (
              <HeaderImageContainer source={CloseIcon} resizeMode="contain" />
            ) : (
              <HeaderHamburger />
            )}
          </TouchableOpacity>
        ),
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => {
              setSidebar(false);
              RootNavigation.navigate(screens.home);
            }}
          >
            <HeaderBackButton />
          </TouchableOpacity>
        ),
        statusBarColor: darkOrange,
        statusBarStyle: 'dark',
      }}
      theme={MyTheme}
    >
      <AppStack.Screen
        options={{ headerShown: false }}
        name={screens.home}
        component={HomeScreen}
      />
      <AppStack.Screen name={screens.mealsList} component={MealsListScreen} />
      <AppStack.Screen name={screens.map} component={MapScreen} />
      <AppStack.Screen name={screens.addMeal} component={DonorFormScreen} />
      <AppStack.Screen name={screens.aboutUs} component={AboutUsScreen} />
      <AppStack.Screen name={screens.authorWord} component={AuthorWordScreen} />
      <AppStack.Screen name={screens.donation} component={DonationsScreen} />
      <AppStack.Screen
        name={screens.createdMeal}
        component={CreatedMealScreen}
      />
    </AppStack.Navigator>
  );
};
const mapStateToProps = (state) => ({
  sidebarMenu: state.sidebar.isActive,
});

const mapDispatchToProps = (dispatch) => ({
  setSidebar: (val) => dispatch(setSidebarMenuActiveAction(val)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppStackNavigator);
