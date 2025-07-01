// components/post/PostDescription.tsx
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const PostDescription = ({ description }: { description: string }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {description || 'Sin descripción'}
      </Text>
    </View>
  );
};

export default PostDescription;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1e1e1e',
    borderRadius: 8,
    padding: 14,
  },
  text: {
    fontSize: 15,
    lineHeight: 22,
    color: '#ccc',
    fontWeight: '400',
  },
});

