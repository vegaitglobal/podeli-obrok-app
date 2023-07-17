import React from 'react';
import { ScrollView, View, Image, Text, StyleSheet } from 'react-native';
import AppLogo from '../images/AppIcon.png';
import BlackLogo from '../images/blackLogo.png';
import { darkOrange, grey, lightOrange } from '../constants/colors';
import Button from '../components/Button';
import { screens } from '../constants/screens';
import { navigationPropType } from '../constants/propTypes/navigationPropType';
import { connect } from 'react-redux';
import { setMyMealsActiveAction } from '../redux/actions/sidebarMenuAction';

const HomeScreen = ({ navigation, setIsMyMeals }) => {
  const handleShareMeal = () => {
    setIsMyMeals(true);
    navigation.navigate(screens.addMeal);
  };

  const handleTakeMeal = () => {
    setIsMyMeals(false);
    navigation.navigate(screens.map);
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{}}
      contentContainerStyle={styles.container}
    >
      <Image resizeMode='contain' source={AppLogo} style={{ marginTop: 70 }} />
      <Image resizeMode='contain' source={BlackLogo} style={styles.nameImage} />
      <Text style={styles.desc}>
        Aplikacija omogućava onima koji žele da podele hranu sa nekim, umesto da
        je bace, da to lakše urade. U par klikova, obrok koji želite da podelite
        sa nekim naći će se na Gugl mapi i postaće vidljiv svima kojima taj
        obrok treba.
      </Text>
      <View style={styles.topButton}>
        <Button
          onPress={handleShareMeal}
          backgroundColor={darkOrange}
          content='Podeli obrok'
        />
      </View>

      <View style={styles.bottomButton}>
        <Button
          onPress={handleTakeMeal}
          backgroundColor={lightOrange}
          content='Preuzmi obrok'
        />
      </View>
    </ScrollView>
  );
};

HomeScreen.propTypes = {
  navigation: navigationPropType
};

const mapState = () => ({});

const mapDispatch = (dispatch) => ({
  setIsMyMeals: (val) => dispatch(setMyMealsActiveAction(val))
});

export default connect(mapState, mapDispatch)(HomeScreen);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  nameImage: {
    width: '70%',
    marginVertical: 40
  },
  desc: {
    width: '70%',
    textAlign: 'center',
    lineHeight: 25,
    fontSize: 15,
    fontWeight: '400',
    fontFamily: 'Roboto',
    color: grey,
    marginBottom: 70
  },
  topButton: { width: '90%' },
  bottomButton: { marginBottom: 40, marginTop: 20, width: '90%' }
});
