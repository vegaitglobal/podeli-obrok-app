import React from 'react';
import styled from 'styled-components/native';
import AppLogo from '../images/AppIcon.png';
import BlackLogo from '../images/blackLogo.png';
import {Paragraph} from '../constants/textStyles';
import {darkOrange, lightOrange} from '../constants/colors';
import Button from '../components/Button';
import {screens} from '../constants/screens';

const HomeContainer = styled.View`
  margin: 70px 16px 51px 16px;
  align-items: center;
  height: 100%;
  flex: 1;
  justify-content: space-between;
`;
const Image = styled.Image`
  height: 148px;
  width: 163px;
`;
const BlackLogoImage = styled.Image`
  margin-top: 39px;
  margin-bottom: 39px;
  height: 23px;
  width: 225px;
`;

const Description = styled.View`
  margin: 22px 30px 58px 30px;
`;

const HomeScreen = ({ navigation }) => {
  return (
    <HomeContainer>
      <Image resizeMode="contain" source={AppLogo} />
      <BlackLogoImage resizeMode="contain" source={BlackLogo} />
      <Description>
        <Paragraph>
          Aplikacija omogućava onima koji žele da podele hranu sa nekim, umesto
          da je bace, da to lakše urade. U par klikova, obrok koji želite da
          podelite sa nekim naći će se na Gugl mapi i postaće vidljiv svima
          kojima taj obrok treba.
        </Paragraph>
      </Description>
      <Button
        onPress={() =>
          navigation.navigate(screens.addMeal)
        }
        backgroundColor={darkOrange}
        content="Podeli obrok"
      />
      <Button
        onPress={() => {
          navigation.navigate(screens.map);
        }}
        backgroundColor={lightOrange}
        content="Preuzmi obrok"
      />
    </HomeContainer>
  );
};

export default HomeScreen;
