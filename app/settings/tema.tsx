import Colores from '@/constants/Colores';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';

const TemaScreen = () => {
  const [tema, setTema] = useState<'claro' | 'oscuro'>('oscuro'); // valor por defecto

  const seleccionarTema = (nuevoTema: 'claro' | 'oscuro') => {
    setTema(nuevoTema);
  };

  const renderOpcion = (label: string, value: 'claro' | 'oscuro') => (
    <TouchableOpacity
      key={value}
      style={styles.option}
      onPress={() => seleccionarTema(value)}
      activeOpacity={0.8}
    >
      <Text style={styles.optionText}>{label}</Text>
      {tema === value && (
        <Ionicons name="checkmark" size={20} color={Colores.accentBlue} />
      )}
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.card}>
          {renderOpcion('Tema claro', 'claro')}
          {renderOpcion('Tema oscuro', 'oscuro')}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TemaScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colores.background,
  },
  container: {
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 32,
  },
  card: {
    backgroundColor: Colores.backgroundAccent,
    borderRadius: 12,
    padding: 16,
    gap: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 4,
  },
  option: {
    backgroundColor: Colores.backgroundSecondary,
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  optionText: {
    fontSize: 16,
    color: Colores.textPrimary,
    fontWeight: '500',
  },
});

