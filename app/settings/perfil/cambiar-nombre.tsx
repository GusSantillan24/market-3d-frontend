import Colores from '@/constants/Colores';
import React, { useState } from 'react';
import { Alert, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';

const CambiarNombreScreen = () => {
  const [nombre, setNombre] = useState('');

  const handleGuardar = () => {
    if (nombre.trim().length === 0) {
      Alert.alert('Error', 'El nombre no puede estar vacío.');
      return;
    }
    Alert.alert('Nombre cambiado', `Nombre cambiado a ${nombre}`);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
        <Text style={styles.label}>Nuevo nombre:</Text>
        <TextInput
          placeholder="Ingresá tu nuevo nombre"
          placeholderTextColor={Colores.placeholder}
          value={nombre}
          onChangeText={setNombre}
          style={styles.input}
          autoCapitalize="words"
          autoCorrect={false}
          returnKeyType="done"
        />

        <TouchableOpacity style={styles.button} onPress={handleGuardar} activeOpacity={0.8}>
          <Text style={styles.buttonText}>Guardar</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CambiarNombreScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colores.background,
  },
  container: {
    padding: 24,
  },
  label: {
    fontSize: 18,
    color: Colores.textPrimary,
    fontWeight: '600',
    marginBottom: 12,
  },
  input: {
    backgroundColor: Colores.textSecondary,
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    color: Colores.background,
    marginBottom: 24,
  },
  button: {
    backgroundColor: Colores.textPrimary,
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
  },
  buttonText: {
    color: Colores.backgroundSecondary,
    fontSize: 16,
    fontWeight: '600',
  },
});

