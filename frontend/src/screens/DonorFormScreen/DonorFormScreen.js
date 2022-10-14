import React, { useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import CustomCheckBox from '../../components/CustomCheckBox/CustomCheckBox';
import CustomTextInput from '../../components/CustomTextInput/CustomTextInput';
import { lightOrange } from '../../constants/colors';

const DonorFormScreen = () => {
  const initialState = {
    mealName: '',
    additionalComment: '',
    adress: '',
    pickUpStartTime: '',
    pickUpEndTime: '',
    phone: '',
    onlyWithMessage: false,
    expirationDays: '',
    expirationHours: '',
  };
  const [newForm, setNewForm] = useState(initialState);

  const checkboxHandler = () => {
    setNewForm((prev) => ({
      ...prev,
      onlyWithMessage: !newForm.onlyWithMessage,
    }));
  };

  const onChange = ({ name, value }) => {
    setNewForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        flex: 1,
        backgroundColor: lightOrange,
        paddingHorizontal: 15,
        paddingVertical: 20,
      }}
    >
      <CustomTextInput
        label='Unestite naziv obroka'
        placeholder='Naziv obroka'
        value={newForm.mealName}
        onChange={onChange}
        name={'mealName'}
        containerStyle={{ marginBottom: 30 }}
      />
      <CustomTextInput
        label='Upisite dodatni komentar'
        placeholder='Opis'
        value={newForm.additionalComment}
        onChange={onChange}
        name={'additionalComment'}
        containerStyle={{ marginBottom: 30 }}
      />
      <CustomTextInput
        label='Adresa preuzimanja'
        placeholder='Adresa'
        value={newForm.adress}
        onChange={onChange}
        name={'adress'}
        containerStyle={{ marginBottom: 30 }}
      />
      <View
        style={{
          flexDirection: 'row',
          marginBottom: 30,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <CustomTextInput
          label='Vreme preuzimanja'
          placeholder='Od'
          value={newForm.pickUpStartTime}
          onChange={onChange}
          name={'pickUpStartTime'}
          containerStyle={{ width: '48%' }}
        />
        <CustomTextInput
          placeholder='Do'
          value={newForm.pickUpEndTime}
          onChange={onChange}
          name={'pickUpEndTime'}
          containerStyle={{ width: '48%', marginTop: 3 }}
        />
      </View>
      <CustomTextInput
        label='Telefon'
        placeholder='Telefon'
        value={newForm.phone}
        onChange={onChange}
        name={'phone'}
        containerStyle={{ marginBottom: 10 }}
      />
      <View
        style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 30 }}
      >
        <CustomCheckBox
          isActive={newForm.onlyWithMessage}
          handleCheckBox={checkboxHandler}
        />
        <Text style={{ padding: 5, color: 'white' }}>
          Kontaktirati iskljucivo preko poruka
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginBottom: 30,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <CustomTextInput
          label='Ispravnost obroka'
          placeholder='Od'
          value={newForm.expirationDays}
          onChange={onChange}
          name={'expirationDays'}
          containerStyle={{ width: '48%' }}
        />
        <CustomTextInput
          placeholder='Broj sati'
          value={newForm.expirationHours}
          onChange={onChange}
          name={'expirationHours'}
          containerStyle={{ width: '48%', marginTop: 3 }}
        />
      </View>
      <Pressable
        style={{
          backgroundColor: 'white',
          borderRadius: 20,
          paddingVertical: 10,
          marginTop: 20,
        }}
      >
        <Text
          style={{
            textAlign: 'center',
            textTransform: 'uppercase',
            color: lightOrange,
            fontWeight: 'bold',
          }}
        >
          podeli obrok
        </Text>
      </Pressable>
    </ScrollView>
  );
};

export default DonorFormScreen;
