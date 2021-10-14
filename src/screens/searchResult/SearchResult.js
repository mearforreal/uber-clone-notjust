import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import HomeMap from '../../components/homeMap/HomeMap';
import UberType from '../../components/uberTypes/UberType';
import RouteMap from '../../components/routeMap/RouteMap';
import {useNavigation, useRoute} from '@react-navigation/core';

const SearchResult = props => {
  const navigation = useNavigation();
  const route = useRoute();
  const {origin, destination} = route.params;
  console.log(origin);
  console.log(destination);

  return (
    <View style={{display: 'flex', justifyContent: 'space-between'}}>
      <View style={{height: Dimensions.get('window').height - 400}}>
        <RouteMap origin={origin} destination={destination} />
      </View>

      <View>
        <UberType />
      </View>
    </View>
  );
};

export default SearchResult;
