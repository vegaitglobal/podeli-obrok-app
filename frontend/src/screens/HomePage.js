import React from 'react';
import styled from 'styled-components/native';
import MealSection from '../components/MealSection/MealSection';
import { grey } from '../constants/colors';
import AppIcon from '../images/AppIcon.png';

const HomeContainer = styled.View`
  margin: 70px 16px 51px 16px;
  // align-items: center;
`;
const Image = styled.Image`
  height: 148px;
  width: 163px;
`;
const Description = styled.View`
  margin: 22px 30px 58px 30px;
`;

const Text = styled.Text`
  text-align: center;
  line-height: 25px;
  font-size: 18px;
  font-weight: 400;
  font-family: 'Roboto';
  color: ${grey};
`;

const HomePage = () => (
  <HomeContainer>
    {/* <Image resizeMode='contain' source={AppIcon} />
    <Description>
      <Text>
        Aplikacija omogućava onima koji žele da podele hranu sa nekim, umesto da
        je bace, da to lakše urade. U par klikova, obrok koji želite da podelite
        sa nekim naći će se na Gugl mapi i postaće vidljiv svima kojima taj
        obrok treba. Tako je!
      </Text>
    </Description> */}
    <MealSection />
  </HomeContainer>
);

export default HomePage;
