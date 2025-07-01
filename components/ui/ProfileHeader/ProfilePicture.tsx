import Colores from '@/constants/Colores';
import React from "react";
import { Image, StyleSheet, View } from 'react-native';

const ProfilePicture = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image
          source={{ uri: 'https://i.pravatar.cc/150?img=12' }}
          style={styles.image}
        />
      </View>
    </View>
  );
};

export default ProfilePicture;

const styles = StyleSheet.create({
  container: {
    marginRight: 12,
  },
  imageWrapper: {
    borderRadius: 44,
    padding: 3,
    backgroundColor: Colores.backgroundAccent,
    borderWidth: 2,
    borderColor: Colores.backgroundSecondary,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 6,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
});
