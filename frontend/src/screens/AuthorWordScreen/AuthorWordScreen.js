import React from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';
import styled from 'styled-components';
import { lightOrange } from '../../constants/colors';
import { Paragraph } from '../../constants/textStyles';
import AppIcon from '../../images/AppIcon.png';

const Title = styled(Text)`
  margin-bottom: 13px;
  font-size: 20px;
  font-weight: 500;
  line-height: 27px;
`;

const StyledParagraph = styled(Paragraph)`
  text-align: left;
`;

const LogoImage = styled.Image`
  width: 150px;
  height: 70px;
  align-self: center;
  margin: 29px 20px;
`;

const Name = styled(Text)`
  text-transform: uppercase;
  font-style: italic;
  font-type: 'Roboto';
  font-weight: 600;
  margin-bottom: 5px;
`;

const AuthorWordScreen = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      <Title>Reč autora</Title>
      <StyledParagraph>
        U vremenu blještavila, površnosti, novca, nezahvalnosti, samohvalisanja,
        nadmenosti i uobraženosti, čovek vrlo lako zaboravi na ono što ga čini
        ljudskim bićem, a to je svest o drugim ljudima. Ova aplikacija
        predstavlja pokušaj njenog kreatora da u ljudima probudi tu svest i da
        ih odobrovolji da, makar na kratko, pomisle na one kojima je život
        uskratio ono esencijalno - topao obrok.
      </StyledParagraph>
      <LogoImage source={AppIcon} resizeMode='contain' />
      <Name>Darian Pudić,</Name>
      <Text style={{ color: lightOrange }}>
        master inženjer elektrotehnike i računarstva
      </Text>
    </ScrollView>
  );
};

export default AuthorWordScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingLeft: 24,
    paddingRight: 32,
    paddingBottom: 32
  }
});
