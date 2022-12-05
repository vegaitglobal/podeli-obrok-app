import React, { useEffect } from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { func, bool } from 'prop-types';
import DeviceInfo from 'react-native-device-info';
import styled from 'styled-components/native';
import { white } from './src/constants/colors';
import AppStackNavigator from './src/navigation/AppNavigator';
import { connect } from 'react-redux';
import SideBarMenu from './src/components/SideBarMenu/SideBarMenu';
import { setDeviceId } from './src/redux/actions/deviceIdActions';
import { navigationRef } from './src/navigation/RootNavigation';

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
const App = ({ sidebarMenu, setDeviceId }) => {
  useEffect(() => {
    DeviceInfo.getUniqueId().then((uniqueId) => {
      setDeviceId(uniqueId);
    });
  }, []);

  return (
    <MainContainer>
      <NavigationContainer ref={navigationRef} theme={MyTheme}>
        <AppStackNavigator />
        {sidebarMenu && <SideBarMenu />}
      </NavigationContainer>
    </MainContainer>
  );
};

App.propTypes = {
  setDeviceId: func,
  sidebarMenu: bool,
};

const mapStateToProps = ({ sidebar, device }) => ({
  sidebarMenu: sidebar.isActive,
  deviceId: device.id,
});

const mapDispatch = (dispatch) => ({
  setDeviceId: (value) => dispatch(setDeviceId(value)),
});

export default connect(mapStateToProps, mapDispatch)(App);
