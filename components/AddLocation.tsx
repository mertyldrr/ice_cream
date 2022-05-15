import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import InputField from './InputField';
import BackButton from './BackButton';
import Button from './Button';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D463F0',
    padding: 20,
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
});

const AddLocation = ({route, navigation}: any) => {
  const [newIceCreamStore, setNewIceCreamStore] = useState({
    iceMaker: null,
    location: null,
    flavors: null,
  });
  const {handleSetIceCreamList} = route.params;
  const handleOnSave = () => {
    handleSetIceCreamList(newIceCreamStore);
    navigation.navigate('Home');
  };
  return (
    <View style={styles.container}>
      <BackButton />
      <InputField
        placeholder={'Name'}
        newIceCreamStore={newIceCreamStore}
        setNewIceCreamStore={setNewIceCreamStore}
        stateProp={'iceMaker'}
      />
      <InputField
        placeholder={'Location'}
        newIceCreamStore={newIceCreamStore}
        setNewIceCreamStore={setNewIceCreamStore}
        stateProp={'location'}
      />
      <InputField
        placeholder={'Flavor (comma seperated)'}
        newIceCreamStore={newIceCreamStore}
        setNewIceCreamStore={setNewIceCreamStore}
        stateProp={'flavors'}
      />
      <View style={styles.buttonContainer}>
        <Button
          handleOnPress={handleOnSave}
          bgColor="white"
          text="Save"
          textColor="#D463F0"
        />
      </View>
    </View>
  );
};

export default AddLocation;
