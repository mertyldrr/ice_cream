import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  buttonContainer: {
    height: 48,
    marginBottom: 10,
    borderRadius: 20,
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: 'Barlow-ExtraBold',
    fontSize: 15,
    lineHeight: 20,
    letterSpacing: 0.5,
    textTransform: 'uppercase',
    paddingHorizontal: 20,
    color: 'white',
    textAlign: 'center',
  },
});

interface ButtonProps {
  text: string;
  bgColor: string;
  textColor: string;
  handleOnPress: any;
}

const Button = ({handleOnPress, text, bgColor, textColor}: ButtonProps) => {
  return (
    <View style={[styles.buttonContainer, {backgroundColor: bgColor}]}>
      <TouchableOpacity onPress={() => handleOnPress()}>
        <Text style={[styles.buttonText, {color: textColor}]}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
