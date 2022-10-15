import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import {PrimaryButtonContent} from '../constants/textStyles';

const ButtonContainer = styled.TouchableOpacity`
  height: 36px;
  width: 100%;
  ${({backgroundColor}) => `background-color: ${backgroundColor}`};
  border-radius: 20px;
  align-items: center;
  justify-content: center;
`;

const PrimaryButton = ({onPress, backgroundColor, content}) => {
  return (
    <ButtonContainer onPress={onPress} backgroundColor={backgroundColor}>
      <PrimaryButtonContent>{content}</PrimaryButtonContent>
    </ButtonContainer>
  );
};

const {func, string} = PropTypes;
PrimaryButton.propTypes = {
  onPress: func.isRequired,
  content: string.isRequired,
  backgroundColor: string.isRequired,
};

export default PrimaryButton;
