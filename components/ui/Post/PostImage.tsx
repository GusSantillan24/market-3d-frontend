import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const PostImage = ({ image }: { image: any }) => {
  return (
    <View style={styles.wrapper}>
      <Image source={image} style={styles.image} resizeMode="contain" />
    </View>
  );
};

export default PostImage;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#1e1e1e',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 4,
  },
  image: {
    width: '100%',
    height: 250,
    backgroundColor: '#2c2c2c',
  },
});

