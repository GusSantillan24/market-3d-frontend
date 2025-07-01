// app/notifications/settings.tsx
import * as Notifications from 'expo-notifications';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  Alert,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const NotificationSettings = () => {
  const router = useRouter();
  const [isMuted, setIsMuted] = useState(false);
  const [showIndicators, setShowIndicators] = useState(true);

  const handleRequestPermission = async () => {
    const { status } = await Notifications.getPermissionsAsync();
    if (status !== 'granted') {
      const { status: newStatus } = await Notifications.requestPermissionsAsync();
      if (newStatus === 'granted') {
        Alert.alert('Permiso otorgado', 'Ahora puedes recibir notificaciones.');
      } else {
        Alert.alert('Permiso denegado', 'No podrás recibir notificaciones.');
      }
    } else {
      Alert.alert('Permiso activo', 'Ya puedes recibir notificaciones.');
    }
  };

  return (
      <View style={styles.container}>
        <Text style={styles.description}>
          Configura tus preferencias de notificaciones para estar al tanto de tus actividades, mensajes y más.
        </Text>

        <View style={styles.card}>
          <TouchableOpacity onPress={handleRequestPermission} style={styles.option}>
            <View style={styles.textWrapper}>
              <Text style={styles.optionTitle}>Todas las notificaciones</Text>
              <Text style={styles.optionDescription}>
                Permite recibir notificaciones en tu teléfono o dispositivo.
              </Text>
            </View>
          </TouchableOpacity>

          <View style={styles.option}>
            <View style={styles.textWrapper}>
              <Text style={styles.optionTitle}>Silenciar notificaciones</Text>
              <Text style={styles.optionDescription}>
                Desactiva temporalmente todas las notificaciones push.
              </Text>
            </View>
            <Switch
              value={isMuted}
              onValueChange={setIsMuted}
              thumbColor={isMuted ? '#f04' : '#888'}
              trackColor={{ true: '#f048', false: '#444' }}
            />
          </View>

          <View style={styles.option}>
            <View style={styles.textWrapper}>
              <Text style={styles.optionTitle}>Recordatorios</Text>
              <Text style={styles.optionDescription}>
                Muestra puntos de colores si tienes mensajes o notificaciones sin leer.
              </Text>
            </View>
            <Switch
              value={showIndicators}
              onValueChange={setShowIndicators}
              thumbColor={showIndicators ? '#4df' : '#888'}
              trackColor={{ true: '#4df6', false: '#444' }}
            />
          </View>
        </View>
      </View>
  );
};

export default NotificationSettings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  description: {
    color: '#ccc',
    fontSize: 14,
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#1e1e1e',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 14,
    gap: 16,
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textWrapper: {
    flex: 1,
    paddingRight: 12,
  },
  optionTitle: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
  },
  optionDescription: {
    color: '#aaa',
    fontSize: 12,
    marginTop: 4,
  },
});

