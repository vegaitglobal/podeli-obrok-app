import React, { useEffect } from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { func, bool } from 'prop-types';
import DeviceInfo from 'react-native-device-info';
import styled from 'styled-components/native';
import { black, white } from './src/constants/colors';
import AppStackNavigator from './src/navigation/AppNavigator';
import { connect } from 'react-redux';
import SideBarMenu from './src/components/SideBarMenu/SideBarMenu';
import { setDeviceId } from './src/redux/actions/deviceIdActions';
import { navigationRef } from './src/navigation/RootNavigation';
import { useNetInfo } from '@react-native-community/netinfo';
import { Text, View } from 'react-native';

const MainContainer = styled.View`
  flex: 1;
  background-color: ${white};
`;

const NoInternetWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const NoInternetText = styled.Text`
  text-align: center;
  color: black;
  font-size: 25px;
  text-transform: uppercase;
  font-family: 'Roboto';
  width: 80%;
`;

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'rgb(255, 255, 255)'
  }
};
const App = ({ sidebarMenu, setDeviceId }) => {
  useEffect(() => {
    DeviceInfo.getUniqueId().then((uniqueId) => {
      setDeviceId(uniqueId);
    });
  }, []);

  const netInfo = useNetInfo();
  const isConnectedToInternet =
    netInfo.isConnected || netInfo.isConnected === null;

  return (
    <MainContainer>
      {!isConnectedToInternet ? (
        <NoInternetWrapper>
          <NoInternetText>Nema internet konekcije</NoInternetText>
        </NoInternetWrapper>
      ) : (
        <NavigationContainer ref={navigationRef} theme={MyTheme}>
          <AppStackNavigator />
          {sidebarMenu && <SideBarMenu />}
        </NavigationContainer>
      )}
    </MainContainer>
  );
};

App.propTypes = {
  setDeviceId: func,
  sidebarMenu: bool
};

const mapStateToProps = ({ sidebar, device }) => ({
  sidebarMenu: sidebar.isActive,
  deviceId: device.id
});

const mapDispatch = (dispatch) => ({
  setDeviceId: (value) => dispatch(setDeviceId(value))
});

export default connect(mapStateToProps, mapDispatch)(App);
