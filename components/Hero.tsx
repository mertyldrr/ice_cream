import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  heroContainer: {
    height: 240,
  },
  heroImage: {
    height: 240,
  },
  heroTextContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  heroText: {
    fontFamily: 'Barlow-ExtraBold',
    textTransform: 'uppercase',
    fontSize: 25,
    letterSpacing: 0.5,
    paddingHorizontal: 20,
    textAlign: 'center',
    color: 'white',
  },
});

const Hero = () => {
  return (
    <View style={styles.heroContainer}>
      <ImageBackground
        source={require('../assets/images/hero_image.png')}
        style={styles.heroImage}>
        <View style={styles.heroTextContainer}>
          <Text style={styles.heroText}>Build up your icecream universe</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Hero;
