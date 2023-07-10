import moment from 'moment';
import React from 'react';
import { func } from 'prop-types';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';
import { black, grey, lightOrange } from '../../constants/colors';
import { mealPropType } from '../../constants/propTypes/mealsPropType';

const MealName = styled.Text`
  line-height: 24px;
  font-size: 16px;
  font-weight: 600;
  font-family: 'Roboto';
  margin-bottom: 9px;
  color: ${black};
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
const ReservationSection = ({
  meal,
  handleCancelMeal = () => {},
  isCancelled
}) => {
  if (!meal || isCancelled === true) {
    return null;
  }
  const pickUpStartTimeConverted = moment(meal?.startPickupTime).hour();
  const pickUpEndTimeConverted = moment(meal?.endPickupTime).hour();

  return (
    <View
      style={{
        paddingBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: grey,
        marginBottom: 15
      }}
    >
      <MealName>{meal?.name}</MealName>

      <View style={{ marginBottom: 10 }}>
        <Text>Adresa preuzimanja</Text>
        <BoldText>{meal?.address}</BoldText>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginRight: 50
        }}
      >
        <View>
          <PickUpTimeLabel>Vreme preuzimanja:</PickUpTimeLabel>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 10
            }}
          >
            <BoldText>{`${pickUpStartTimeConverted}h - ${pickUpEndTimeConverted}h`}</BoldText>
          </View>
        </View>
        <View>
          <Text style={{ marginBottom: 2, fontWeight: '400', color: grey }}>
            Telefon:
          </Text>
          <BoldText>{meal?.phone}</BoldText>
        </View>
      </View>

      <Text
        style={{
          color: lightOrange,
          textTransform: 'uppercase',
          alignSelf: 'flex-end',
          fontWeight: '500',
          fontSize: 14,
          lineHeight: 18
        }}
        onPress={handleCancelMeal}
      >
        otkaži obrok
      </Text>
    </View>
  );
};
ReservationSection.propTypes = {
  meal: mealPropType,
  handleCancelMeal: func
};
export default ReservationSection;
