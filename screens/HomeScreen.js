import React from 'react';
import { View, Text, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 22, marginBottom: 20 }}>Welcome to DigiBinder</Text>
      <Button title="View Binder" onPress={() => navigation.navigate('Binder')} />
      <Button title="Scan Card" onPress={() => navigation.navigate('Scan')} />
    </View>
  );
}