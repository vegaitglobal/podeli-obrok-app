import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components';
import {lightOrange, white} from '../../constants/colors';
import {ButtonContent, Paragraph} from '../../constants/textStyles';
import checkMark from '../../images/checkMark.png';
import dashedCircle from '../../images/dashedCircle.png';
import {screens} from '../../constants/screens';
import {TouchableOpacity} from 'react-native-gesture-handler';

const ViewWraper = styled(View)`
  padding-top: 30px;
  padding-left: 24px;
  padding-right: 32px;
  background-color: ${lightOrange};
  flex: 1;
`;

const Title = styled.Text`
  margin-bottom: 13px;
  font-size: 20px;
  font-weight: 500;
  line-height: 27px;
`;

export const StyledParagraph = styled(Paragraph)`
  text-align: center;
  margin-top: 35px;
  color: ${white};
`;

const BoldParagraph = styled(Paragraph)`
  text-align: center;
  margin-top: 20px;
  font-weight: bold;
  color: ${white};
`;

export const CheckMarkImage = styled.Image`
  width: 92px;
  height: 92px;
  align-self: center;
  margin-top: 181px;
`;

export const DasheCircleImage = styled.Image`
  position: absolute;
  width: 122px;
  height: 122px;
  align-self: center;
  margin-top: 195px;
`;
const ButtonWraper = styled.View`
  flex-direction: row;
  position: absolute;
  bottom: 40px;
  left: 40px;
  justify-content: space-between;
`;
const TouchableWrapper = styled.TouchableOpacity`
  margin-left: 77px;
`;

const CreatedMealScreen = ({navigation}) => {
  return (
    <ViewWraper>
      <DasheCircleImage source={dashedCircle} resizeMode="contain" />
      <CheckMarkImage source={checkMark} resizeMode="contain" />
      <StyledParagraph>
        Informacije o obroku koji želite da podelite su uspešno poslate.
      </StyledParagraph>
      <BoldParagraph>Hvala Vam što pomažete!</BoldParagraph>
      <ButtonWraper>
        <TouchableOpacity onPress={() => navigation.navigate(screens.home)}>
          <ButtonContent> Početni ekran</ButtonContent>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate(screens.mealsList)}>
          <TouchableWrapper>
            <ButtonContent>Moji obroci</ButtonContent>
          </TouchableWrapper>
        </TouchableOpacity>
      </ButtonWraper>
    </ViewWraper>
  );
};

export default CreatedMealScreen;
