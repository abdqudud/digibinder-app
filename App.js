import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import BinderScreen from './screens/BinderScreen';
import ScanScreen from './screens/ScanScreen';
import CardDetailScreen from './screens/CardDetailScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Binder" component={BinderScreen} />
        <Stack.Screen name="Scan" component={ScanScreen} />
        <Stack.Screen name="Card Details" component={CardDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}