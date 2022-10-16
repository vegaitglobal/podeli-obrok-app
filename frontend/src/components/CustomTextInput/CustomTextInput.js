import React, { useState } from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components';
import { grey } from '../../constants/colors';

const InputText = styled.TextInput`
  color: ${grey};
  margin-left: 9px;
  height: 45px;
  justify-content: center;
  align-items: center;
`;

const CustomTextInput = ({
  value = '',
  onChange = () => {},
  placeholder = '',
  containerStyle = {},
  label = '',
  name = '',
  required = true,
  isNumeric = false,
}) => {
  const handleInput = ({ name, value }) => {
    onChange({ name, value });
  };

  const [hasError, setHasError] = useState(false);

  const isValid = (value) => {
    if (value.length === 0) {
      return setHasError(true);
    }
    if (
      (name === 'pickUpStartTime' || name === 'pickUpEndTime') &&
      +value > 24
    ) {
      return setHasError(true);
    }
    return setHasError(false);
  };

  return (
    <View style={[containerStyle]}>
      <Text
        style={{
          color: hasError ? 'red' : 'white',
          marginBottom: 5,
        }}
      >{`${label}${required ? '*' : ''}`}</Text>
      <View
        style={{
          backgroundColor: hasError ? 'rgba(255, 76, 48, 0.6)' : 'white',
          borderRadius: 5,
          borderColor: 'red',
          borderWidth: hasError ? 1 : 0,
        }}
      >
        <InputText
          name={name}
          placeholder={placeholder}
          value={value}
          autoCapitalize='none'
          autoCorrect={false}
          onChangeText={(text) => handleInput({ name: name, value: text })}
          onBlur={() => isValid(value)}
          keyboardType={isNumeric ? 'numeric' : 'default'}
        />
      </View>
    </View>
  );
};

export default CustomTextInput;
