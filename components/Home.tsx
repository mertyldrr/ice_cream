import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import Hero from './Hero';
import Button from './Button';
import Card from './Card';

const styles = StyleSheet.create({
  contentContainer: {
    padding: 20,
    backgroundColor: 'white',
  },
});

const Home = ({navigation}: any) => {
  const [iceCreamList, setIceCreamList] = useState<any>([]);
  const handleSetIceCreamList = (newIceCreamStore: any) => {
    setIceCreamList([...iceCreamList, newIceCreamStore]);
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <Hero />
        <View style={styles.contentContainer}>
          {iceCreamList &&
            iceCreamList.length !== 0 &&
            iceCreamList.map((iceCream: any, index: number) => (
              <Card
                key={index}
                iceMaker={iceCream.iceMaker}
                location={iceCream.location}
                flavors={iceCream.flavors}
              />
            ))}

          <Button
            handleOnPress={() =>
              navigation.navigate('AddLocation', {
                handleSetIceCreamList,
              })
            }
            bgColor="#49DCFF"
            text="Add Location"
            textColor="white"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
