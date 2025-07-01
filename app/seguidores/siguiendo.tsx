// app/following/index.tsx
import UserListLayout from '@/components/layouts/userListLayout';
import UserItem from '@/components/ui/userItem';
import { mockFollowers } from '@/constants/mockFollowers';
import React, { useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';

const FollowingScreen = () => {
  const [following, setFollowing] = useState(mockFollowers);

  const toggleFollow = (id: string) => {
    setFollowing(prev =>
      prev.map(user =>
        user.id === id ? { ...user, isFollowing: !user.isFollowing } : user
      )
    );
  };

  return (
    <UserListLayout onSearchPress={() => {}}>
      <FlatList
        data={following}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <UserItem
            id={item.id}
            avatar={item.avatar}
            username={item.username}
            isFollowing={item.isFollowing}
            onFollowToggle={() => toggleFollow(item.id)}
            onPressProfile={() => console.log('Ir a perfil de', item.username)}
          />
        )}
        contentContainerStyle={styles.listContainer}
      />
    </UserListLayout>
  );
};

export default FollowingScreen;

const styles = StyleSheet.create({
  listContainer: {
    paddingBottom: 20,
  },
});
