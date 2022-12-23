import React from 'react';
import { TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { func, string, bool } from 'prop-types';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';
import { Paragraph } from '../../constants/textStyles';
import { lightOrange, white } from '../../constants/colors';
import { screens } from '../../constants/screens';
import { setSidebarMenuActiveAction } from '../../redux/actions/sidebarMenuAction';

const SidebarContainer = styled.Text`
  position: absolute;
  width: 200px;
  height: 100%;
  right: 0px;
  top: ${({ topPosition }) => topPosition || 0}px;
  background: ${lightOrange};
`;
export const ButtonContent = styled(Paragraph)`
  color: ${white};
  letter-spacing: 1.35px;
  text-transform: uppercase;
  font-weight:bold;
  margin-top: 20px;
  margin left: 15px;
`;

const SideBarMenu = ({ setSidebar, topPosition, isMyMeals }) => {
  const navigation = useNavigation();
  return (
    <SidebarContainer topPosition={topPosition}>
      <TouchableOpacity
        onPress={() => {
          setSidebar(false);
          navigation.navigate(screens.mealsList);
        }}
      >
        <ButtonContent>
          {isMyMeals ? 'Moji' : 'Rezervisani'} obroci
        </ButtonContent>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setSidebar(false);
          navigation.navigate(screens.aboutUs);
        }}
      >
        <ButtonContent>O nama</ButtonContent>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setSidebar(false);
          navigation.navigate(screens.authorWord);
        }}
      >
        <ButtonContent>reč autora</ButtonContent>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setSidebar(false);
          navigation.navigate(screens.donation);
        }}
      >
        <ButtonContent>Donacije</ButtonContent>
      </TouchableOpacity>
    </SidebarContainer>
  );
};

SideBarMenu.propTypes = {
  setSidebar: func,
  topPosition: string,
  isMyMeals: bool
};

const mapStateToProps = ({ sidebar }) => ({
  topPosition: sidebar.topPosition,
  isMyMeals: sidebar.isMyMeals
});

const mapDispatchToProps = (dispatch) => ({
  setSidebar: (val) => dispatch(setSidebarMenuActiveAction(val))
});

export default connect(mapStateToProps, mapDispatchToProps)(SideBarMenu);
