import React from 'react';
import {StatusBar} from 'react-native';
import styled from 'styled-components/native';
import {darkOrange} from '../constants/colors';

const BackgroundContainer = styled.View`
  background-color: ${darkOrange};
`;

const CustomStatusBar = () => (
  <BackgroundContainer>
    <StatusBar backgroundColor={darkOrange} barStyle="dark-content" />
  </BackgroundContainer>
);

export default CustomStatusBar;
