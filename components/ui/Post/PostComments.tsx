import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';

const mockComments = [
  { id: '1', user: 'marcela', text: '¡Increíble modelo! Me encantó.' },
  { id: '2', user: 'daniel_3d', text: '¿Qué impresora usaste para esto?' },
  { id: '3', user: 'fabi', text: 'Se ve súper detallado, ¡gracias por compartir!' },
];

const PostComments = () => {
  const router = useRouter();
  const { id } = useLocalSearchParams();

  const renderComment = ({ item }) => (
    <View style={styles.commentRow}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>{item.user.charAt(0).toUpperCase()}</Text>
      </View>
      <View style={styles.commentContent}>
        <Text style={styles.userName}>{item.user}</Text>
        <Text style={styles.commentText}>{item.text}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Comentarios</Text>

      <FlatList
        data={mockComments}
        keyExtractor={(item) => item.id}
        renderItem={renderComment}
        scrollEnabled={false}
        contentContainerStyle={{ paddingBottom: 12 }}
      />

      <TouchableOpacity
        style={styles.commentButton}
        onPress={() => router.push(`/post/${id}/comentar`)}
        activeOpacity={0.8}
      >
        <Text style={styles.buttonText}>Comentar la publicación</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PostComments;

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 12,
    color: '#E0E0E0',
  },
  commentRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 14,
  },
  avatar: {
    backgroundColor: '#3a86ff',
    borderRadius: 18,
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  avatarText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
  commentContent: {
    flex: 1,
  },
  userName: {
    fontWeight: '600',
    marginBottom: 2,
    color: '#B0B0B0',
  },
  commentText: {
    fontSize: 16,
    color: '#E0E0E0',
  },
  commentButton: {
    marginTop: 16,
    backgroundColor: '#3a86ff',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
});










