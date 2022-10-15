import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import styled from 'styled-components/native';
import { grey } from '../../constants/colors';
import { ZoomContent } from '../../constants/textStyles';
import locationsMock from './MapPinsMock';
import MapMarker from '../../images/mapPin.png';
import MealInfoModal from './MealInfoModal';

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
    bottom: 0,
  },
});
const MapPin = styled.Image`
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

const MapScreen = () => {
  const [currentRegion, setCurrentRegion] = useState({
    latitude: 45.25167,
    longitude: 19.83694,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [showMealModal, setShowMealModal] = useState(false);

  const onPressMarker = () => {
    setShowMealModal(!showMealModal);
  };
  const onZoomIn = () => {
    setCurrentRegion({
      latitude: currentRegion.latitude,
      longitude: currentRegion.longitude,
      latitudeDelta: currentRegion.latitudeDelta / 2,
      longitudeDelta: currentRegion.longitudeDelta / 2,
    });
  };
  const onZoomOut = () => {
    setCurrentRegion({
      latitude: currentRegion.latitude,
      longitude: currentRegion.longitude,
      latitudeDelta: currentRegion.latitudeDelta * 2,
      longitudeDelta: currentRegion.longitudeDelta * 2,
    });
  };
  return (
    <MapContainer>
      <MapView
        region={currentRegion}
        onRegionChange={(region) => setCurrentRegion(region)}
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {locationsMock.map((marker, index) => (
          <Marker key={index} coordinate={marker}>
            <TouchableOpacity onPress={onPressMarker}>
              <MapPin source={MapMarker} resizeMode='contain' />
            </TouchableOpacity>
          </Marker>
        ))}
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
      />
    </MapContainer>
  );
};

export default MapScreen;
