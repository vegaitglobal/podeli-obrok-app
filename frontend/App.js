import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomePage from './src/components/HomePage';
import CustomStatusBar from './src/components/CustomStatusBar';
import {SafeAreaView} from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import {lightOrange, white} from './src/constants/colors';

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
          <Stack.Screen name="Home" component={HomePage} />
        </Stack.Navigator>
      </NavigationContainer>
    </MainContainer>
  );
};

export default App;
