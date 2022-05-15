import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import BackButton from './BackButton';

const styles = StyleSheet.create({
  detailsContainer: {
    backgroundColor: '#D463F0',
    padding: 20,
    flex: 1,
  },
  flavorListContainer: {
    marginTop: 20,
  },
  iceMakerText: {
    fontFamily: 'Barlow-ExtraBold',
    fontSize: 20,
    lineHeight: 30,
    letterSpacing: 0.5,
    textTransform: 'uppercase',
    color: 'white',
  },
  locationFlavorText: {
    fontFamily: 'Barlow-Regular',
    fontSize: 15,
    lineHeight: 20,
    letterSpacing: 0.5,
    textTransform: 'capitalize',
    color: 'white',
  },
  imageRectangle: {
    backgroundColor: 'black',
    width: 48,
    height: 48,
    marginBottom: 20,
  },
  imageCircle: {
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: 'white',
    marginBottom: 20,
  },
});

const Details = ({route}: any) => {
  const {iceMaker, location, flavors} = route.params;
  return (
    <View style={styles.detailsContainer}>
      <BackButton />
      <Text style={styles.iceMakerText}>{iceMaker}</Text>
      <Text style={styles.locationFlavorText}>{location}</Text>
      <View style={styles.flavorListContainer}>
        {flavors
          .replace(/\s/g, '')
          .split(',')
          .map((flavor: string, index: number) => (
            <Text key={index} style={styles.locationFlavorText}>
              <Text>{'\u2022' + '    '}</Text>
              {flavor}
            </Text>
          ))}
      </View>
    </View>
  );
};

export default Details;
