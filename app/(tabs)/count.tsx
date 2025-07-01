import { router } from 'expo-router';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import UserProfileBlock from '@/components/ui/BloquePerfilUsuario';
import UserFeatureBlock from '@/components/ui/BloquePerfilUsuario/UserFeaturesBlock';
import HeaderButtons from '@/components/ui/BottomHeader';
import Colores from '@/constants/Colores';

const CuentaScreen = () => {
  const handleNavigate = (path: string) => {
    router.push(path);
  };

  const renderSection = (items: { label: string; path: string }[]) => (
    <View style={styles.block}>
      {items.map(({ label, path }) => (
        <TouchableOpacity
          key={label}
          style={styles.option}
          onPress={() => handleNavigate(path)}
          activeOpacity={0.7}
        >
          <Text style={styles.optionText}>{label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Bloque fijo: Header */}
      <HeaderButtons onNavigate={handleNavigate} />

      {/* Bloque scrollable */}
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <UserProfileBlock />
        <UserFeatureBlock />

        {/* BLOQUES DE OPCIONES */}
        {renderSection([
          { label: 'Almacenamiento', path: '/almacenamiento' },
        ])}

        {renderSection([
          { label: 'Orden de modelos', path: '/modelos/orden' },
          { label: 'Establecer descuentos', path: '/modelos/descuentos' },
        ])}

        {renderSection([
          { label: 'Mis favoritos', path: '/favoritos' },
          { label: 'Mi contenido', path: '/contenido' },
          { label: 'Mis grupos', path: '/grupos' },
        ])}

        {renderSection([
          { label: 'Ayuda', path: '/ayuda' },
          { label: 'Acerca de', path: '/acerca' },
        ])}
      </ScrollView>
    </SafeAreaView>
  );
};

export default CuentaScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colores.background,
  },
  scrollContainer: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  block: {
    marginVertical: 12,
    backgroundColor: Colores.backgroundSecondary,
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
    // sin borde inferior para no separar con línea
  },
  optionText: {
    fontSize: 16,
    color: Colores.textPrimary,
  },
});



