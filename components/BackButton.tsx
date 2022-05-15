import React from 'react';
import {StyleSheet, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const styles = StyleSheet.create({
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

const BackButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.imageCircle}
      onPress={() => navigation.goBack()}>
      <Image source={require('../assets/images/arrow_left.png')} />
    </TouchableOpacity>
  );
};

export default BackButton;
