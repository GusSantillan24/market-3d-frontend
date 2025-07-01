import { Feather } from '@expo/vector-icons';
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';
import React, { useRef } from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

const QRScreen = () => {
  const qrRef = useRef<QRCode>(null);

  const user = {
    id: 'user-123456',
    name: 'Juan Pérez',
    profilePic: 'https://i.pravatar.cc/150?img=3',
  };

  const handleSave = async () => {
    if (!qrRef.current) return;

    qrRef.current.toDataURL(async (dataURL) => {
      const path = FileSystem.cacheDirectory + 'qr-code.png';
      await FileSystem.writeAsStringAsync(path, dataURL, {
        encoding: FileSystem.EncodingType.Base64,
      });
      alert('Imagen guardada localmente (simulado)');
    });
  };

  const handleShare = async () => {
    if (!qrRef.current) return;

    qrRef.current.toDataURL(async (dataURL) => {
      const path = FileSystem.cacheDirectory + 'qr-code.png';
      await FileSystem.writeAsStringAsync(path, dataURL, {
        encoding: FileSystem.EncodingType.Base64,
      });
      await Sharing.shareAsync(path);
    });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        {/* Avatar */}
        <Image source={{ uri: user.profilePic }} style={styles.avatar} />
        <Text style={styles.name}>{user.name}</Text>

        {/* QR */}
        <View style={styles.qrWrapper}>
          <QRCode
            value={user.id}
            size={200}
            color="#000"
            backgroundColor="#fff"
            getRef={(ref) => (qrRef.current = ref)}
          />
        </View>

        <Text style={styles.infoText}>
          Mostrá este código para compartir tu perfil con otras personas de forma rápida.
        </Text>

        {/* Botones */}
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.iconButton} onPress={handleSave}>
            <Feather name="download" size={28} color="#333" />
            <Text style={styles.iconLabel}>Guardar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton} onPress={handleShare}>
            <Feather name="share-2" size={28} color="#333" />
            <Text style={styles.iconLabel}>Compartir</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default QRScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  content: {
    alignItems: 'center',
    padding: 24,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
    backgroundColor: '#e0e0e0',
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginBottom: 24,
  },
  qrWrapper: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 16,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 5,
  },
  infoText: {
    textAlign: 'center',
    color: '#555',
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 32,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 40,
    justifyContent: 'center',
  },
  iconButton: {
    alignItems: 'center',
    gap: 8,
  },
  iconLabel: {
    fontSize: 14,
    color: '#333',
  },
});


