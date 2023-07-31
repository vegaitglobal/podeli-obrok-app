import React from 'react';
import { TouchableOpacity } from 'react-native';
import { func, string } from 'prop-types';
import styled from 'styled-components/native';
import { lightOrange, white } from '../../constants/colors';
import { ButtonContent, Paragraph } from '../../constants/textStyles';
import checkMark from '../../images/checkMark.png';
import dashedCircle from '../../images/dashedCircle.png';
import { screens } from '../../constants/screens';
import { getMealsByDeviceid } from '../../redux/services/mealService';
import { setMealsByDeviceIdAction } from '../../redux/actions/mealActions';
import { connect } from 'react-redux';
import { navigationPropType } from '../../constants/propTypes/navigationPropType';

const ViewWraper = styled.View`
  padding-top: 30px;
  padding-left: 24px;
  padding-right: 32px;
  background-color: ${lightOrange};
  align-items: center;
  flex: 1;
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
  bottom: 33px;
  width: 100%;
  justify-content: space-between;
`;

const CreatedMealScreen = ({ navigation, deviceId, setDonatedMeals }) => {
  return (
    <ViewWraper>
      <DasheCircleImage source={dashedCircle} resizeMode='contain' />
      <CheckMarkImage source={checkMark} resizeMode='contain' />
      <StyledParagraph>
        Informacije o obroku koji želite da podelite su uspešno poslate.
      </StyledParagraph>
      <BoldParagraph>Hvala Vam što pomažete!</BoldParagraph>
      <ButtonWraper>
        <TouchableOpacity onPress={() => navigation.navigate(screens.home)}>
          <ButtonContent> Početni ekran</ButtonContent>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            getMealsByDeviceid(deviceId)
              .then((response) => response.json())
              .then((res) => {
                setDonatedMeals(res);
                navigation.navigate(screens.mealsList, { isUserDonor: true });
              })
              .catch((error) =>
                console.log('[ERROR]: get meals by device id', error),
              );
          }}
        >
          <ButtonContent>Moji obroci</ButtonContent>
        </TouchableOpacity>
      </ButtonWraper>
    </ViewWraper>
  );
};

CreatedMealScreen.propTypes = {
  navigation: navigationPropType,
  setDonatedMeals: func,
  deviceId: string,
};

const mapState = ({ device }) => ({
  deviceId: device.id,
});

const mapDispatch = (dispatch) => ({
  setDonatedMeals: (meals) => dispatch(setMealsByDeviceIdAction(meals)),
});

export default connect(mapState, mapDispatch)(CreatedMealScreen);
