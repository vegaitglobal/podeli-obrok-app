import React from 'react';
import {Text, TextInput, View} from 'react-native';
import styled from 'styled-components';
import {grey} from '../../constants/colors';
const InputText = styled.TextInput`
  color: ${grey};
  font-style: italic;
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
}) => {
  const handleInput = ({name, value}) => {
    onChange({name, value});
  };

  return (
    <View style={[containerStyle]}>
      <Text style={{color: 'white', marginBottom: 5}}>{label}</Text>
      <View style={{backgroundColor: 'white', borderRadius: 5}}>
        <InputText
          name={name}
          placeholder={placeholder}
          value={value}
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={text => handleInput({name: name, value: text})}
        />
      </View>
    </View>
  );
};

export default CustomTextInput;
