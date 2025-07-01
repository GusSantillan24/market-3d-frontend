import PostBottomBar from '@/components/ui/BottomBar/PostBottomBar';
import BottomHeader from '@/components/ui/BottomHeader/BottomHeaderPost';
import { mockModels } from '@/constants/mockModels';
import { mockModelsMe } from '@/constants/mockModelsMe';
import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import PostComments from '@/components/ui/Post/PostComments';
import PostDescription from '@/components/ui/Post/PostDescription';
import PostFiles from '@/components/ui/Post/PostFiles';
import PostHeader from '@/components/ui/Post/PostHeader';
import PostImage from '@/components/ui/Post/PostImage';

const PostDetails = () => {
  const { id } = useLocalSearchParams();

  const allPosts = [...mockModels, ...mockModelsMe];
  const post = allPosts.find(p => p.id.toString() === id?.toString());

  if (!post) {
    return (
      <View style={styles.centered}>
        <Text style={styles.notFoundText}>🚫 Publicación no encontrada</Text>
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <BottomHeader />
      <ScrollView contentContainerStyle={styles.content}>
        <PostImage image={post.image} />
        <PostHeader
          title={post.title}
          category={post.category || 'Sin categoría'}
          date={post.date || 'Fecha desconocida'}
          views={post.views || 0}
        />
        <PostDescription description={post.description} />
        <PostFiles files={post.files} />
        <PostComments />
      </ScrollView>
      <PostBottomBar />
    </View>
  );
};

export default PostDetails;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#121212',
  },
  content: {
    padding: 16,
    paddingBottom: 100,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
    padding: 20,
  },
  notFoundText: {
    fontSize: 18,
    color: '#bbb',
    textAlign: 'center',
  },
});


