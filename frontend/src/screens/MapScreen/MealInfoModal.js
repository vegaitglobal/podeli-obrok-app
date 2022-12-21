import React from 'react';
import {
  Image,
  Modal,
  Pressable,
  Text,
  View,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import Swiper from 'react-native-swiper';
import styled from 'styled-components/native';
import { white, lightOrange } from '../../constants/colors';
import CloseIcon from '../../images/close-icon.png';
import { ButtonContent } from '../../constants/textStyles';
import { getHoursFromTimestamp } from '../../util/getHoursFromTimestamp';

const BoldText = styled.Text`
  color: ${white};
  font-size: 14px;
  line-height: 18px;
  margin-bottom: 20px;
  font-weight: bold;
`;

export const DescriptionStyled = styled.Text`
  color: ${white};
  font-size: 14px;
  line-height: 18px;
  margin-bottom: 18px;
`;

export const View1Styled = styled.View`
  background-color: rgba(52, 52, 52, 0.5);
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const View2Styled = styled.View`
  background-color: ${lightOrange};
  border-radius: 20px;
`;

const MealInfoModal = ({
  isVisible = false,
  closeModal = () => {},
  onReserveMeal,
  meals
}) => {
  const renderModals = meals.map((item) => {
    return (
      <View key={item.id} style={styles.modalContainer}>
        <View2Styled>
          <View style={styles.modalContent}>
            <View style={styles.header}>
              <Text style={styles.mealName}>{item.name}</Text>
              <Pressable onPress={closeModal}>
                <Image source={CloseIcon} style={styles.closeImg} />
              </Pressable>
            </View>
            <DescriptionStyled>{item.description}</DescriptionStyled>
            <Text style={styles.mealDesc}>Adresa preuzimanja:</Text>
            <BoldText>{item.address}</BoldText>
            <View style={styles.timeToPickUpContainer}>
              <Text style={styles.pickUpTime}>Vreme preuzimanja:</Text>
              <View style={styles.timeContainer}>
                <Text style={styles.boldText}>{`${getHoursFromTimestamp(
                  item.startPickupTime
                )}h `}</Text>
                <Text style={styles.boldText}>-</Text>
                <Text style={styles.boldText}>{` ${getHoursFromTimestamp(
                  item.endPickupTime
                )}h`}</Text>
              </View>
            </View>
            <View style={styles.mealExpirationContainer}>
              <Text style={styles.mealExpirationTitle}>Ispravnost obroka:</Text>
              <View style={styles.expirationDaysAndHours}>
                <View style={styles.alignedItems}>
                  <Text style={styles.expirationDaysNumber}>
                    {item.daysToExpiry}
                  </Text>
                  <Text style={styles.expirationDaysText}>Dana</Text>
                </View>
                <View style={styles.alignedItems}>
                  <Text style={styles.expirationDaysNumber}>
                    {item.hoursToExpiry}
                  </Text>
                  <Text style={styles.expirationDaysText}>Sati</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.horizontalLine} />
          <TouchableOpacity
            onPress={() => onReserveMeal(item.id)}
            style={styles.mainButton}
          >
            <ButtonContent>Rezerviši obrok</ButtonContent>
          </TouchableOpacity>
        </View2Styled>
      </View>
    );
  });

  return (
    <Modal visible={isVisible} transparent={true}>
      <View1Styled>
        <Swiper
          horizontal
          loop={false}
          dot={<View style={styles.swiperDot} />}
          activeDot={<View style={styles.activeDot} />}
        >
          {renderModals}
        </Swiper>
      </View1Styled>
    </Modal>
  );
};

export default MealInfoModal;

const styles = StyleSheet.create({
  swiperDot: {
    width: 10,
    height: 10,
    borderRadius: 50,
    borderColor: 'white',
    borderWidth: 1,
    marginRight: 5
  },
  activeDot: {
    width: 10,
    height: 10,
    borderRadius: 50,
    backgroundColor: 'white',
    marginRight: 5
  },
  modalContainer: {
    height: '100%',
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  modalContent: {
    padding: 15,
    marginLeft: 18
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20
  },
  mealName: {
    color: 'white',
    fontWeight: '500',
    fontSize: 24,
    lineHeight: 28
  },
  closeImg: {
    width: 30,
    height: 30
  },
  mealDesc: {
    color: 'white',
    fontSize: 14,
    lineHeight: 18,
    marginBottom: 10
  },
  timeToPickUpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  pickUpTime: {
    color: 'white',
    fontSize: 14,
    lineHeight: 18,
    marginBottom: 10
  },
  timeContainer: {
    flexDirection: 'row'
  },
  boldText: {
    color: 'white',
    fontWeight: 'bold'
  },
  mealExpirationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15
  },
  mealExpirationTitle: {
    color: 'white',
    fontSize: 14,
    lineHeight: 18,
    marginBottom: 10
  },
  expirationDaysAndHours: {
    flexDirection: 'row',
    width: '30%',
    justifyContent: 'space-between'
  },
  expirationDaysNumber: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold'
  },
  expirationDaysText: {
    color: 'white',
    lineHeight: 18,
    marginBottom: 10,
    fontWeight: '600'
  },
  alignedItems: {
    alignItems: 'center'
  },
  horizontalLine: {
    width: '100%',
    height: 1,
    backgroundColor: 'white',
    marginTop: 20
  },
  mainButton: {
    textAlign: 'center',
    textTransform: 'uppercase',
    paddingVertical: 15,
    color: 'white',
    fontWeight: '600'
  }
});
