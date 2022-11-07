import moment from 'moment';
import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';
import { black, grey, lightOrange } from '../../constants/colors';

const MealName = styled.Text`
  line-height: 24px;
  font-size: 16px;
  font-weight: 600;
  font-family: 'Roboto';
  margin-bottom: 9px;
  color: ${black};
`;
const MealDescription = styled.Text`
  margin-bottom: 10px;
  font-family: 'Roboto';
`;
const PickUpTimeLabel = styled.Text`
margin-bottom: 2px; 
color: ${grey};
font-size: 14px;
line-height: 18px;
`;

const BoldText = styled.Text`
font-weight: 600;
color: ${grey};
font-size: 14px;
line-height: 18px;
`;
const MealSection = ({
  mealName,
  mealDescription,
  pickUpStartTime,
  pickUpEndTime,
  handleCancelMeal = () => {},
  isUserDonor,
  donorAddress,
  donorPhone,
}) => {
  const pickUpStartTimeConverted = moment(pickUpStartTime).hour();
  const pickUpEndTimeConverted = moment(pickUpEndTime).hour();
  return (
    <View
      style={{
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: grey,
      }}
    >
      <MealName>{mealName}</MealName>

      {isUserDonor ? (
        <MealDescription>{mealDescription}</MealDescription>
      ) : (
        <View style={{ marginBottom: 10 }}>
          <Text>Adresa preuzimanja</Text>
          <BoldText>{donorAddress}</BoldText>
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
          <PickUpTimeLabel>Vreme preuzimanja:</PickUpTimeLabel>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 10,
            }}
          >
            <BoldText>{`${pickUpStartTimeConverted}h - ${pickUpEndTimeConverted}h`}</BoldText>
          </View>
        </View>
        {!isUserDonor && (
          <View>
            <Text style={{ marginBottom: 2, fontWeight: '400', color: grey }}>
              Telefon:
            </Text>
            <BoldText>{donorPhone}</BoldText>
          </View>
        )}
      </View>

      {!isUserDonor && <Text
        style={{
          color: lightOrange,
          textTransform: 'uppercase',
          alignSelf: 'flex-end',
          fontWeight: '500',
          fontSize: 14,
          lineHeight: 18,
        }}
        onPress={handleCancelMeal}
      >
        otkaži obrok
      </Text>}
    </View>
  );
};

export default MealSection;
