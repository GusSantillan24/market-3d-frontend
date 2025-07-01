import Colores from '@/constants/Colores';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Alert, Modal, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';

const EliminarCuentaScreen = () => {
  const [agreed, setAgreed] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleEliminar = () => {
    setShowModal(true);
  };

  const confirmEliminar = () => {
    setShowModal(false);
    Alert.alert("Cuenta eliminada", "Tu cuenta ha sido eliminada exitosamente.");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>

        {/* Consecuencias */}
        <View style={styles.alertBox}>
          <Text style={styles.warning}>⚠️ Al eliminar tu cuenta:</Text>
          <View style={styles.bulletList}>
            <Text style={styles.bullet}>• Se eliminará toda tu información y contenido de forma permanente.</Text>
            <Text style={styles.bullet}>• No podrás recuperar tu cuenta ni tus datos.</Text>
            <Text style={styles.bullet}>• No podrás interactuar con funciones que requieren una cuenta.</Text>
            <Text style={styles.bullet}>• Perderás acceso a tus servicios personalizados y progreso.</Text>
          </View>
        </View>

        {/* Checkbox */}
        <TouchableOpacity
          style={styles.agreement}
          onPress={() => setAgreed(!agreed)}
        >
          <View style={styles.checkbox}>
            {agreed && (
              <Ionicons name="checkmark" size={18} color={Colores.accentBlue} />
            )}
          </View>
          <Text style={styles.agreementText}>
            Leído y estoy de acuerdo con eliminar mi cuenta
          </Text>
        </TouchableOpacity>

        {/* Botón Eliminar */}
        <TouchableOpacity
          style={[
            styles.deleteButton,
            { backgroundColor: agreed ? Colores.accentRed : Colores.disabled },
          ]}
          onPress={handleEliminar}
          disabled={!agreed}
          activeOpacity={agreed ? 0.85 : 1}
        >
          <Text style={styles.deleteButtonText}>Eliminar mi cuenta</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Modal Confirmación */}
      <Modal
        visible={showModal}
        transparent
        animationType="fade"
        onRequestClose={() => setShowModal(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>¿Estás completamente seguro?</Text>
            <Text style={styles.modalText}>
              Esta acción es irreversible y eliminará tu cuenta para siempre.
            </Text>

            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[styles.modalBtn, styles.cancelBtn]}
                onPress={() => setShowModal(false)}
              >
                <Text style={styles.cancelBtnText}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalBtn, styles.confirmBtn]}
                onPress={confirmEliminar}
              >
                <Text style={styles.confirmBtnText}>Eliminar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default EliminarCuentaScreen;



const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colores.background,
  },
  container: {
    padding: 20,
    gap: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: Colores.textPrimary,
  },
  alertBox: {
    backgroundColor: Colores.backgroundAccent,
    borderLeftWidth: 4,
    borderLeftColor: Colores.accentRed,
    borderRadius: 8,
    padding: 16,
    gap: 12,
  },
  warning: {
    fontSize: 16,
    fontWeight: '600',
    color: Colores.accentRed,
  },
  bulletList: {
    gap: 8,
  },
  bullet: {
    fontSize: 15,
    lineHeight: 22,
    color: Colores.textPrimary,
  },
  agreement: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    backgroundColor: Colores.backgroundAccent,
    padding: 14,
    borderRadius: 10,
  },
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 4,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  agreementText: {
    fontSize: 15,
    color: Colores.textPrimary,
    flex: 1,
  },
  deleteButton: {
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  deleteButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  modalBackground: {
    flex: 1,
    backgroundColor: '#00000088',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBox: {
    backgroundColor: Colores.backgroundSecondary,
    padding: 24,
    borderRadius: 12,
    width: '85%',
    elevation: 10,
    gap: 12,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: Colores.textPrimary,
  },
  modalText: {
    fontSize: 15,
    color: Colores.textPrimary,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 12,
    marginTop: 12,
  },
  modalBtn: {
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 8,
  },
  cancelBtn: {
    backgroundColor: Colores.backgroundAccent,
  },
  cancelBtnText: {
    color: Colores.textPrimary,
    fontSize: 15,
  },
  confirmBtn: {
    backgroundColor: Colores.accentRed,
  },
  confirmBtnText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
  },
});



