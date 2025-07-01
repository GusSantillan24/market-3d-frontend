import MasonryView from '@/components/MasonryView';
import ModelCard from '@/components/ModelCard';
import { mockModelsMe } from '@/constants/mockModelsMe';
import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// Función para altura aleatoria dentro de un rango
const getRandomHeight = () => {
  const min = 200;
  const max = 350;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const Models = () => {
  const insets = useSafeAreaInsets(); // márgenes seguros del dispositivo
  const router = useRouter();

  return (
    <View style={[styles.container, { paddingBottom: insets.bottom }]}>
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
              owner={item.owner}           
              downloads={item.downloads}
              likes={item.likes}
              cardHeight={randomHeight}
              style={style}
              onPress={() => {
                console.log("Presionaste el modelo con ID:", item.id);
                router.push(`/post/${item.id}`);
              }}
            />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
});

export default Models;


