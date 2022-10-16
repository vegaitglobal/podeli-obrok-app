import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CustomStatusBar from './src/components/CustomStatusBar';
import {SafeAreaView} from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import {white} from './src/constants/colors';
import HomeScreen from './src/screens/HomeScreen';
import {screens} from './src/constants/screens';
import AppStackNavigator from './src/navigation/AppNavigator';
import {connect} from 'react-redux';
import SideBarMenu from './src/components/SideBarMenu/SideBarMenu';

const Stack = createNativeStackNavigator();
const MainContainer = styled.View`
  flex: 1;
  background-color: ${white};
`;
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'rgb(255, 255, 255)',
  },
};
const App = props => {
  const {sidebarMenu} = props;
  return (
    <MainContainer>
      <SafeAreaView>
        <CustomStatusBar />
      </SafeAreaView>
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name={screens.home} component={HomeScreen} />
          <Stack.Screen
            name={screens.appNavigator}
            component={AppStackNavigator}
          />
        </Stack.Navigator>
        {sidebarMenu && <SideBarMenu />}
      </NavigationContainer>
    </MainContainer>
  );
};

const mapStateToProps = state => ({
  sidebarMenu: state.sidebar.isActive,
});

export default connect(mapStateToProps, null)(App);
