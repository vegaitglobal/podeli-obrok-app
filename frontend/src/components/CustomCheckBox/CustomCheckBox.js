import React from 'react';
import { Pressable, View } from 'react-native';

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
      {isActive && (
        <View style={{ width: 10, height: 10, backgroundColor: 'red' }} />
      )}
    </Pressable>
  );
};

export default CustomCheckBox;
