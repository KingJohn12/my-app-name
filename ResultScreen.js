import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

export default function ResultScreen({ route }) {
  const { photo } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Captured Data</Text>

      <Image
        source={{ uri: photo.uri }}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, alignItems: 'center' },
  title: { fontSize: 24, marginBottom: 20 },
  image: { width: 300, height: 400, borderRadius: 10 },
});
