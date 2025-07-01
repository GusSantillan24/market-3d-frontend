import Colores from '@/constants/Colores';
import { useRouter } from 'expo-router';
import React from 'react';
import {
  FlatList,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

const provincias = [
  'Buenos Aires',
  'Córdoba',
  'Santa Fe',
  'Mendoza',
  'Tucumán',
  'Salta',
  'Entre Ríos',
  'Neuquén',
  'Chubut',
  'San Luis',
  'La Rioja',
  'Jujuy',
];

const ProvinciasScreen = () => {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const handleSelect = (provincia: string) => {
    // guardar provincia seleccionada
    router.back();
  };

  const renderItem = ({ item }: { item: string }) => (
    <TouchableOpacity
      style={styles.option}
      onPress={() => handleSelect(item)}
      activeOpacity={0.8}
    >
      <Text style={styles.optionText}>{item}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <FlatList
        data={provincias}
        keyExtractor={(item) => item}
        renderItem={renderItem}
        contentContainerStyle={[
          styles.contentContainer,
          {
            paddingBottom: insets.bottom + (Platform.OS === 'android' ? 32 : 0),
          },
        ]}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default ProvinciasScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colores.background,
  },
  contentContainer: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  option: {
    backgroundColor: Colores.backgroundAccent,
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 20,
    marginBottom: 12,
    // Sombra iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    // Sombra Android
    elevation: 3,
  },
  optionText: {
    fontSize: 16,
    color: Colores.textPrimary,
    fontWeight: '500',
  },
});



