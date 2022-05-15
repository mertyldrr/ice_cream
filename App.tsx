import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './components/Home';
import Details from './components/Details';
import AddLocation from './components/AddLocation';

const Stack = createNativeStackNavigator();

const App = () => {
  const navTheme: any = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'transparent',
    },
  };
  return (
    <NavigationContainer theme={navTheme}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="AddLocation" component={AddLocation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
