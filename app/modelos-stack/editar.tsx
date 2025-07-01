import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function EditarModelo() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [nuevoTag, setNuevoTag] = useState('');

  const archivosMock = [
    { name: 'pieza1.stl' },
    { name: 'pieza2.gcode' },
  ];

  const agregarTag = () => {
    if (nuevoTag.trim() && !tags.includes(nuevoTag.trim())) {
      setTags([...tags, nuevoTag.trim()]);
      setNuevoTag('');
    }
  };

  const handlePublicar = () => {
    if (!titulo.trim() || !descripcion.trim()) {
      alert('Por favor completá título y descripción');
      return;
    }
    // Navegar a previsualizar
    router.push('/modelos-stack/previsualizar');
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Contenido */}
      <View style={styles.content}>
        {/* Título */}
        <Text style={styles.label}>Título</Text>
        <TextInput
          style={styles.input}
          placeholder="Ej: Soporte articulado para celular"
          placeholderTextColor="#888"
          value={titulo}
          onChangeText={setTitulo}
        />

        {/* Descripcion */}
        <Text style={styles.label}>Descripción</Text>
        <TextInput
          style={[styles.input, styles.multilineInput]}
          placeholder="Describe tu modelo, materiales recomendados, instrucciones, etc."
          placeholderTextColor="#888"
          value={descripcion}
          onChangeText={setDescripcion}
          multiline
          numberOfLines={4}
        />

        {/* Tags */}
        <Text style={styles.label}>Tags</Text>
        <View style={styles.tagRow}>
          <TextInput
            style={[styles.input, { flex: 1, marginRight: 8, paddingVertical: 10 }]}
            placeholder="Agregar tag"
            placeholderTextColor="#888"
            value={nuevoTag}
            onChangeText={setNuevoTag}
            onSubmitEditing={agregarTag}
            returnKeyType="done"
          />
          <TouchableOpacity onPress={agregarTag} style={styles.addTagButton}>
            <Feather name="plus" size={20} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* Lista de tags */}
        <View style={styles.tagContainer}>
          {tags.map((tag, index) => (
            <View key={index} style={styles.tag}>
              <Text style={styles.tagText}>{tag}</Text>
            </View>
          ))}
        </View>

        {/* Archivos subidos */}
        <Text style={[styles.label, { marginTop: 20 }]}>Archivos</Text>
        <FlatList
          data={archivosMock}
          keyExtractor={(item, index) => item.name + index}
          renderItem={({ item }) => (
            <View style={styles.fileItem}>
              <Feather name="file" size={16} color="#fff" style={{ marginRight: 8 }} />
              <Text style={styles.fileName}>{item.name}</Text>
            </View>
          )}
        />
      </View>

      {/* Botón Previsualizar */}
      <View style={{ backgroundColor: '#121212' }}>
        <TouchableOpacity style={styles.bottomButton} onPress={handlePublicar}>
          <Text style={styles.bottomButtonText}>Previsualizar</Text>
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
  content: {
    flex: 1,
    padding: 16,
  },
  label: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 6,
    marginTop: 12,
  },
  input: {
    backgroundColor: '#2a2a2a',
    color: '#fff',
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 15,
    marginBottom: 10,
  },
  multilineInput: {
    height: 100,
    textAlignVertical: 'top',
    paddingVertical: 10,
  },
  tagRow: {
    flexDirection: 'row',
    alignItems: 'center', 
  },
  addTagButton: {
    backgroundColor: '#3a86ff',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 8,
  },
  tagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 8,
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
    fontSize: 13,
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

