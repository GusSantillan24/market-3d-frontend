// components/UserItem.tsx
import React from 'react';
import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    ViewStyle,
} from 'react-native';

type Props = {
  id: string;
  avatar: any;
  username: string;
  isFollowing: boolean;
  onFollowToggle: () => void;
  onPressProfile: () => void;
  containerStyle?: ViewStyle;
};

const UserItem: React.FC<Props> = ({
  avatar,
  username,
  isFollowing,
  onFollowToggle,
  onPressProfile,
  containerStyle,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <TouchableOpacity onPress={onPressProfile} style={styles.avatarWrapper}>
        <Image source={avatar} style={styles.avatar} />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={onPressProfile}
        style={styles.usernameWrapper}
        activeOpacity={0.7}
      >
        <Text style={styles.username} numberOfLines={1} ellipsizeMode="tail">
          {username}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={onFollowToggle}
        style={[
          styles.followButton,
          { backgroundColor: isFollowing ? '#333' : '#1DB954' },
        ]}
      >
        <Text style={styles.followText}>
          {isFollowing ? 'Siguiendo' : 'Seguir'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default UserItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: '#2a2a2a',
  },
  avatarWrapper: {
    marginRight: 12,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#555',
  },
  usernameWrapper: {
    flex: 1,
  },
  username: {
    fontSize: 15,
    color: '#fff',
    fontWeight: '500',
  },
  followButton: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 16,
  },
  followText: {
    fontSize: 13,
    color: '#fff',
    fontWeight: '600',
  },
});
