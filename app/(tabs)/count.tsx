import { useAuth } from '@/app/auth/AuthContext';
import { router } from 'expo-router';
import React, { useState } from 'react';
import {
  Modal,
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
  const { isLoggedIn } = useAuth();
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleNavigate = (path: string) => {
    const publicPaths = ['/ayuda', '/acerca'];

    if (!isLoggedIn && !publicPaths.includes(path)) {
      setShowLoginModal(true);
      return;
    }

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
      <HeaderButtons onNavigate={handleNavigate} />

      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <UserProfileBlock />
        <UserFeatureBlock />

        {renderSection([{ label: 'Almacenamiento', path: '/almacenamiento' }])}

        {renderSection([
          { label: 'Orden de modelos', path: '/modelos/orden' },
          { label: 'Establecer descuentos', path: '/modelos/descuentos' },
        ])}

        {renderSection([
          { label: 'Mis favoritos', path: '/favoritos' },
          { label: 'Mi contenido', path: '/contenido' },
          { label: 'Mis grupos', path: '/grupos' },
        ])}

        {/* Siempre accesibles */}
        {renderSection([
          { label: 'Ayuda', path: '/ayuda' },
          { label: 'Acerca de', path: '/acerca' },
        ])}
      </ScrollView>

      {/* Modal personalizado de acceso no autorizado */}
      <Modal
        visible={showLoginModal}
        transparent
        animationType="fade"
        onRequestClose={() => setShowLoginModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Acceso restringido</Text>
            <Text style={styles.modalMessage}>
              Necesitás iniciar sesión para acceder a esta sección.
            </Text>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => {
                setShowLoginModal(false);
                router.push('/auth/login'); // Cambiá si tu ruta es diferente
              }}
            >
              <Text style={styles.modalButtonText}>Iniciar sesión</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setShowLoginModal(false)}>
              <Text style={styles.modalCancelText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 5,
  },
  option: {
    paddingVertical: 16,
  },
  optionText: {
    fontSize: 16,
    color: Colores.textPrimary,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: Colores.backgroundSecondary,
    padding: 24,
    borderRadius: 14,
    width: '80%',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: Colores.textPrimary,
    marginBottom: 10,
  },
  modalMessage: {
    fontSize: 15,
    color: Colores.textSecondary,
    marginBottom: 20,
    textAlign: 'center',
  },
  modalButton: {
    backgroundColor: '#3a86ff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    marginBottom: 12,
  },
  modalButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  modalCancelText: {
    color: Colores.textSecondary,
    fontSize: 14,
  },
});




