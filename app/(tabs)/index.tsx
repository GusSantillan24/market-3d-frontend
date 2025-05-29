import React from 'react';
import { StyleSheet, Text } from 'react-native';
import MasonryList from 'react-native-masonry-list';
import { SafeAreaView } from 'react-native-safe-area-context';

const mockData = [
  {
    uri: 'https://source.unsplash.com/random/300x300?3d-print',
    title: 'Figura de Naruto',
  },
  {
    uri: 'https://source.unsplash.com/random/300x400?3d-model',
    title: 'Figura de Goku',
  },
  {
    uri: '',
    title: 'Figura de Algo',
  },
  {
    uri: '',
    title: 'Figura de Esta',
  },
]

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Explorar modelos</Text>
      <MasonryList
        images={mockData}
        imageContainerStyle={styles.imageContainer}
        spacing={4}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 4,
    backgroundColor: '#6a5acd',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 12,
  },
  imageContainer: {
    borderRadius: 12,
    overflow: 'hidden',
  },
});
