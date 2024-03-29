/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import styled from 'styled-components/native';
import { black, grey } from '../../constants/colors';
import { ZoomContent } from '../../constants/textStyles';
import ConfirmMealInfoModal from './ConfirmMealInfoModal';
import MapMarker from '../../images/mapPin.png';
import MealInfoModal from './MealInfoModal';
import { getAllMeals } from '../../redux/services/mealService';
import { connect } from 'react-redux';
import { setAllMealsAction } from '../../redux/actions/mealActions';
import { setSidebarPosition } from '../../redux/actions/sidebarMenuAction';
import { useHeaderHeight } from '@react-navigation/elements';
import { createReservationForMeal } from '../../redux/services/reservationsService';

const MapContainer = styled.View`
  height: 100%;
  width: 100%;
`;
const styles = StyleSheet.create({
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
});
const MapPin = styled.ImageBackground`
  width: 50px;
  height: 50px;
`;

const ZoomButton = styled.TouchableOpacity`
  height: 35px;
  width: 35px;
  position: absolute;
  right: 10px;
  ${({ bottomPosition }) => `bottom: ${bottomPosition}`};
  background-color: ${grey};
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

const NumberOfMeals = styled.Text`
  color: black;
  margin-top: -7px;
  margin-left: 30px;
`;

const MapScreen = ({ meals, setMeals, setSidebarPosition, deviceId }) => {
  const [currentRegion, setCurrentRegion] = useState({
    latitude: 45.25167,
    longitude: 19.83694,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  });
  const [showMealModal, setShowMealModal] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [activeMealState, setActiveMealState] = useState(null);
  const HEADER_HEIGHT = useHeaderHeight();
  const mealCountMap = {};

  useEffect(() => {
    getAllMeals()
      .then((response) => response.json())
      .then((res) => {
        setMeals(res);
      })
      .catch((error) => {
        console.log('FETCHING ALL MEAL ERROR', error);
      });
    setSidebarPosition(HEADER_HEIGHT.toFixed(2));
  }, []);

  const onReserveMeal = (reservedMeal) => {
    if (reservedMeal) {
      setActiveMealState(reservedMeal);
      const body = {
        reservedByDeviceId: deviceId,
        cancelled: false,
        mealId: reservedMeal.id
      };
      createReservationForMeal(body)
        .then(() => {
          getAllMeals()
            .then((response) => response.json())
            .then((res) => {
              setMeals(res);
              setShowMealModal(false);
              setShowConfirmationModal(true);
            });
        })
        .catch((error) => console.log('error: ', error));
    }
  };

  const onZoomIn = () => {
    setCurrentRegion({
      latitude: currentRegion.latitude,
      longitude: currentRegion.longitude,
      latitudeDelta: currentRegion.latitudeDelta / 2,
      longitudeDelta: currentRegion.longitudeDelta / 2
    });
  };
  const onZoomOut = () => {
    setCurrentRegion({
      latitude: currentRegion.latitude,
      longitude: currentRegion.longitude,
      latitudeDelta: currentRegion.latitudeDelta * 2,
      longitudeDelta: currentRegion.longitudeDelta * 2
    });
  };

  const onPressMarker = (meal) => {
    const mealsAtLocation = meals.filter(
      (m) => m.lat === meal.lat && m.long === meal.long
    );
    setShowMealModal(true);
    setActiveMealState(mealsAtLocation);
  };

  return (
    <MapContainer>
      <MapView
        region={currentRegion}
        onRegionChangeComplete={(region) => setCurrentRegion(region)}
        style={styles.map}
        initialRegion={{
          latitude: 44.8125,
          longitude: 20.4612,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
      >
        {meals?.map((meal, index) => {
          const locationKey = `${meal.lat}-${meal.long}`;
          mealCountMap[locationKey] = (mealCountMap[locationKey] || 0) + 1;

          return (
            <Marker
              onPress={() => onPressMarker(meal)}
              key={index}
              coordinate={{ latitude: +meal.lat, longitude: +meal.long }}
            >
              <MapPin source={MapMarker} resizeMode='contain'>
                {mealCountMap[locationKey] > 1 && (
                  <NumberOfMeals>{mealCountMap[locationKey]}x</NumberOfMeals>
                )}
              </MapPin>
            </Marker>
          );
        })}
      </MapView>
      <ZoomButton bottomPosition={'100px'} onPress={onZoomIn}>
        <ZoomContent>+</ZoomContent>
      </ZoomButton>
      <ZoomButton bottomPosition={'60px'} onPress={onZoomOut}>
        <ZoomContent>-</ZoomContent>
      </ZoomButton>
      <MealInfoModal
        isVisible={showMealModal}
        closeModal={() => setShowMealModal(false)}
        onReserveMeal={onReserveMeal}
        meals={activeMealState}
      />

      <ConfirmMealInfoModal
        activeMealState={activeMealState}
        isVisible={showConfirmationModal}
        closeModal={() => setShowConfirmationModal(false)}
      />
    </MapContainer>
  );
};

const mapState = ({ allMeals, device }) => ({
  meals: allMeals,
  deviceId: device.id
});

const mapDispatch = (dispatch) => ({
  setMeals: (meals) => dispatch(setAllMealsAction(meals)),
  setSidebarPosition: (top) => dispatch(setSidebarPosition(top))
});

export default connect(mapState, mapDispatch)(MapScreen);
