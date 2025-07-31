import React from 'react';
import { View, Text, Image } from 'react-native';

export default function CardDetailScreen({ route }) {
  const { card } = route.params;
  return (
    <View style={{ padding: 20 }}>
      <Image source={{ uri: card.image }} style={{ width: 200, height: 280 }} />
      <Text style={{ fontSize: 18 }}>{card.name}</Text>
      <Text>Code: {card.code}</Text>
      <Text>Rarity: {card.rarity}</Text>
      <Text>Set: {card.set}</Text>
    </View>
  );
}