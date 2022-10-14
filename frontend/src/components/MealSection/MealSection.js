import React from 'react';
import { Text, View } from 'react-native';

import { grey, lightOrange } from '../../constants/colors';

const MealSection = ({
  mealName = 'Supa od sove',
  mealDescription = 'Lorem ipsum dolor sit amet, conseltea adasiod asd;aasdjn',
  pickUpStartTime = 17,
  pickUpEndTime = 23,
  handleCancelMeal = () => {},
}) => {
  return (
    <View
      style={{
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: grey,
      }}
    >
      <Text style={{ marginBottom: 20, fontSize: 18, fontWeight: 'bold' }}>
        {mealName}
      </Text>
      <Text style={{ marginBottom: 10 }}>{mealDescription}</Text>
      <Text style={{ marginBottom: 2, fontWeight: '500', color: grey }}>
        Vreme preuzimanja:
      </Text>
      <View
        style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}
      >
        <Text>{`${pickUpStartTime}h`}</Text>
        <Text>{' - '}</Text>
        <Text>{`${pickUpEndTime}h`}</Text>
      </View>
      <Text
        style={{
          color: lightOrange,
          textTransform: 'uppercase',
          alignSelf: 'flex-end',
        }}
        onPress={handleCancelMeal}
      >
        otkazi obrok
      </Text>
    </View>
  );
};

export default MealSection;
