import React, { useEffect } from 'react';
import { FlatList, View } from 'react-native';
import { string, func, bool } from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components/native';
import MealSection from '../../components/MealSection/MealSection';
import { black } from '../../constants/colors';
import { mealsListPropType } from '../../constants/propTypes/mealsPropType';
import { routePropType } from '../../constants/propTypes/navigationPropType';
import { getMealsByDeviceid } from '../../redux/services/mealService';
import {
  cancelReservation,
  getReservationsByDeviceId
} from '../../redux/services/reservationsService';
import { setMealsByDeviceIdAction } from '../../redux/actions/mealActions';
import { setReservationsByDeviceId } from '../../redux/actions/reservationActions';
import ReservationSection from '../../components/ReservationSection/ReservationSection';

export const MealText = styled.Text`
  line-height: 27px;
  font-size: 20px;
  font-weight: 500;
  font-family: 'Roboto';
  margin-bottom: 25px;
  color: ${black};
`;
const Heading = styled.View`
  margin-top: 30px;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const MealsListScreen = ({
  route,
  meals,
  deviceId,
  setDonations,
  setReservations,
  isUserDonor
}) => {
  useEffect(() => {
    getMealsByDeviceid(deviceId)
      .then((response) => response.json())
      .then((res) => {
        setDonations(res);
      })
      .catch((error) => console.log(error));
    getReservationsByDeviceId(deviceId)
      .then((response) => response.json())
      .then((res) => {
        setReservations(res);
      })
      .catch((error) => console.log(error));
  }, []);

  const heading = (
    <MealText>{`${isUserDonor ? 'Moji' : 'Rezervisani'} obroci`}</MealText>
  );

  const handleCancelMeal = (reservationId) => {
    cancelReservation(reservationId);
  };

  const renderMeals = ({ item }) => {
    return (
      <>
        {isUserDonor ? (
          <MealSection meal={item} />
        ) : (
          <ReservationSection
            meal={item.meal}
            handleCancelMeal={() => handleCancelMeal(item.id)}
            isCancelled={item.cancelled}
          />
        )}
      </>
    );
  };

  return meals.length > 0 ? (
    <FlatList
      showsVerticalScrollIndicator={false}
      style={{ padding: 20 }}
      data={meals}
      renderItem={renderMeals}
      ListHeaderComponent={heading}
    />
  ) : (
    <Heading>
      <MealText>Trenutno nema obroka u listi</MealText>
    </Heading>
  );
};

MealsListScreen.propTypes = {
  route: routePropType,
  meals: mealsListPropType,
  deviceId: string,
  setReservations: func,
  setDonations: func,
  isUserDonor: bool
};

const mapState = ({ donatedMeals, reservedMeals, device, sidebar }) => ({
  meals: sidebar.isMyMeals ? donatedMeals : reservedMeals,
  deviceId: device.id,
  isUserDonor: sidebar.isMyMeals
});

const mapDispatch = (dispatch) => ({
  setDonations: (meals) => dispatch(setMealsByDeviceIdAction(meals)),
  setReservations: (meals) => dispatch(setReservationsByDeviceId(meals))
});

export default connect(mapState, mapDispatch)(MealsListScreen);
