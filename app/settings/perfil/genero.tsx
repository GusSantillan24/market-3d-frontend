// app/settings/perfil/genero.tsx
import Colores from '@/constants/Colores';
import { useRouter } from 'expo-router';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const GeneroScreen = () => {
  const router = useRouter();

  const handleSelect = (genero: string) => {
    // Guardar género en backend o store
    console.log('Género seleccionado:', genero);
    router.back();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Selecciona tu género</Text>

        {/* Opciones de género en lista simple */}
        {['Masculino', 'Femenino', 'Prefiero no decirlo'].map((genero) => (
          <TouchableOpacity
            key={genero}
            style={styles.option}
            onPress={() => handleSelect(genero)}
            activeOpacity={0.8}
          >
            <Text style={styles.optionText}>{genero}</Text>
          </TouchableOpacity>
        ))}

        {/* Botón de cancelar */}
        <TouchableOpacity style={styles.cancelButton} onPress={() => router.back()}>
          <Text style={styles.cancelText}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default GeneroScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colores.background,
  },
  container: {
    flex: 1,
    padding: 24,
    paddingTop: 40,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    color: Colores.textPrimary,
    marginBottom: 32,
    textAlign: 'left',
  },
  option: {
    backgroundColor: Colores.backgroundSecondary,
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  optionText: {
    fontSize: 16,
    color: Colores.textPrimary,
    fontWeight: '500',
  },
  cancelButton: {
    marginTop: 32,
    alignSelf: 'center',
  },
  cancelText: {
    fontSize: 16,
    color: Colores.textPrimary,
    opacity: 0.6,
  },
});


