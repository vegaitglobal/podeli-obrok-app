import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';

import { grey, lightOrange } from '../../constants/colors';

const MealName = styled(Text)`
  line-height: 16px;
  font-size: 18px;
  font-weight: 700;
  font-family: 'Roboto';
  margin-bottom: 20px;
`;
const MealDescription = styled(Text)`
  margin-bottom: 10px;
  font-family: 'Roboto';
`;
const PickUpTime = styled(Text)`
margin-bottom: 2px; 
font-weight: 500, 
color: ${grey};
font-family: 'Roboto'`;

const MealSection = ({
  mealName = '',
  mealDescription = '',
  pickUpStartTime = '',
  pickUpEndTime = '',
  handleCancelMeal = () => {},
  isUserDonor = false,
  donorAddress = '',
  donorPhone = '',
}) => {
  return (
    <View
      style={{
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: grey,
      }}
    >
      <MealName>{mealName}</MealName>

      {!isUserDonor ? (
        <MealDescription>{mealDescription}</MealDescription>
      ) : (
        <View style={{ marginBottom: 10 }}>
          <Text>Adresa preuzimanja</Text>
          <Text>{donorAddress}</Text>
        </View>
      )}

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginRight: 50,
        }}
      >
        <View>
          <PickUpTime>Vreme preuzimanja:</PickUpTime>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 10,
            }}
          >
            <Text>{`${pickUpStartTime}h`}</Text>
            <Text>{' - '}</Text>
            <Text>{`${pickUpEndTime}h`}</Text>
          </View>
        </View>
        {!isUserDonor && (
          <View>
            <Text style={{ marginBottom: 2, fontWeight: '500', color: grey }}>
              Telefon
            </Text>
            <Text>{donorPhone}</Text>
          </View>
        )}
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
