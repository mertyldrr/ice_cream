import React, {useState} from 'react';
import {TextInput, StyleSheet, View} from 'react-native';

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 20,
  },
  textInput: {
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomColor: 'white',
    borderWidth: 1,
    fontFamily: 'Barlow-Regular',
    fontSize: 15,
    lineHeight: 20,
    letterSpacing: 0.5,
    color: 'white',
  },
});

const InputField = ({
  newIceCreamStore,
  setNewIceCreamStore,
  stateProp,
  placeholder,
}: any) => {
  const [isFocused, setIsFocused] = useState<boolean>();

  const onChangeHandler = (value: string, objectProp: string) => {
    let newStore = {...newIceCreamStore};
    newStore[objectProp] = value;
    console.log(newStore);
    setNewIceCreamStore(newStore);
  };
  return (
    <View style={styles.inputContainer}>
      <TextInput
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        autoCorrect={false}
        autoCapitalize="none"
        onChangeText={newText => onChangeHandler(newText, stateProp)}
        style={styles.textInput}
        placeholder={!isFocused ? placeholder : ''}
        placeholderTextColor="white"
      />
    </View>
  );
};

export default InputField;
