import React from 'react';
import styled from 'styled-components/native';
import { Paragraph } from '../constants/TextStyles';
import AppIcon from '../images/AppIcon.png';

const HomeContainer = styled.View`
  margin: 70px 16px 51px 16px;
  align-items: center;
`;
const Image = styled.Image`
  height: 148px;
  width: 163px;
`;
const Description = styled.View`
  margin: 22px 30px 58px 30px;
`;

const HomePage = () => (
  <HomeContainer>
    <Image resizeMode='contain' source={AppIcon} />
    <Description>
      <Paragraph>
        Aplikacija omogućava onima koji žele da podele hranu sa nekim, umesto da
        je bace, da to lakše urade. U par klikova, obrok koji želite da podelite
        sa nekim naći će se na Gugl mapi i postaće vidljiv svima kojima taj
        obrok treba. Tako je!
      </Paragraph>
    </Description>
  </HomeContainer>
);

export default HomePage;
