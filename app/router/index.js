import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// Routes
import Routes from './routes';
// Screens
import {LoginScreen, MoviesScreen} from './../screens';

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={Routes.LOGIN} component={LoginScreen} />
        <Stack.Screen name={Routes.MOVIES_SCREEN} component={MoviesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export {RootStack};
