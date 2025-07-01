// app/settings/seguridad/index.tsx
import Colores from '@/constants/Colores';
import { useRouter } from 'expo-router';
import React from 'react';
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const SeguridadScreen = () => {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const opciones = [
    { label: 'Restablecer contraseña', path: '/settings/seguridad/restablecer' },
    { label: 'Correo electrónico', path: '/settings/seguridad/email' },
    { label: 'Enlazar otra cuenta', path: '/settings/seguridad/enlazar-cuenta' },
    { label: 'Eliminar cuenta', path: '/settings/seguridad/eliminar-cuenta' },
  ];

  const renderSection = (items: { label: string; path: string }[]) => (
    <View style={styles.block}>
      {items.map(({ label, path }) => (
        <TouchableOpacity
          key={label}
          style={styles.option}
          onPress={() => router.push(path)}
          activeOpacity={0.8}
        >
          <Text style={styles.optionText}>{label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={[
          styles.scrollContainer,
          {
            paddingBottom: insets.bottom + (Platform.OS === 'android' ? 32 : 0),
          },
        ]}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        {renderSection(opciones)}
      </ScrollView>
    </SafeAreaView>
  );
};

export default SeguridadScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colores.background,
  },
  scrollContainer: {
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  block: {
    marginVertical: 12,
    backgroundColor: Colores.backgroundAccent,
    borderRadius: 12,
    paddingVertical: 1,
    paddingHorizontal: 16,
    // Sombra para iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    // Sombra para Android
    elevation: 5,
  },
  option: {
    paddingVertical: 16,
  },
  optionText: {
    fontSize: 16,
    color: Colores.textPrimary,
    fontWeight: '500',
  },
});



