import { useAuth } from '@/app/auth/AuthContext';
import Colores from '@/constants/Colores';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const HeaderButtons: React.FC = () => {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { isLoggedIn } = useAuth();
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleProtectedRoute = (path: string) => {
    if (!isLoggedIn) {
      setShowLoginModal(true);
    } else {
      router.push(path);
    }
  };

  return (
    <>
      <View style={[styles.container, { paddingTop: insets.top }]}>
        <View style={styles.buttonsWrapper}>
          <TouchableOpacity onPress={() => router.push('/scanner')} style={styles.button}>
            <MaterialCommunityIcons name="qrcode-scan" size={22} color="white" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleProtectedRoute('/notificaciones')} style={styles.button}>
            <Feather name="bell" size={20} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push('/settings')} style={styles.button}>
            <Feather name="settings" size={20} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push('/cart')} style={styles.button}>
            <MaterialCommunityIcons name="cart-outline" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </View>

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
              Necesitás iniciar sesión para ver tus notificaciones.
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
    </>
  );
};

export default HeaderButtons;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colores.background,
    paddingHorizontal: 15,
    paddingBottom: 8,
    paddingVertical: 1,
    borderBottomWidth: 1,
    borderColor: Colores.backgroundAccent,
  },
  buttonsWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 16,
  },
  button: {
    padding: 8,
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
  cancelText: {
    color: Colores.textPrimary,
    fontWeight: '500',
  },
});


