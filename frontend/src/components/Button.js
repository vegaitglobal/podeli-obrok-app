import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import {Paragraph} from '../constants/textStyles';
import {white} from '../constants/colors';

const ButtonContainer = styled.TouchableOpacity`
  height: 36px;
  width: 100%;
  ${({backgroundColor}) => `background-color: ${backgroundColor}`};
  border-radius: 20px;
  align-items: center;
  justify-content: center;
`;
const ButtonContent = styled(Paragraph)`
  color: ${white};
  letter-spacing: 1.35px;
  text-transform: uppercase;
`;

const Button = ({onPress, backgroundColor, content}) => {
  return (
    <ButtonContainer onPress={onPress} backgroundColor={backgroundColor}>
      <ButtonContent>{content}</ButtonContent>
    </ButtonContainer>
  );
};

const {func, string} = PropTypes;
Button.propTypes = {
  onPress: func.isRequired,
  content: string.isRequired,
  backgroundColor: string.isRequired,
};

export default Button;
