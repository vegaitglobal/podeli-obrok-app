import React, { memo } from 'react';
import { FlatList, Text } from 'react-native';
import styled from 'styled-components/native';

import MealSection from '../../components/MealSection/MealSection';
import mealsListMock from './mealsListMock';

const MealText = styled(Text)`
  line-height: 27px;
  font-size: 20px;
  font-weight: 500;
  font-family: 'Roboto';
  margin-bottom: 20px;
`;

//TODO: use real data
const MealsListScreen = ({ isUserDonor = false }) => {
  if (!mealsListMock.length) return null;

  const heading = (
    <MealText>{`${isUserDonor ? 'Moji' : 'Rezervisani'} obroci`}</MealText>
  );

  const renderMeals = ({ item }) => (
    <MealSection
      mealName={item.mealName}
      mealDescription={item.mealDescription}
      pickUpStartTime={item.pickUpStartTime}
      pickUpEndTime={item.pickUpEndTime}
      donorAddress={item.donorAddress}
      donorPhone={item.donorPhone}
      isUserDonor={isUserDonor}
      handleCancelMeal={() => console.log(item.id)}
    />
  );

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      style={{ padding: 20 }}
      data={mealsListMock}
      renderItem={renderMeals}
      ListHeaderComponent={heading}
    />
  );
};

export default memo(MealsListScreen);
