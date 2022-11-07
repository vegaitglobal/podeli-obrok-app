import React from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import styled from 'styled-components/native';

import MealSection from '../../components/MealSection/MealSection';
import { black } from '../../constants/colors';

const MealText = styled.Text`
  line-height: 27px;
  font-size: 20px;
  font-weight: 500;
  font-family: 'Roboto';
  margin-bottom: 25px;
  color: ${black};
`;

const MealsListScreen = ({ route, meals }) => {
  const { isUserDonor = false } = route?.params;

  const heading = (
    <MealText>{`${isUserDonor ? 'Moji' : 'Rezervisani'} obroci`}</MealText>
  );

  const renderMeals = ({ item }) => (
    <MealSection
      mealName={item.name}
      mealDescription={item.description}
      pickUpStartTime={item.startPickupTime}
      pickUpEndTime={item.endPickupTime}
      donorAddress={item.address}
      donorPhone={item.phone}
      isUserDonor={isUserDonor}
      handleCancelMeal={() => console.log(item.id)}
    />
  );

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      style={{ padding: 20 }}
      data={meals}
      renderItem={renderMeals}
      ListHeaderComponent={heading}
    />
  );
};

const mapState = ({ donatedMeals, reservedMeals }) => ({
  meals: donatedMeals || reservedMeals,
})

export default connect(mapState)(MealsListScreen);
