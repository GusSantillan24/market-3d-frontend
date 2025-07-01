import MasonryView from '@/components/MasonryView';
import ModelCard from '@/components/ModelCard';
import { mockModelsMe } from '@/constants/mockModelsMe';
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// Función para altura aleatoria
const getRandomHeight = () => {
  const min = 200;
  const max = 350;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export default function MisModelos() {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <MasonryView
        data={mockModelsMe}
        numColumns={2}
        renderItem={({ item, style }) => {
          const randomHeight = getRandomHeight();

          return (
            <ModelCard
              id={item.id.toString()}
              image={item.image}
              title={item.title}
              owner={item.owner}               // Pasar owner
              downloads={item.downloads}
              likes={item.likes}
              cardHeight={randomHeight}
              style={style}
              onPress={() => {
                router.push(`/post/${item.id}`);
              }}
            />
          );
        }}
      />

      <TouchableOpacity
        style={[styles.fab, { bottom: insets.bottom + 20 }]}
        onPress={() => router.push('/modelos-stack/subir')}
      >
        <Feather name="plus" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  fab: {
    position: 'absolute',
    right: 20,
    backgroundColor: '#f04',
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10,
    zIndex: 100,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
});



