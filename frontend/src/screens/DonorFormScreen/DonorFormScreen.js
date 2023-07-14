import React, { useEffect, useMemo, useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native';
import { debounce, truncate } from 'lodash';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { string, func } from 'prop-types';
import CustomCheckBox from '../../components/CustomCheckBox/CustomCheckBox';
import CustomTextInput from '../../components/CustomTextInput/CustomTextInput';
import PrimaryButton from '../../components/PrimaryButton';
import { lightOrange, white, black } from '../../constants/colors';
import { createMeal } from '../../redux/services/mealService';
import { connect } from 'react-redux';
import moment from 'moment';
import { setSidebarPosition } from '../../redux/actions/sidebarMenuAction';
import { useHeaderHeight } from '@react-navigation/elements';
import * as RootNavigation from '../../navigation/RootNavigation';
import { screens } from '../../constants/screens';
import { getAddresses } from '../../redux/services/getAddresses';

const DonorFormScreen = ({ deviceId, setSidebarPosition }) => {
  const initialState = {
    mealName: '',
    additionalComment: '',
    address: '',
    pickUpStartTime: '',
    pickUpEndTime: '',
    phone: '',
    expirationDays: '',
    expirationHours: '',
    lat: 0,
    long: 0
  };

  const [newForm, setNewForm] = useState(initialState);
  const [onlyWithMessage, setOnlyWithMessage] = useState(false);
  const [addresses, setAddresses] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const HEADER_HEIGHT = useHeaderHeight();
  useEffect(() => {
    setSidebarPosition(HEADER_HEIGHT.toFixed(2));
  }, []);

  const debouncedGetAddresses = useMemo(
    () =>
      debounce((value) => {
        getAddresses(value)
          .then((response) => response.json())
          .then((res) => {
            setAddresses(res);
          })
          .catch((error) => {
            console.log('FETCHING ADDRESSES ERROR', error);
          });
      }, 1000),
    []
  );

  const checkboxHandler = () => {
    setOnlyWithMessage((prev) => !prev);
  };

  const onChange = ({ name, value }) => {
    setNewForm((prev) => ({ ...prev, [name]: value }));
    if (name === 'address') {
      if (value.length > 5) {
        setShowSuggestions(true);
        debouncedGetAddresses(value);
      } else {
        setShowSuggestions(false);
      }
    }
  };

  const onPressAddress = (address) => {
    setNewForm((prevForm) => ({
      ...prevForm,
      lat: address.lat.toString().slice(0, 10),
      long: address.lon.toString().slice(0, 10),
      address: address.display_name
    }));
    setShowSuggestions(false);
  };

  const handleSubmit = () => {
    let flag = false;
    Object.values(newForm).map((item) => {
      if (item === '') {
        flag = true;
      }
    });
    if (flag) {
      Alert.alert('Sva polja moraju biti popunjena.');
      return;
    }

    const payload = {
      createdByDeviceId: deviceId,
      name: newForm.mealName,
      description: newForm.additionalComment,
      address: newForm.address,
      phone: newForm.phone,
      smsOnly: onlyWithMessage,
      daysToExpiry: +newForm.expirationDays,
      hoursToExpiry: +newForm.expirationHours,
      startPickupTime: moment()
        .set('hour', newForm.pickUpStartTime)
        .set('minute', 0)
        .format(),
      endPickupTime: moment()
        .set('hour', newForm.pickUpEndTime)
        .set('minute', 0)
        .format(),
      lat: Number(newForm.lat),
      long: Number(newForm.long)
    };
    createMeal(payload)
      .then(() => {
        RootNavigation.navigate(screens.createdMeal);
      })
      .catch((error) => console.log('error: ', error));
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      nestedScrollEnabled={true}
      style={styles.screenContainer}
    >
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <CustomTextInput
          label='Unestite naziv obroka'
          placeholder='Naziv obroka'
          value={newForm.mealName}
          onChange={onChange}
          name={'mealName'}
          containerStyle={styles.inputContainer}
        />
        <CustomTextInput
          label='Upišite dodatni komentar'
          placeholder='Opis'
          value={newForm.additionalComment}
          onChange={onChange}
          name={'additionalComment'}
          containerStyle={styles.inputContainer}
        />
        <CustomTextInput
          label='Adresa preuzimanja'
          placeholder='Adresa'
          value={truncate(newForm.address, (options = { length: 40 }))}
          onChange={onChange}
          name={'address'}
          containerStyle={styles.inputContainer}
        />
        {showSuggestions && (
          <ScrollView
            nestedScrollEnabled={true}
            style={styles.suggestedAddressesContainer}
          >
            {addresses.map((address) => {
              return (
                <Text
                  onPress={() => onPressAddress(address)}
                  key={address.place_id}
                  style={styles.suggestedAddress}
                >
                  {address.display_name}
                </Text>
              );
            })}
          </ScrollView>
        )}
        <View style={styles.twoInputsRow}>
          <CustomTextInput
            label='Vreme preuzimanja'
            placeholder='Od'
            value={newForm.pickUpStartTime}
            onChange={onChange}
            name={'pickUpStartTime'}
            containerStyle={styles.oneInputInRow}
            isNumeric
          />
          <CustomTextInput
            placeholder='Do'
            value={newForm.pickUpEndTime}
            onChange={onChange}
            name={'pickUpEndTime'}
            containerStyle={styles.oneInputInRow}
            required={false}
            isNumeric
          />
        </View>
        <CustomTextInput
          label='Telefon'
          placeholder='Telefon'
          value={newForm.phone}
          onChange={onChange}
          name={'phone'}
          containerStyle={styles.phoneInput}
          isNumeric
        />
        <View style={styles.checkBoxAndMess}>
          <CustomCheckBox
            isActive={onlyWithMessage}
            handleCheckBox={checkboxHandler}
          />
          <Text style={styles.checkBoxMess}>
            Kontaktirati isključivo preko poruka
          </Text>
        </View>
        <View style={styles.twoInputsRow}>
          <CustomTextInput
            label='Ispravnost obroka'
            placeholder='Broj dana'
            value={newForm.expirationDays}
            onChange={onChange}
            name={'expirationDays'}
            containerStyle={styles.oneInputInRow}
            isNumeric
          />
          <CustomTextInput
            placeholder='Broj sati'
            value={newForm.expirationHours}
            onChange={onChange}
            name={'expirationHours'}
            containerStyle={styles.oneInputInRow}
            required={false}
            isNumeric
          />
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton
            onPress={handleSubmit}
            disabled={false}
            backgroundColor={white}
            content='Podeli obrok'
          />
        </View>
      </KeyboardAwareScrollView>
    </ScrollView>
  );
};

DonorFormScreen.propTypes = {
  deviceId: string,
  setSidebarPosition: func
};

const mapState = ({ device }) => ({
  deviceId: device.id
});

const mapDispatch = (dispatch) => ({
  setSidebarPosition: (top) => dispatch(setSidebarPosition(top))
});
export default connect(mapState, mapDispatch)(DonorFormScreen);

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: lightOrange,
    paddingHorizontal: 15,
    paddingVertical: 20
  },
  inputContainer: {
    marginBottom: 30
  },
  suggestedAddress: {
    backgroundColor: white,
    color: black,
    borderBottomWidth: 0.5,
    borderBottomColor: black,
    padding: 5
  },
  suggestedAddressesContainer: {
    width: '100%',
    maxHeight: 300,
    marginTop: -20,
    marginBottom: 20,
    borderRadius: 20
  },
  twoInputsRow: {
    flexDirection: 'row',
    marginBottom: 30,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  oneInputInRow: {
    width: '48%'
  },
  phoneInput: {
    marginBottom: 10
  },
  checkBoxAndMess: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30
  },
  checkBoxMess: {
    padding: 5,
    color: white
  },
  buttonContainer: {
    marginBottom: 40
  }
});
