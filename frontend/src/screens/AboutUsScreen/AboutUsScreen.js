import React from 'react';
import {
  Text,
  View,
  Linking,
  Pressable,
  ScrollView,
  StyleSheet,
  Image
} from 'react-native';
import styled from 'styled-components';
import { Paragraph } from '../../constants/textStyles';
import NshcLogo from '../../images/Nshc-logo.png';
import { black, lightOrange } from '../../constants/colors';
import facebook from '../../images/facebook.png';
import instagram from '../../images/instagram.png';

const StyledParagraph = styled(Paragraph)`
  text-align: left;
`;

const AboutUsScreen = () => {
  const onPressFacebook = () => {
    Linking.openURL('https://www.facebook.com/NSHCentar');
  };

  const onPressInstagram = () => {
    Linking.openURL('https://www.instagram.com/nshcentar/');
  };

  const onPressReadMore = () => {
    Linking.openURL('http://nshc.org.rs');
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      <Text style={styles.title}>O nama</Text>
      <StyledParagraph>
        Novosadski humanitarni centar (NSHC) je neprofitna i dobrotvorna
        organizacija koja od 1998. doprinosi stvaranju humanog društva kroz
        pružanje podrške ugroženom stanovništvu, podsticanje aktivizma građana,
        istraživački rad i obrazovanje.
      </StyledParagraph>
      <Image source={NshcLogo} resizeMode='contain' style={styles.logo} />
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
      <Text style={styles.socialsParagraph}>
        Pratite nas na društvenim mrežama
      </Text>
      <View style={styles.socialIconsContainer}>
        <Pressable onPress={onPressFacebook}>
          <Image source={facebook} style={styles.socialImage} />
        </Pressable>
        <Pressable onPress={onPressInstagram}>
          <Image source={instagram} style={styles.socialImage} />
        </Pressable>
      </View>
      <Text style={styles.readMore} onPress={onPressReadMore}>
        pročitaj više
      </Text>
    </ScrollView>
  );
};

export default AboutUsScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingLeft: 24,
    paddingRight: 32,
    paddingBottom: 40
  },
  title: {
    marginBottom: 13,
    fontSize: 20,
    fontWeight: '500',
    lineHeight: 27
  },
  logo: {
    width: 150,
    height: 70,
    alignSelf: 'center',
    marginVertical: 20
  },
  socialsParagraph: {
    fontWeight: '500',
    fontFamily: 'Roboto',
    color: black,
    marginTop: 15
  },
  socialIconsContainer: {
    flexDirection: 'row',
    marginTop: 16,
    justifyContent: 'space-between',
    width: '25%'
  },
  socialImage: {
    width: 30,
    height: 30
  },
  readMore: {
    color: lightOrange,
    textAlign: 'center',
    marginTop: 30,
    textDecorationLine: 'underline',
    textTransform: 'uppercase'
  }
});
