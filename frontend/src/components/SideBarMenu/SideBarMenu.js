import {useNavigation} from '@react-navigation/native';
import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Paragraph} from '../../constants/textStyles';
import {lightOrange, white} from '../../constants/colors';
import {screens} from '../../constants/screens';
import {connect} from 'react-redux';
import {setSidebarMenuActiveAction} from '../../redux/actions/sidebarMenuAction';

const SidebarContainer = styled.Text`
  position: absolute;
  width: 180px;
  height: 100%;
  left: 210px;
  top: 83px;
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

const SideBarMenu = ({setSidebar}) => {
  const navigation = useNavigation();
  return (
    <SidebarContainer>
      <TouchableOpacity
        onPress={() => {
          setSidebar(false);
          navigation.navigate(screens.mealsList, {screen: screens.mealsList});
        }}>
        <ButtonContent>Moji obroci</ButtonContent>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setSidebar(false);
          navigation.navigate(screens.aboutUs, {screen: screens.aboutUs});
        }}>
        <ButtonContent>O nama</ButtonContent>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setSidebar(false);
          navigation.navigate(screens.authorWord, {screen: screens.authorWord});
        }}>
        <ButtonContent> Rec autora</ButtonContent>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setSidebar(false);
          navigation.navigate(screens.donation, {screen: screens.donation});
        }}>
        <ButtonContent> Donacije</ButtonContent>
      </TouchableOpacity>
    </SidebarContainer>
  );
};
const mapStateToProps = state => ({
  sidebarMenu: state.sidebar.isActive,
});

const mapDispatchToProps = dispatch => ({
  setSidebar: val => dispatch(setSidebarMenuActiveAction(val)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SideBarMenu);
