import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import cardData from '../data/bt01.json';

export default function BinderScreen({ navigation }) {
  const [ownedCards, setOwnedCards] = useState([]);

  const toggleOwned = (code) => {
    setOwnedCards((prev) =>
      prev.includes(code) ? prev.filter((c) => c !== code) : [...prev, code]
    );
  };

  const renderItem = ({ item }) => {
    const owned = ownedCards.includes(item.code);
    return (
      <TouchableOpacity
        style={[styles.cardContainer, owned && styles.owned]}
        onPress={() => toggleOwned(item.code)}
        onLongPress={() => navigation.navigate('Card Details', { card: item })}
      >
        <Image
          source={{ uri: item.image }}
          style={styles.cardImage}
        />
      </TouchableOpacity>
    );
  };

  const completion = Math.round((ownedCards.length / cardData.length) * 100);

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <Text style={{ fontSize: 18, marginBottom: 10 }}>BT-01 Progress: {completion}%</Text>
      <FlatList
        data={cardData}
        renderItem={renderItem}
        keyExtractor={(item) => item.code}
        numColumns={3}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    margin: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 4,
  },
  owned: {
    borderColor: 'limegreen',
    borderWidth: 3,
  },
  cardImage: {
    width: 100,
    height: 140,
    resizeMode: 'cover',
  },
});