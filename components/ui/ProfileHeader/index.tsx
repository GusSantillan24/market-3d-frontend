import React from 'react';
import { StyleSheet, View } from 'react-native';
import PerfilUsuarioCompleto from './UserBio'; // asegurate que este nombre sea correcto

const ProfileHeader = () => {
  return (
    <View style={styles.container}>
      <PerfilUsuarioCompleto />
    </View>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
  container: {
    paddingTop: 0, // lo maneja el hijo
    backgroundColor: '#fff', // opcional si no usás fondo global
  },
});
