import React from 'react';
import { Text, TextInput, View } from 'react-native';

const CustomTextInput = ({
  value = '',
  onValueChange = () => {},
  placeholder = 'Placeholder',
  containerStyle = {},
  label = 'label',
}) => {
  return (
    <View style={[containerStyle]}>
      <Text style={{ color: 'white', marginBottom: 5 }}>{label}</Text>
      <View style={{ padding: 10, backgroundColor: 'white', borderRadius: 5 }}>
        <TextInput
          placeholder={placeholder}
          value={value}
          onChange={onValueChange}
          autoCapitalize='none'
          autoCorrect={false}
        />
      </View>
    </View>
  );
};

export default CustomTextInput;
