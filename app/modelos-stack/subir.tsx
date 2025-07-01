import { Feather } from '@expo/vector-icons';
import * as DocumentPicker from 'expo-document-picker';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
    Alert,
    FlatList,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function SubirModelo() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [archivos, setArchivos] = useState<DocumentPicker.DocumentPickerAsset[]>([]);

  const handleSeleccionarArchivo = async () => {
    const result = await DocumentPicker.getDocumentAsync({ multiple: true });

    if (result.assets) {
      setArchivos([...archivos, ...result.assets]);
    }
  };

  const handleUpload = () => {
    if (archivos.length === 0) {
        Alert.alert('Error', 'Agrega al menos un archivo para subir.');
        return;
    }

    // Opcional: podés guardar los archivos en estado global, contexto o enviar vía params
    console.log('Archivos seleccionados:', archivos);

    router.push('/modelos-stack/editar');
    };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={[styles.header, { paddingTop: insets.top }]}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Feather name="arrow-left" size={22} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Subir</Text>
        <View style={{ width: 40 }} />
      </View>

      {/* Contenido */}
      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Subir</Text>

        <View style={styles.uploadArea}>
          <TouchableOpacity style={styles.uploadButton} onPress={handleSeleccionarArchivo}>
            <Feather name="plus" size={18} color="#fff" style={{ marginRight: 8 }} />
            <Text style={styles.uploadButtonText}>Agregar archivos</Text>
          </TouchableOpacity>
        </View>

        {archivos.length > 0 && (
          <FlatList
            data={archivos}
            keyExtractor={(item, index) => item.name + index}
            renderItem={({ item }) => (
              <View style={styles.fileItem}>
                <Feather name="file" size={16} color="#fff" style={{ marginRight: 8 }} />
                <Text style={styles.fileName}>{item.name}</Text>
              </View>
            )}
            style={styles.filesList}
          />
        )}
      </View>

      {/* Botón fijo fuera del área de contenido */}
      <View style={{ backgroundColor: '#121212' }}>
        <TouchableOpacity style={styles.bottomButton} onPress={handleUpload}>
          <Text style={styles.bottomButtonText}>Subir modelo</Text>
        </TouchableOpacity>
        <View style={{ height: insets.bottom }} />
      </View>
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 12,
    backgroundColor: '#1E1E1E',
    borderBottomWidth: 1,
    borderBottomColor: '#2a2a2a',
  },
  backButton: {
    padding: 4,
    width: 40,
    alignItems: 'center',
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
  },
  uploadArea: {
    backgroundColor: '#1e1e1e',
    borderRadius: 10,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#444',
    alignItems: 'center',
    justifyContent: 'center',
    height: 140,
    marginBottom: 20,
  },
  uploadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3a86ff',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
  },
  uploadButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  filesList: {
    marginTop: 10,
  },
  fileItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
  },
  fileName: {
    color: '#ccc',
    fontSize: 14,
  },
  bottomButton: {
    backgroundColor: '#3a86ff',
    paddingVertical: 16,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  bottomButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});




