import React from 'react';
import { Image, Modal, Pressable, View } from 'react-native';
import styled from 'styled-components/native';
import { white } from '../../constants/colors';
import CloseIcon from '../../images/close-icon.png';
import checkMark from '../../images/checkMark.png';
import dashedCircle from '../../images/dashedCircle.png';
import { View1Styled, View2Styled } from './MealInfoModal';
import { Paragraph } from '../../constants/textStyles';
import { checkNumberDigit } from '../../util/expirationDateUtil';
import moment from 'moment';

const BoldText = styled.Text`
  color: ${white};
  font-size: 14;
  line-height: 18;
  margin-bottom: 10;
  font-weight: bold;
`;
const CheckMarkImage = styled.Image`
  width: 77px;
  height: 76px;
  align-self: center;
  margin-top: 15px;
`;

const DasheCircleImage = styled.Image`
  position: absolute;
  width: 101px;
  height: 101px;
  align-self: center;
`;
const Description = styled(Paragraph)`
  color: ${white};
  font-size: 14px;
`;
const DescriptionContainer = styled.View`
  margin-top: 21px;
  margin-left: 22px;
  margin-right: 21px;
`;
const Line = styled.View`
  background-color: ${white};
  height: 1px;
  margin-top: 21px;
  margin-left: 22px;
  margin-right: 21px;
`;
const MealDescription = styled.View`
  margin: 15px 21px 15px 22px;
`;
const AdressTitle = styled.Text`
  margin-top: 15px;
  margin-left: 22px;
  margin-right: 21px;
  color: ${white};
  font-size: 16px;
  line-height: 18px;
`;
const AdressDescription = styled.Text`
  color: ${white};
  font-size: 14px;
  margin-top: 15px;
  margin-left: 25px;
  margin-right: 21px;
  color: ${white};
  font-weight: bold;
`;
const DeliveryContainer = styled.View`
  margin-top: 21px;
  margin-left: 22px;
  margin-right: 21px;
  flex-direction: row;
  justify-content: space-between;
`;
const TimeLabel = styled.Text`
  margin-top: 15px;
  margin-left: 2px;
  margin-right: 21px;
  color: ${white};
  font-size: 17px;
  flex-direction: row;
  font-family: 'Roboto';
`;
const Time = styled.Text`
  margin-top: 15px;
  margin-left: 22px;
  margin-right: 21px;
  color: ${white};
  font-size: 14px;
  flex-direction: row;
  font-weight: bold;
`;
const PhoneContainer = styled.View`
  margin-top: 21px;
  margin-left: 22px;
  margin-right: 21px;
  flex-direction: row;
  justify-content: space-between;
`;
const PhoneLabel = styled.Text`
  margin-top: 15px;
  margin-left: 2px;
  margin-right: 21px;
  color: ${white};
  font-size: 17px;
  flex-direction: row;
  font-family: 'Roboto';
`;
const Number = styled.Text`
  margin-top: 15px;
  margin-left: 22px;
  margin-right: 21px;
  color: ${white};
  font-size: 14px;
  flex-direction: row;
  font-weight: bold;
  font-size: 14px;
`;
const CorrectnessContainer = styled.View`
  margin-top: 21px;
  margin-left: 22px;
  margin-right: 21px;
  flex-direction: row;
  justify-content: space-between;
`;
const CorrectnessLabel = styled.Text`
  margin-top: 15px;
  margin-left: 2px;
  margin-right: 21px;
  color: ${white};
  font-size: 17px;
  flex-direction: row;
  font-family: 'Roboto';
  margin-bottom: 40px;
`;
const CorrDateTime = styled.Text`
  margin-top: 15px;
  margin-left: 22px;
  margin-right: 21px;
  color: ${white};
  font-size: 14px;
  flex-direction: row;
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 40px;
`;
const IconContainer = styled.View`
  margin-top: -20px;
`;

const ConfirmMealInfoModal = ({
  address,
  startPickupTime,
  endPickupTime,
  name,
  phone,
  daysToExpiry,
  hoursToExpiry,
  description,
  isVisible,
  closeModal,
}) => {
  const pickupStartTime = moment(startPickupTime).hour();
  const pickupEndTime = moment(endPickupTime).hour();
  return (
    <Modal visible={isVisible} transparent={true}>
      <View1Styled>
        <View2Styled>
          <View
            style={{
              flexDirection: 'row-reverse',
              justifyContent: 'flex-start',
              marginBottom: 20,
              marginLeft: 20,
            }}
          >
            <Pressable onPress={closeModal}>
              <Image
                source={CloseIcon}
                style={{ width: 30, height: 30, marginTop: 15 }}
              />
            </Pressable>
          </View>
          <IconContainer>
            <DasheCircleImage source={dashedCircle} resizeMode="contain" />
            <CheckMarkImage source={checkMark} resizeMode="contain" />
          </IconContainer>
          <DescriptionContainer>
            <Description>
              Uspešno ste rezervisali označeni obrok i on više nije vidljiv
              drugim korisnicima. Molimo ispoštujte navedeno vreme i mesto
              preuzimanja.
            </Description>
          </DescriptionContainer>
          <Line />
          <MealDescription>
            <BoldText>{name}</BoldText>
            <Description style={{ textAlign: 'left' }}>
              {description}
            </Description>
          </MealDescription>
          <AdressTitle> Adresa preuzimanja:</AdressTitle>
          <AdressDescription>{address}</AdressDescription>
          <DeliveryContainer>
            <TimeLabel>Vreme preuzimanja:</TimeLabel>
            <Time>{`${pickupStartTime}h - ${pickupEndTime}h`}</Time>
          </DeliveryContainer>
          <PhoneContainer>
            <PhoneLabel>Telefon:</PhoneLabel>
            <Number>{phone}</Number>
          </PhoneContainer>
          <CorrectnessContainer>
            <CorrectnessLabel>Ispravnost obroka:</CorrectnessLabel>
            <CorrDateTime>
              {`${checkNumberDigit(daysToExpiry)} Dana ${checkNumberDigit(
                hoursToExpiry,
              )} Sati`}
            </CorrDateTime>
          </CorrectnessContainer>
        </View2Styled>
      </View1Styled>
    </Modal>
  );
};

export default ConfirmMealInfoModal;
