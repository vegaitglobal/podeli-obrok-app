import React from 'react';
import { Text, TextInput, View } from 'react-native';

const CustomTextInput = ({
  value = '',
  onChange = () => {},
  placeholder = '',
  containerStyle = {},
  label = '',
  name = '',
}) => {
  const handleInput = ({ name, value }) => {
    onChange({ name, value });
  };

  return (
    <View style={[containerStyle]}>
      <Text style={{ color: 'white', marginBottom: 5 }}>{label}</Text>
      <View style={{ padding: 10, backgroundColor: 'white', borderRadius: 5 }}>
        <TextInput
          name={name}
          placeholder={placeholder}
          value={value}
          autoCapitalize='none'
          autoCorrect={false}
          onChangeText={(text) => handleInput({ name: name, value: text })}
        />
      </View>
    </View>
  );
};

export default CustomTextInput;
