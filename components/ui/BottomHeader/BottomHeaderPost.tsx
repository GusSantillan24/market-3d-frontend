import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

const BottomHeader = () => {
  return (
    <View style={styles.container}>
      {/* Botón de volver */}
      <TouchableOpacity onPress={() => console.log('Volver atrás')}>
        <Ionicons name="arrow-back" size={26} color="#fff" />
      </TouchableOpacity>

      {/* Botones de la derecha */}
      <View style={styles.rightButtons}>
        <TouchableOpacity onPress={() => console.log('Configuración')}>
          <Ionicons name="settings-outline" size={24} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => console.log('Más opciones')}>
          <Ionicons name="ellipsis-vertical" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BottomHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#121212',
    paddingTop: 50,
    paddingHorizontal: 16,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#2a2a2a',
  },
  rightButtons: {
    flexDirection: 'row',
    columnGap: 20,
  },
});
