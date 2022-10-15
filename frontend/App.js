import React from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CustomStatusBar from './src/components/CustomStatusBar';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import { lightOrange, white } from './src/constants/colors';
import HomeScreen from './src/screens/HomeScreen';
import MealsListScreen from './src/screens/MealsListScreen/MealsListScreen';
import DonorFormScreen from './src/screens/DonorFormScreen/DonorFormScreen';
import DrawerNavigator from './src/navigation/DrawerNavigator';
import MapScreen from './src/screens/MapScreen/MapScreen';
import { screens } from './src/constants/screens';
import AboutUsScreen from './src/screens/AboutUsScreen/AboutUsScreen';

const Stack = createNativeStackNavigator();
const MainContainer = styled.View`
  flex: 1;
  background-color: ${white};
`;

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: lightOrange,
    background: 'rgb(255, 255, 255)',
  },
};

const App = () => {
  return (
    <MainContainer>
      <SafeAreaView>
        <CustomStatusBar />
      </SafeAreaView>
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator>
          <Stack.Screen name={screens.home} component={HomeScreen} />
          <Stack.Screen name={screens.mealsList} component={MealsListScreen} />
          <Stack.Screen name={screens.map} component={MapScreen} />
          <Stack.Screen name={screens.addMeal} component={DonorFormScreen} />
          <Stack.Screen name={screens.aboutUs} component={AboutUsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </MainContainer>
  );
};

export default App;
