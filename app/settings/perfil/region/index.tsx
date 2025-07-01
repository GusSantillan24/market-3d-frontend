// app/settings/perfil/region.tsx
import Colores from '@/constants/Colores';
import { useRouter } from 'expo-router';
import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity } from 'react-native';

const countries = [
  'Argentina',
  'Brasil',
  'Chile',
  'Uruguay',
  'Paraguay',
  'Estados Unidos',
  'España',
  'Otro',
  'otro',
];

const RegionScreen = () => {
  const router = useRouter();

  const handleSelect = (country: string) => {
    if (country === 'Argentina') {
      router.replace('/settings/perfil/region/provincias');
    } else {
      router.back();
    }
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
        contentContainerStyle={styles.list}
        data={countries}
        keyExtractor={(item) => item}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default RegionScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colores.background,
  },
  list: {
    padding: 16,
    gap: 12,
  },
  option: {
    backgroundColor: Colores.backgroundAccent,
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  optionText: {
    fontSize: 16,
    color: Colores.textPrimary,
    fontWeight: '500',
  },
});

