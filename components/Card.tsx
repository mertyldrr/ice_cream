import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';

interface CardProps {
  iceMaker: string;
  location: string;
  flavors: string;
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#D463F0',
    padding: 20,
    marginBottom: 10,
    borderRadius: 20,
  },
  iceMakerText: {
    fontFamily: 'Barlow-ExtraBold',
    fontSize: 20,
    lineHeight: 30,
    letterSpacing: 0.5,
    textTransform: 'uppercase',
    color: 'white',
  },
  locationText: {
    fontFamily: 'Barlow-Regular',
    fontSize: 15,
    lineHeight: 20,
    letterSpacing: 0.5,
    textTransform: 'capitalize',
    color: 'white',
  },
});

const Card = ({iceMaker, location, flavors}: CardProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  return (
    <View style={styles.cardContainer}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Details', {
            iceMaker,
            location,
            flavors,
          })
        }>
        <Text style={styles.iceMakerText}>{iceMaker}</Text>
        <Text style={styles.locationText}>{location}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Card;
