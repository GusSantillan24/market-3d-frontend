import { Feather, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { useAuth } from '@/app/auth/AuthContext';
import Colores from '@/constants/Colores';

const UserFeatureBlock = () => {
  const { isLoggedIn } = useAuth();
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handlePress = (route: string) => {
    if (!isLoggedIn) {
      setShowLoginModal(true);
      return;
    }

    router.push(route);
  };

  return (
    <>
      <View style={styles.featuresRow}>
        {[
          {
            icon: <FontAwesome5 name="layer-group" size={20} color="#E0E0E0" />,
            label: 'Modelos',
            count: 12,
            route: '/modelos',
          },
          {
            icon: <MaterialIcons name="print" size={20} color="#E0E0E0" />,
            label: 'Configuración',
            count: 3,
            route: '/impresion/configuracion',
          },
          {
            icon: <Feather name="activity" size={20} color="#E0E0E0" />,
            label: 'Registros',
            count: 8,
            route: '/impresion/registros',
          },
        ].map(({ icon, label, count, route }) => (
          <TouchableOpacity
            key={label}
            style={styles.featureButton}
            onPress={() => handlePress(route)}
          >
            <View style={styles.iconCount}>
              {icon}
              <Text style={styles.featureCount}>
                {isLoggedIn ? count : 0}
              </Text>
            </View>
            <Text style={styles.featureLabel}>{label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Modal login requerido */}
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
                router.push('/auth/login'); // Ajustá si tu ruta de login es otra
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
    </>
  );
};

export default UserFeatureBlock;

const styles = StyleSheet.create({
  featuresRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 12,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colores.backgroundAccent,
  },
  featureButton: {
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  iconCount: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  featureCount: {
    fontSize: 14,
    fontWeight: '600',
    color: '#E0E0E0',
    marginLeft: 4,
  },
  featureLabel: {
    fontSize: 12,
    color: '#E0E0E0',
    marginTop: 2,
  },

  // Modal
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

