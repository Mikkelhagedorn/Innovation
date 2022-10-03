import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackNavigator from './components/StackNavigator'
import weatherForecast from './components/weatherForecast';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Weather information" component={weatherForecast} />
        <Tab.Screen name="Navigation page" component={StackNavigator} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}