import React, { useEffect } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import styled from 'styled-components/native';
import MealSection from '../../components/MealSection/MealSection';
import { black } from '../../constants/colors';
import { getMealsByDeviceid } from '../../redux/services/mealService';
import {
  cancelReservationService,
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
      .catch((error) => console.log('[ERROR]: get meals by device id', error));
    getReservationsByDeviceId(deviceId)
      .then((response) => response.json())
      .then((res) => {
        setReservations(res);
      })
      .catch((error) =>
        console.log('[ERROR]: get reservations by device id', error)
      );
  }, []);

  const heading = (
    <MealText>{`${isUserDonor ? 'Moji' : 'Rezervisani'} obroci`}</MealText>
  );

  const handleCancelReservation = (reservationId) => {
    cancelReservationService(reservationId)
      .then((response) => response.json())
      .then((res) => {
        setReservations(meals.filter((m) => m.id !== reservationId));
      })
      .catch((error) =>
        console.log('[ERROR]: cancel reservations by device id', error)
      );
  };

  const renderItems = ({ item }) => {
    return (
      <>
        {isUserDonor ? (
          <MealSection meal={item} />
        ) : (
          <ReservationSection
            meal={item.meal}
            handleCancelReservation={() => handleCancelReservation(item.id)}
            isCancelled={item.cancelled}
          />
        )}
      </>
    );
  };

  return meals?.length > 0 ? (
    <FlatList
      showsVerticalScrollIndicator={false}
      style={styles.container}
      data={meals}
      renderItem={renderItems}
      ListHeaderComponent={heading}
    />
  ) : (
    <Heading>
      <MealText>Trenutno nema obroka u listi</MealText>
    </Heading>
  );
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

const styles = StyleSheet.create({
  container: { padding: 20, marginBottom: 30 }
});
