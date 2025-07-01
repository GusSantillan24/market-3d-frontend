import React from 'react';
import { StyleSheet, View } from 'react-native';
import PerfilUsuarioCompleto from './UserBio';

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
    paddingTop: 0, 
    backgroundColor: '#fff', 
  },
});
