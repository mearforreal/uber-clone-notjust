import React from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import styles from './styles';
import UberTypeRow from '../uberTypeRow/UberTypeRow';
import typesData from '../../assets/data/types';

const UberType = () => {
  const confirmUber = () => {
    console.warn('confirm');
  };
  return (
    <View>
      <FlatList
        data={typesData}
        renderItem={type => <UberTypeRow type={type.item} />}
        keyExtractor={type => type.id}
      />

      <TouchableOpacity
        onPress={confirmUber}
        style={{
          backgroundColor: 'black',
          padding: 10,
          margin: 10,
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
          }}>
          Confirm Uber
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default UberType;
