// app/settings/seguridad/restablecer.tsx
import Colores from '@/constants/Colores';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const RestablecerCuentaScreen = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [codigo, setCodigo] = useState('');
  const [nuevaContrasena, setNuevaContrasena] = useState('');
  const [verContrasena, setVerContrasena] = useState(false);

  const handleEnviarCodigo = () => {
    console.log('Enviando código a:', email);
  };

  const handleConfirmar = () => {
    console.log('Confirmando con:', { email, codigo, nuevaContrasena });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Email */}
        <TextInput
          style={styles.input}
          placeholder="Correo electrónico"
          placeholderTextColor={Colores.textSecondary}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        {/* Código + Enviar */}
        <View style={styles.inlineGroup}>
          <TextInput
            style={[styles.input, { flex: 1, marginRight: 8 }]}
            placeholder="Código de verificación"
            placeholderTextColor={Colores.textSecondary}
            value={codigo}
            onChangeText={setCodigo}
            keyboardType="number-pad"
          />
          <TouchableOpacity style={styles.sendButton} onPress={handleEnviarCodigo}>
            <Text style={styles.sendButtonText}>Enviar</Text>
          </TouchableOpacity>
        </View>

        {/* Nueva contraseña */}
        <View style={styles.inlineGroup}>
          <TextInput
            style={[styles.input, { flex: 1, marginRight: 8 }]}
            placeholder="Nueva contraseña"
            placeholderTextColor={Colores.textSecondary}
            secureTextEntry={!verContrasena}
            value={nuevaContrasena}
            onChangeText={setNuevaContrasena}
          />
          <TouchableOpacity onPress={() => setVerContrasena(!verContrasena)}>
            <Ionicons
              name={verContrasena ? 'eye-off' : 'eye'}
              size={24}
              color={Colores.textSecondary}
            />
          </TouchableOpacity>
        </View>

        {/* Confirmar */}
        <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmar}>
          <Text style={styles.confirmButtonText}>Confirmar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RestablecerCuentaScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colores.background,
  },
  container: {
    padding: 20,
    gap: 20,
    marginTop: 30,
  },
  input: {
    backgroundColor: Colores.backgroundSecondary,
    color: Colores.textPrimary,
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 20,
    fontSize: 16,
  },
  inlineGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sendButton: {
    backgroundColor: Colores.accentBlue ?? '#2196F3',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
  },
  sendButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
  confirmButton: {
    backgroundColor: Colores.accentGreen ?? '#4CAF50',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 20,
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

