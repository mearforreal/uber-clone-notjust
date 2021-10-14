import React from 'react';
import {View, Text, Image} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {GOOGLE_API_KEY} from '@env';
const RouteMap = ({origin, destination}) => {
  const originLoc = {
    latitude: origin.data.geometry.location.lat,
    longitude: origin.data.geometry.location.lng,
  };

  const destinationLoc = {
    latitude: destination.data.geometry.location.lat,
    longitude: destination.data.geometry.location.lng,
  };

  return (
    <MapView
      style={{height: '100%', width: '100%'}}
      provider={PROVIDER_GOOGLE}
      initialRegion={{
        latitude: originLoc.latitude,
        longitude: originLoc.longitude,
        latitudeDelta: 0.0222,
        longitudeDelta: 0.0121,
      }}>
      <MapViewDirections
        origin={originLoc}
        destination={destinationLoc}
        strokeWidth={3}
        strokeColor="black"
        apikey={GOOGLE_API_KEY}
      />
      <Marker coordinate={originLoc} title={'origin'} />
      <Marker coordinate={destinationLoc} title={'destination'} />
    </MapView>
  );
};

export default RouteMap;
