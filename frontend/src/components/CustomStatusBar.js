import React from 'react';
import {StatusBar} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import styled from 'styled-components/native';
import {darkOrange} from '../constants/colors';

export const STATUSBAR_HEIGHT = getStatusBarHeight();

const BackgroundContainer = styled.View`
  height: ${STATUSBAR_HEIGHT}px;
  background-color: ${darkOrange};
`;

const CustomStatusBar = () => (
  <BackgroundContainer>
    <StatusBar backgroundColor={darkOrange} barStyle="dark-content" />
  </BackgroundContainer>
);

export default CustomStatusBar;
