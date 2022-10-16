import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  Linking,
  Pressable,
} from 'react-native';
import styled from 'styled-components';
import { Paragraph } from '../../constants/textStyles';
import NshcLogo from '../../images/Nshc-logo.png';
import { black, lightOrange } from '../../constants/colors';
import facebook from '../../images/facebook.png';
import instagram from '../../images/instagram.png';

const ViewWraper = styled(View)`
  padding-top: 30px;
  padding-left: 24px;
  padding-right: 32px;
`;

const Title = styled(Text)`
  margin-bottom: 13px;
  font-size: 20px;
  font-weight: 500;
  line-height: 27px;
`;

const LogoImage = styled.Image`
  width: 150px;
  height: 70px;
  align-self: center;
  margin: 20px 20px;
`;

const FacebookImage = styled.Image`
  width: 30px;
  height: 30px;
  align-self: center;
  margin-right: 10px;
`;

const InstagramImage = styled.Image`
  width: 30px;
  height: 30px;
  align-self: center;
`;

const StyledParagraph = styled(Paragraph)`
  text-align: left;
`;

const SocialParagraph = styled(Text)`
  font-weight: 500;
  font-type: 'Roboto';
  color: ${black};
  margin-top: 15px;
`;

const SocialIcons = styled(View)`
  flex-direction: row;
  margin-top: 16px;
`;

const ReadMore = styled(Text)`
  color: ${lightOrange};
  text-decoration-line: underline;
  text-align: center;
  text-transform: uppercase;
  margin-top: 30px;
`;

const AboutUsScreen = () => {
  return (
    <ViewWraper>
      <Title>O nama</Title>
      <StyledParagraph>
        Novosadski humanitarni centar (NSHC) je neprofitna i dobrotvorna
        organizacija koja od 1998. doprinosi stvaranju humanog društva kroz
        pružanje podrške ugroženom stanovništvu, podsticanje aktivizma građana,
        istraživački rad i obrazovanje.
      </StyledParagraph>
      <LogoImage source={NshcLogo} resizeMode='contain' />
      <StyledParagraph style={{ marginBottom: 15 }}>
        NSHC pomaže posebno osetljivim grupama: siromašnima, samohranim
        roditeljima, starijim osobama, deci i mladima, i drugim.
      </StyledParagraph>
      <StyledParagraph>
        Mnogo je onih kojima je potrebna pomoć u hrani. Istovremeno, mnogo se
        hrane baca. Naša je namera da povežemo ljude koji imaju višak hrane,
        bilo da se radi o jednom obroku ili većoj količini namirnica, sa onima
        kojima će ta hrana dobro doći.
      </StyledParagraph>
      <SocialParagraph>Pratite nas na društvenim mrežama</SocialParagraph>
      <SocialIcons>
        <Pressable
          onPress={() => Linking.openURL('https://www.facebook.com/NSHCentar')}
        >
          <FacebookImage source={facebook} resizeMode='contain' />
        </Pressable>
        <Pressable
          onPress={() =>
            Linking.openURL('https://www.instagram.com/nshcentar/')
          }
        >
          <InstagramImage source={instagram} resizeMode='contain' />
        </Pressable>
      </SocialIcons>
      <ReadMore onPress={() => Linking.openURL('http://nshc.org.rs')}>
        procitaj vise
      </ReadMore>
    </ViewWraper>
  );
};

export default AboutUsScreen;
