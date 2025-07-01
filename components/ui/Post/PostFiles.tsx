import React from 'react';
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface File {
  id: number;
  name: string;
  preview: any; // require(...) o { uri: string }
  downloadUrl: string;
}

const PostFiles = ({ files }: { files: File[] }) => {
  const handleDownload = (file: File) => {
    Alert.alert('Descarga', `Descargando archivo: ${file.name}`);
    // En app real: usar expo-file-system o Linking.openURL
  };

  if (!files || files.length === 0) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Archivos disponibles</Text>

      {files.map(file => (
        <View key={file.id} style={styles.fileRow}>
          <Image source={file.preview} style={styles.image} />

          <View style={styles.fileInfo}>
            <Text style={styles.fileName} numberOfLines={1}>{file.name}</Text>
            <TouchableOpacity
              onPress={() => handleDownload(file)}
              style={styles.downloadButton}
              activeOpacity={0.8}
            >
              <Text style={styles.downloadText}>Descargar</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </View>
  );
};

export default PostFiles;

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    padding: 14,
    backgroundColor: '#1e1e1e',
    borderRadius: 8,
  },
  title: {
    fontSize: 17,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 14,
  },
  fileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 6,
    backgroundColor: '#333',
    marginRight: 12,
  },
  fileInfo: {
    flex: 1,
  },
  fileName: {
    fontSize: 14,
    fontWeight: '500',
    color: '#ccc',
    marginBottom: 6,
  },
  downloadButton: {
    backgroundColor: '#3a86ff',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
    alignSelf: 'flex-start',
  },
  downloadText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '600',
  },
});

