// app/settings/perfil/index.tsx
import Colores from '@/constants/Colores';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as ClipboardModule from 'expo-clipboard';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Platform, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const generateRandomId = () => Math.random().toString(36).substring(2, 10);

const PerfilScreen = () => {
  const router = useRouter();
  const [userId] = useState(generateRandomId());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [birthDate, setBirthDate] = useState(new Date());

  const copyToClipboard = async () => {
    await ClipboardModule.setStringAsync(userId);
    Alert.alert('ID copiado', 'Tu ID ha sido copiado al portapapeles');
  };

  const onDateChange = (event: any, selectedDate?: Date) => {
    setShowDatePicker(Platform.OS === 'ios');
    if (selectedDate) {
      setBirthDate(selectedDate);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        {/* FOTO DE PERFIL */}
        <TouchableOpacity style={styles.avatarWrapper} onPress={() => {}}>
          <View style={styles.avatarCircle}>
            <Text style={styles.avatarText}>👤</Text>
          </View>
          <Text style={styles.avatarLabel}>Cambiar foto</Text>
        </TouchableOpacity>

        {/* BLOQUE DE OPCIONES */}
        <View style={styles.optionsBlock}>
          <TouchableOpacity style={styles.option} onPress={copyToClipboard}>
            <View style={styles.rowBetween}>
              <Text style={styles.optionText}>ID de usuario</Text>
              <Text style={styles.idText}>{userId}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.option} onPress={() => router.push('/settings/perfil/cambiar-nombre')}>
            <Text style={styles.optionText}>Nombre de muestra</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.option} onPress={() => router.push('/settings/perfil/genero')}>
            <Text style={styles.optionText}>Género</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.option} onPress={() => setShowDatePicker(true)}>
            <Text style={styles.optionText}>Fecha de nacimiento</Text>
          </TouchableOpacity>

          {showDatePicker && (
            <DateTimePicker
              value={birthDate}
              mode="date"
              display="spinner"
              onChange={onDateChange}
              themeVariant="dark"
            />
          )}

          <TouchableOpacity style={styles.option} onPress={() => router.push('/settings/perfil/qr')}>
            <Text style={styles.optionText}>Mi código QR</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.option} onPress={() => router.push('/settings/perfil/region')}>
            <Text style={styles.optionText}>Región</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PerfilScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colores.background,
  },
  container: {
    padding: 16,
  },
  avatarWrapper: {
    alignItems: 'center',
    marginBottom: 24,
  },
  avatarCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: Colores.backgroundAccent,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    fontSize: 36,
    color: Colores.textPrimary,
  },
  avatarLabel: {
    marginTop: 10,
    color: Colores.textPrimary,
    fontWeight: '500',
  },
  optionsBlock: {
    marginTop: 12,
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
  idText: {
    color: Colores.textSecondary,
    fontSize: 14,
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

