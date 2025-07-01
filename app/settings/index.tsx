import { useAuth } from '@/app/auth/AuthContext';
import Colores from '@/constants/Colores';
import { useRouter } from 'expo-router';
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

const SettingsScreen = () => {
  const router = useRouter();
  const { isLoggedIn, logout } = useAuth();
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const protectedPress = (path: string) => {
    if (!isLoggedIn) {
      setShowLoginModal(true);
    } else {
      router.push(path);
    }
  };

  const handleLogout = () => {
    setShowLogoutModal(false);
    logout();
    router.replace('/(tabs)/count');
  };

  const renderSection = (items: { label: string; path?: string; action?: () => void; allowGuest?: boolean }[]) => (
    <View style={styles.block}>
      {items.map(({ label, path, action, allowGuest }) => (
        <TouchableOpacity
          key={label}
          style={styles.option}
          onPress={() => {
            if (path) {
              allowGuest ? router.push(path) : protectedPress(path);
            } else {
              action?.();
            }
          }}
          activeOpacity={0.7}
        >
          <Text style={styles.optionText}>{label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        {renderSection([
          { label: 'Mi perfil', path: '/settings/perfil' },
          { label: 'Seguridad', path: '/settings/seguridad' },
        ])}

        {renderSection([
          { label: 'Idioma', path: '/settings/idioma', allowGuest: true },
          { label: 'Tema', path: '/settings/tema', allowGuest: true },
        ])}

        {renderSection([
          { label: 'Configuración general', path: '/settings/general' },
          { label: 'Notificaciones', path: '/settings/notificaciones' },
          { label: 'Ajustes de privacidad', path: '/settings/privacidad' },
        ])}

        {renderSection([
          { label: 'Enviar comentario', path: '/settings/enviar-comentario' },
        ])}

        {isLoggedIn &&
          renderSection([
            { label: 'Cerrar sesión', action: () => setShowLogoutModal(true) },
          ])}
      </ScrollView>

      {/* MODAL: Logout */}
      <Modal
        visible={showLogoutModal}
        transparent
        animationType="fade"
        onRequestClose={() => setShowLogoutModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>¿Está seguro de cerrar sesión?</Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => setShowLogoutModal(false)}
              >
                <Text style={styles.cancelText}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.confirmButton} onPress={handleLogout}>
                <Text style={styles.confirmText}>Confirmar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* MODAL: Login requerido */}
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
              style={styles.modalActionButton}
              onPress={() => {
                setShowLoginModal(false);
                router.push('/auth/login');
              }}
            >
              <Text style={styles.modalActionText}>Iniciar sesión</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setShowLoginModal(false)}>
              <Text style={styles.cancelText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default SettingsScreen;

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
    borderRadius: 12,
    width: '80%',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Colores.textPrimary,
    marginBottom: 10,
    textAlign: 'center',
  },
  modalMessage: {
    fontSize: 15,
    color: Colores.textSecondary,
    marginBottom: 20,
    textAlign: 'center',
  },
  modalButtons: {
    flexDirection: 'row',
    gap: 16,
  },
  cancelButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    backgroundColor: Colores.backgroundAccent,
  },
  confirmButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    backgroundColor: '#e74c3c',
  },
  cancelText: {
    color: Colores.textPrimary,
    fontWeight: '500',
  },
  confirmText: {
    color: '#fff',
    fontWeight: '500',
  },
  modalActionButton: {
    backgroundColor: '#3a86ff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    marginBottom: 12,
  },
  modalActionText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});

