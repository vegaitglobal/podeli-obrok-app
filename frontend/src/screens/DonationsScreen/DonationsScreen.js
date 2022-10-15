import React from 'react';
import styled from 'styled-components';
import { View, Text, Linking } from 'react-native';
import { Paragraph } from '../../constants/textStyles';
import { lightOrange } from '../../constants/colors';
import Heart from '../../images/heart.png';

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

const Bold = styled(Text)`
  font-weight: 600;
`;

const StyledParagraph = styled(Paragraph)`
  text-align: left;
  margin-top: 20px;
`;

const Link = styled(Text)`
  color: ${lightOrange};
  text-decoration-line: underline;
`;

const ThanksWraper = styled(View)`
  flex-direction: row;
  margin-top: 35px;
`;

const Thanks = styled(Text)`
color: ${lightOrange}
  text-transform: uppercase;
  font-type: 'Roboto';
  font-weight: 600;
  margin-right: 5px;
`;

const HeartImage = styled.Image`
  width: 13px;
  height: 12px;
  align-self: center;
`;

const DonationsScreen = () => {
  return (
    <ViewWraper>
      <Title>Donacija</Title>
      <StyledParagraph>
        Svaka podrška je dobrodošla, bez obzira da li je mala ili velika!
      </StyledParagraph>
      <StyledParagraph>
        <Bold>– Pošaljite donaciju putem PayPall-a na: </Bold>
        <Link onPress={() => Linking.openURL('https://nshc.org.rs/')}>
          nshc@eunet.rs
        </Link>
        , ili uplatom na namenski račun NSHC-a broj:{' '}
        <Bold>150-1857058-62. </Bold>
        Vaš prilog će biti usmeren na projekte koje NSHC realizuje. Ako želite
        da se Vaš novac usmeri na određeni projekat ili aktivnost, molimo da to
        naznačite prilikom uplate.
      </StyledParagraph>
      <StyledParagraph>
        <Bold>– Promovišite rad NSHC-a </Bold>
        korišćenjem ove aplikacije, praćenjem naših naloga na društvenim
        mrežama, informisanjem prijatelja i porodice o našem radu... Sve ovo
        doprinosi stvaranju solidarne zajednice i humanog društva.
      </StyledParagraph>
      <ThanksWraper>
        <Thanks>Hvala!</Thanks>
        <HeartImage source={Heart} resizeMode='contain' />
      </ThanksWraper>
    </ViewWraper>
  );
};

export default DonationsScreen;
