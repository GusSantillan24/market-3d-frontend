import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface PostHeaderProps {
  title: string;
  category: string;
  date: string;
  views: number;
}

const PostHeader = ({ title, category, date, views }: PostHeaderProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <View style={styles.metaRow}>
        <View style={styles.metaItem}>
          <MaterialCommunityIcons name="folder-outline" size={16} color="#bbb" />
          <Text style={styles.metaText}>{category}</Text>
        </View>

        <View style={styles.metaItem}>
          <MaterialCommunityIcons name="calendar-month-outline" size={16} color="#bbb" />
          <Text style={styles.metaText}>{date}</Text>
        </View>

        <View style={styles.metaItem}>
          <MaterialCommunityIcons name="eye-outline" size={16} color="#bbb" />
          <Text style={styles.metaText}>{views}</Text>
        </View>
      </View>
    </View>
  );
};

export default PostHeader;

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 10,
  },
  metaRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 14,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
    marginBottom: 6,
  },
  metaText: {
    marginLeft: 6,
    fontSize: 13,
    color: '#bbb',
  },
});

