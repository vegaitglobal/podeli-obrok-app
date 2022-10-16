import {
  Image,
  Modal,
  Pressable,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Swiper from 'react-native-swiper';
import styled from 'styled-components/native';
import { white, lightOrange } from '../../constants/colors';
import CloseIcon from '../../images/close-icon.png';
import { ButtonContent } from '../../constants/textStyles';

const BoldText = styled(Text)`
  color: ${white};
  font-size: 14px;
  line-height: 18px;
  margin-bottom: 20px;
  font-weight: bold;
`;

export const DescriptionStyled = styled(Text)`
  color: ${white};
  font-size: 14px;
  line-height: 18px;
  margin-bottom: 18px;
`;

export const View1Styled = styled(View)`
  background-color: rgba(52, 52, 52, 0.5);
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const View2Styled = styled(View)`
  background-color: ${lightOrange};
  border-radius: 20px;
  width: 90%;
`;

const MealInfoModal = ({
  isVisible = false,
  closeModal = () => {},
  onReserveMeal,
}) => {
  const modalsMockData = [
    {
      id: 1,
      mealName: 'Supa od sove',
      description:
        'Jako lepa supa od sove veruj mi Zorane. A ti ako ne verujes pojedi supu od krokodila. supa od sove veruj mi Zorane. A ti ako ne verujes pojedi supu od krokodila supa od sove veruj mi Zorane. A ti ako ne verujes pojedi supu od krokodila supa od sove veruj mi Zorane. A ti ako ne verujes pojedi supu od krokodila supa od sove veruj mi Zorane. A ti ako ne verujes pojedi supu od krokodila',
      adress: 'Bulevar bulevara BB, (sprat nema, stan izgoreo)',
      pickUpStartTime: 17,
      pickUpEndTime: 19,
      expirationDays: 2,
      experationHours: 15,
    },
    {
      id: 2,
      mealName: 'Supa od jazavca',
      description: 'Moliom.',
      adress: 'Bulevar bulevara BB, (sprat nema, stan izgoreo)',
      pickUpStartTime: 11,
      pickUpEndTime: 9,
      expirationDays: 22,
      experationHours: 15,
    },
    {
      id: 3,
      mealName: 'Supa od jazavca',
      description: 'Moliom.',
      adress: 'Bulevar bulevara BB, (sprat nema, stan izgoreo)',
      pickUpStartTime: 11,
      pickUpEndTime: 9,
      expirationDays: 22,
      experationHours: 15,
    },
  ];

  const renderModals = modalsMockData.map((item) => {
    return (
      <View
        key={item.id}
        style={{
          height: '100%',
          justifyContent: 'center',
          alignSelf: 'center',
        }}
      >
        <View2Styled>
          <View style={{ padding: 15, marginLeft: 18 }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 20,
              }}
            >
              <Text
                style={{
                  color: 'white',
                  fontWeight: '500',
                  fontSize: 24,
                  lineHeight: 28,
                }}
              >
                {item.mealName}
              </Text>
              <Pressable onPress={closeModal}>
                <Image source={CloseIcon} style={{ width: 30, height: 30 }} />
              </Pressable>
            </View>
            <DescriptionStyled>{item.description}</DescriptionStyled>
            <Text
              style={{
                color: 'white',
                fontSize: 14,
                lineHeight: 18,
                marginBottom: 10,
              }}
            >
              Adresa preuzimanja:
            </Text>
            <BoldText>{item.adress}</BoldText>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Text
                style={{
                  color: 'white',
                  fontSize: 14,
                  lineHeight: 18,
                  marginBottom: 10,
                  fontWeight: '600',
                }}
              >
                Vreme preuzimanja:{' '}
              </Text>
              <View style={{ flexDirection: 'row' }}>
                <Text
                  style={{
                    color: 'white',
                    fontWeight: 'bold',
                  }}
                >{`${item.pickUpStartTime}h `}</Text>
                <Text
                  style={{
                    color: 'white',
                    fontWeight: 'bold',
                  }}
                >
                  -
                </Text>
                <Text
                  style={{
                    color: 'white',
                    fontWeight: 'bold',
                  }}
                >{` ${item.pickUpEndTime}h`}</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: 15,
              }}
            >
              <Text
                style={{
                  color: 'white',
                  fontSize: 14,
                  lineHeight: 18,
                  marginBottom: 10,
                  fontWeight: '600',
                }}
              >
                Ispravnost obroka:
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  width: '30%',
                  justifyContent: 'space-between',
                }}
              >
                <View style={{ alignItems: 'center' }}>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 30,
                      fontWeight: 'bold',
                    }}
                  >
                    {item.expirationDays}
                  </Text>
                  <Text
                    style={{
                      color: 'white',
                      lineHeight: 18,
                      marginBottom: 10,
                      fontWeight: '600',
                    }}
                  >
                    Dana
                  </Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 30,
                      fontWeight: 'bold',
                    }}
                  >
                    {item.experationHours}
                  </Text>
                  <Text
                    style={{
                      color: 'white',
                      lineHeight: 18,
                      marginBottom: 10,
                      fontWeight: '600',
                    }}
                  >
                    Sati
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              width: '100%',
              height: 1,
              backgroundColor: 'white',
              marginTop: 20,
            }}
          />
          <TouchableOpacity
            onPress={() => onReserveMeal()}
            style={{
              textAlign: 'center',
              textTransform: 'uppercase',
              paddingVertical: 15,
              color: 'white',
              fontWeight: '600',
            }}
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
          dot={
            <View
              style={{
                width: 10,
                height: 10,
                borderRadius: 50,
                borderColor: 'white',
                borderWidth: 1,
                marginRight: 5,
              }}
            />
          }
          activeDot={
            <View
              style={{
                width: 10,
                height: 10,
                borderRadius: 50,
                backgroundColor: 'white',
                marginRight: 5,
              }}
            />
          }
        >
          {renderModals}
        </Swiper>
      </View1Styled>
    </Modal>
  );
};

export default MealInfoModal;
