import React from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

import cars from '../../assets/data/cars';

const HomeMap = type => {
  function getImageName(type) {
    if (type === 'UberX') {
      return require('../../assets/images/top-UberX.png');
    } else if (type === 'UberXL') {
      return require('../../assets/images/top-UberXL.png');
    } else if (type === 'Comfort') {
      return require('../../assets/images/top-Comfort.png');
    }
  }

  return (
    <MapView
      showsUserLocation={true}
      style={{height: '100%', width: '100%'}}
      provider={PROVIDER_GOOGLE}
      initialRegion={{
        latitude: 43.25932559999999,
        longitude: 76.95648659999999,
        latitudeDelta: 0.0222,
        longitudeDelta: 0.0121,
      }}>
      {cars.map(car => (
        <Marker
          key={car.id}
          coordinate={{latitude: car.latitude, longitude: car.longitude}}>
          <Image
            style={{
              width: 70,
              height: 70,
              resizeMode: 'contain',
              transform: [
                {
                  rotate: `${car.heading}deg`,
                },
              ],
            }}
            source={getImageName(car.type)}
          />
        </Marker>
      ))}
    </MapView>
  );
};

export default HomeMap;
