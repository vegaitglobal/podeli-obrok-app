import React, { useEffect } from 'react';
import styled from 'styled-components/native';
import { string, func } from 'prop-types';
import AppLogo from '../images/AppIcon.png';
import BlackLogo from '../images/blackLogo.png';
import { Paragraph } from '../constants/textStyles';
import { darkOrange, lightOrange } from '../constants/colors';
import Button from '../components/Button';
import { screens } from '../constants/screens';
import { navigationPropType } from '../constants/propTypes/navigationPropType';
import { connect } from 'react-redux';
import { getReservationsByDeviceId } from '../redux/services/reservationsService';
import { setReservationsByDeviceId } from '../redux/actions/reservationActions';
import { setMealsByDeviceIdAction } from '../redux/actions/mealActions';
import { getMealsByDeviceid } from '../redux/services/mealService';
import { setMyMealsActiveAction } from '../redux/actions/sidebarMenuAction';
import Config from 'react-native-config';

const HomeContainer = styled.View`
  margin: 70px 16px 51px 16px;
  align-items: center;
  height: 100%;
  flex: 1;
  justify-content: space-between;
`;
const Image = styled.Image`
  height: 148px;
  width: 163px;
`;
const BlackLogoImage = styled.Image`
  margin-top: 39px;
  margin-bottom: 39px;
  height: 23px;
  width: 225px;
`;

const Description = styled.View`
  margin: 22px 30px 58px 30px;
`;

const HomeScreen = ({
  navigation,
  deviceId,
  setReservations,
  setDonations,
  setIsMyMeals
}) => {
  // useEffect(() => {
  //   getMealsByDeviceid(deviceId)
  //     .then((response) => response.json())
  //     .then((res) => {
  //       setDonations(res);
  //     })
  //     .catch((error) => console.log('[ERROR]: get meals by device id', error));
  //   getReservationsByDeviceId(deviceId)
  //     .then((response) => response.json())
  //     .then((res) => setReservations(res))
  //     .catch((error) =>
  //       console.log('[ERROR]: get reservations by device id', error)
  //     );
  // }, []);

  const handleShareMeal = () => {
    setIsMyMeals(true);
    navigation.navigate(screens.addMeal);
  };

  const handleTakeMeal = () => {
    setIsMyMeals(false);
    navigation.navigate(screens.map);
  };

  return (
    <HomeContainer>
      <Image resizeMode='contain' source={AppLogo} />
      <BlackLogoImage resizeMode='contain' source={BlackLogo} />
      <Description>
        <Paragraph>
          Aplikacija omogućava onima koji žele da podele hranu sa nekim, umesto
          da je bace, da to lakše urade. U par klikova, obrok koji želite da
          podelite sa nekim naći će se na Gugl mapi i postaće vidljiv svima
          kojima taj obrok treba.
        </Paragraph>
      </Description>
      <Button
        onPress={handleShareMeal}
        backgroundColor={darkOrange}
        content='Podeli obrok'
      />
      <Button
        onPress={handleTakeMeal}
        backgroundColor={lightOrange}
        content='Preuzmi obrok'
      />
    </HomeContainer>
  );
};

HomeScreen.propTypes = {
  navigation: navigationPropType,
  deviceId: string,
  setReservations: func,
  setDonations: func
};

const mapState = ({ device }) => ({
  deviceId: device.id
});

const mapDispatch = (dispatch) => ({
  setDonations: (meals) => dispatch(setMealsByDeviceIdAction(meals)),
  setReservations: (meals) => dispatch(setReservationsByDeviceId(meals)),
  setIsMyMeals: (val) => dispatch(setMyMealsActiveAction(val))
});

export default connect(mapState, mapDispatch)(HomeScreen);
