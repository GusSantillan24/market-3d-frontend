// app/followers/index.tsx
import UserListLayout from '@/components/layouts/userListLayout';
import UserItem from '@/components/ui/userItem';
import { mockFollowers } from '@/constants/mockFollowers';
import React, { useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';


const FollowersScreen = () => {
  const [followers, setFollowers] = useState(mockFollowers);

  const toggleFollow = (id: string) => {
    setFollowers(prev =>
      prev.map(user =>
        user.id === id ? { ...user, isFollowing: !user.isFollowing } : user
      )
    );
  };

  return (
    <UserListLayout onSearchPress={() => {}}>
      <FlatList
        data={followers}
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

export default FollowersScreen;

const styles = StyleSheet.create({
  listContainer: {
    paddingBottom: 20,
  },
});


