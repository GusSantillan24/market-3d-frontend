import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
    FlatList,
    Image,
    Modal,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function Previsualizacion() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  // Datos simulados 
  const modelo = {
    titulo: 'Soporte articulado para celular',
    descripcion:
      'Modelo optimizado para impresión en PLA. Ajustar temperatura a 210°C. Ensamblar con tornillos M3.',
    tags: ['soporte', 'celular', 'articulado', 'PLA'],
    imagenes: [
      'https://cdn-icons-png.flaticon.com/512/3239/3239025.png', // ejemplo imagen 1
      'https://cdn-icons-png.flaticon.com/512/3239/3239028.png', // ejemplo imagen 2
    ],
    archivos: [
      { name: 'soporte_v1.stl' },
      { name: 'ensamblaje_instrucciones.pdf' },
    ],
  };

  const [modalVisible, setModalVisible] = useState(false);

  const handlePublicar = () => {
    setModalVisible(true);
  };

  const cerrarModal = () => {
    setModalVisible(false);
    router.replace('/modelos/mis-modelos');
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Scroll para que el contenido sea desplazable si es necesario */}
      <ScrollView contentContainerStyle={styles.content}>

        {/* Titulo principal */}
        <Text style={styles.title}>{modelo.titulo}</Text>

        {/* Seccion imágenes */}
        <Text style={styles.sectionLabel}>Imágenes del modelo</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.imagesScroll}
          contentContainerStyle={{ paddingHorizontal: 8 }}
        >
          {modelo.imagenes.map((uri, i) => (
            <View key={i} style={styles.imageWrapper}>
              <Image source={{ uri }} style={styles.image} resizeMode="contain" />
            </View>
          ))}
        </ScrollView>

        {/* Seccion descripcion */}
        <Text style={styles.sectionLabel}>Descripción</Text>
        <Text style={styles.description}>{modelo.descripcion}</Text>

        {/* Seccion tags */}
        <Text style={styles.sectionLabel}>Tags</Text>
        <View style={styles.tagContainer}>
          {modelo.tags.map((tag, i) => (
            <View key={i} style={styles.tag}>
              <Text style={styles.tagText}>{tag}</Text>
            </View>
          ))}
        </View>

        {/* Seccion archivos */}
        <Text style={[styles.sectionLabel, { marginTop: 20 }]}>Archivos</Text>
        <FlatList
          data={modelo.archivos}
          keyExtractor={(item, index) => item.name + index}
          renderItem={({ item }) => (
            <View style={styles.fileItem}>
              <Feather name="file" size={18} color="#fff" style={{ marginRight: 10 }} />
              <Text style={styles.fileName}>{item.name}</Text>
            </View>
          )}
        />
      </ScrollView>

      {/* Boton Publicar */}
      <View style={{ backgroundColor: '#121212' }}>
        <TouchableOpacity style={styles.publishButton} onPress={handlePublicar}>
          <Text style={styles.publishButtonText}>Publicar</Text>
        </TouchableOpacity>
        <View style={{ height: insets.bottom }} />
      </View>

      {/* Modal de confirmación */}
      <Modal
        visible={modalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Feather name="check-circle" size={64} color="#3a86ff" style={{ marginBottom: 20 }} />
            <Text style={styles.modalTitle}>¡Publicación realizada!</Text>
            <Text style={styles.modalText}>
              Tu modelo esta disponible para mostrar
            </Text>
            <TouchableOpacity style={styles.modalButton} onPress={cerrarModal}>
              <Text style={styles.modalButtonText}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    fontWeight: '700',
    marginBottom: 12,
  },
  sectionLabel: {
    color: '#ccc',
    fontSize: 16,
    fontWeight: '600',
    marginTop: 12,
    marginBottom: 6,
  },
  description: {
    color: '#eee',
    fontSize: 15,
    lineHeight: 22,
  },
  tagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tag: {
    backgroundColor: '#3a86ff',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 20,
    marginRight: 8,
    marginBottom: 8,
  },
  tagText: {
    color: '#fff',
    fontSize: 14,
  },
  fileItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomColor: '#333',
    borderBottomWidth: 1,
  },
  fileName: {
    color: '#ddd',
    fontSize: 15,
  },
  publishButton: {
    backgroundColor: '#3a86ff',
    paddingVertical: 16,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  publishButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  modalContainer: {
    backgroundColor: '#222',
    borderRadius: 16,
    paddingVertical: 30,
    paddingHorizontal: 25,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#3a86ff',
    marginBottom: 12,
    textAlign: 'center',
  },
  modalText: {
    color: '#ddd',
    fontSize: 16,
    marginBottom: 25,
    textAlign: 'center',
  },
  modalButton: {
    backgroundColor: '#3a86ff',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  modalButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  imagesScroll: {
    marginBottom: 16,
  },
  imageWrapper: {
    width: 160,
    height: 160,
    borderRadius: 10,
    marginRight: 12,
    backgroundColor: '#222',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
