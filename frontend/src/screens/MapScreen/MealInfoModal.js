import { Image, Modal, Pressable, Text, View } from 'react-native';
import styled from 'styled-components/native';
import { white, lightOrange } from '../../constants/colors';
import CloseIcon from '../../images/close-icon.png';
import { TouchableOpacity } from 'react-native-gesture-handler';
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
  fontsize: 14;
  lineheight: 18;
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
  border-radius: 20;
  width: 90%;
`;

const MealInfoModal = ({
  isVisible = false,
  closeModal = () => {},
  mealName = 'Supa od sove',
  description = 'Jako lepa supa od sove veruj mi Zorane. A ti ako ne verujes pojedi supu od krokodila.',
  adress = 'Bulevar bulevara BB, (sprat nema, stan izgoreo)',
  pickUpStartTime = 17,
  pickUpEndTime = 19,
  onReserveMeal,
}) => {
  return (
    <Modal visible={isVisible} transparent={true}>
      <View1Styled>
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
                {mealName}
              </Text>
              <Pressable onPress={closeModal}>
                <Image source={CloseIcon} style={{ width: 30, height: 30 }} />
              </Pressable>
            </View>
            <DescriptionStyled>{description}</DescriptionStyled>
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
            <BoldText>{adress}</BoldText>
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
                >{`${pickUpStartTime}h `}</Text>
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
                >{` ${pickUpEndTime}h`}</Text>
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
                    style={{ color: 'white', fontSize: 30, fontWeight: 'bold' }}
                  >
                    02
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
                    style={{ color: 'white', fontSize: 30, fontWeight: 'bold' }}
                  >
                    15
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
      </View1Styled>
    </Modal>
  );
};

export default MealInfoModal;
