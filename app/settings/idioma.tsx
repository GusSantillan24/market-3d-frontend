import Colores from '@/constants/Colores';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const idiomasDisponibles = [
  { codigo: 'es', nombre: 'Español' },
  { codigo: 'en', nombre: 'English' },
  { codigo: 'pt', nombre: 'Português' },
  { codigo: 'fr', nombre: 'Français' },
  { codigo: 'de', nombre: 'Deutsch' },
  { codigo: 'zh', nombre: '中文 (Chino)' },
];

const IdiomaScreen = () => {
  const [idiomaSeleccionado, setIdiomaSeleccionado] = useState<string>('es');

  const seleccionarIdioma = (codigo: string) => {
    setIdiomaSeleccionado(codigo);
    // Guardar selección en estado global o almacenamiento local
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.card}>
          {idiomasDisponibles.map((idioma) => (
            <TouchableOpacity
              key={idioma.codigo}
              style={styles.item}
              onPress={() => seleccionarIdioma(idioma.codigo)}
              activeOpacity={0.8}
            >
              <Text style={styles.itemText}>{idioma.nombre}</Text>
              {idiomaSeleccionado === idioma.codigo && (
                <Ionicons
                  name="checkmark"
                  size={20}
                  color={Colores.accentBlue}
                />
              )}
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default IdiomaScreen;


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
    // sombras iOS/Android
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 4,
  },
  item: {
    backgroundColor: Colores.backgroundSecondary,
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemText: {
    fontSize: 16,
    color: Colores.textPrimary,
    fontWeight: '500',
  },
});

