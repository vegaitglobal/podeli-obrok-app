import React from 'react';
import { Pressable } from 'react-native';
import { func, bool } from 'prop-types';
import styled from 'styled-components';
import TickIcon from '../../images/tick.png';

const TickImage = styled.Image`
  width: 14px;
  height: 10px;
`;

const CustomCheckBox = ({ handleCheckBox = () => {}, isActive = false }) => {
  return (
    <Pressable
      onPress={handleCheckBox}
      style={{
        width: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        borderColor: 'white',
        borderWidth: 1,
        backgroundColor: isActive ? 'white' : 'transparent',
      }}
    >
      {isActive && <TickImage source={TickIcon} resizeMode="contain" />}
    </Pressable>
  );
};

CustomCheckBox.propTypes = {
  handleCheckBox: func,
  isActive: bool,
};

export default CustomCheckBox;
