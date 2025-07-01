import Colores from '@/constants/Colores';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import Camera from 'expo-camera';
import React, { useEffect, useRef, useState } from 'react';
import {
    ActivityIndicator,
    StyleSheet,
    Text,
    View,
} from 'react-native';

const ScannerScreen = () => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [isScanning, setIsScanning] = useState(false);
  const cameraRef = useRef<Camera>(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }: any) => {
    setIsScanning(true);
    console.log(`Tipo: ${type}\nDato: ${data}`);
    setTimeout(() => setIsScanning(false), 3000);
  };

  if (hasPermission === null) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#3a86ff" />
        <Text style={styles.text}>Solicitando permisos de cámara...</Text>
      </View>
    );
  }

  if (hasPermission === false) {
    return (
      <View style={styles.centered}>
        <Ionicons name="camera-off-outline" size={64} color="#ccc" />
        <Text style={styles.text}>No se otorgaron permisos para usar la cámara.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Camera
        ref={cameraRef}
        style={styles.camera}
        type={Camera.Constants.Type.back}
        onBarCodeScanned={isScanning ? undefined : handleBarCodeScanned}
        ratio="16:9"
      />
      <View style={styles.overlay}>
        <MaterialCommunityIcons name="qrcode-scan" size={20} color="#fff" />
        <Text style={styles.overlayText}>Escaneá un código</Text>
      </View>
    </View>
  );
};

export default ScannerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colores.background,
  },
  camera: {
    flex: 1,
    borderColor: Colores.backgroundAccent,
    borderWidth: 1,
  },
  overlay: {
    position: 'absolute',
    bottom: 40,
    alignSelf: 'center',
    backgroundColor: '#3a86ff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    opacity: 0.92,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  overlayText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colores.background,
    padding: 20,
  },
  text: {
    color: Colores.textPrimary,
    fontSize: 16,
    marginTop: 16,
    textAlign: 'center',
  },
});

