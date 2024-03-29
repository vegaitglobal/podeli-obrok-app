import moment from 'moment';
import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import { black, grey } from '../../constants/colors';

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
const MealSection = ({ meal }) => {
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

      <MealDescription>{meal?.description}</MealDescription>

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
      </View>
    </View>
  );
};

export default MealSection;
