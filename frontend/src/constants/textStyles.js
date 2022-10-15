import {darkOrange, grey, white} from './colors';
import styled from 'styled-components/native';

export const Paragraph = styled.Text`
  text-align: center;
  line-height: 25px;
  font-size: 14px;
  font-weight: 400;
  font-family: 'Roboto';
  color: ${grey};
`;

export const ButtonContent = styled(Paragraph)`
  color: ${white};
  letter-spacing: 1.35px;
  text-transform: uppercase;
`;
export const PrimaryButtonContent = styled(Paragraph)`
  color: ${darkOrange};
  letter-spacing: 1.35px;
  text-transform: uppercase;
`;
export const ZoomContent = styled(Paragraph)`
  color: ${white};
  font-size: 18px;
  font-weight: 400;
`;
