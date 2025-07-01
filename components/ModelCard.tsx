import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { GestureResponderEvent, Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native';

type Owner = { username: string } | null | undefined;

type ModelCardProps = {
  id: string | number;
  image: ImageSourcePropType;
  title: string;
  owner?: Owner;  // Opcional y nullable
  downloads: number;
  likes: number;
  onPress?: () => void;
  onOwnerPress?: () => void;
  cardHeight?: number;
  style?: ViewStyle;
};

const TITLE_HEIGHT = 30;
const SUBTITLE_HEIGHT = 24;

const ModelCard: React.FC<ModelCardProps> = ({
  id,
  image,
  title,
  owner,
  downloads,
  likes,
  onPress,
  onOwnerPress,
  cardHeight = 280,
  style,
}) => {
  const imageHeight = cardHeight - TITLE_HEIGHT - SUBTITLE_HEIGHT;
  const router = useRouter();

  // Manejo seguro del username
  const ownerUsername = owner?.username ?? 'Anónimo';

  const goToPostDetails = () => {
    if (onPress) onPress();
    else router.push(`/post/${id}`);
  };

  const goToOwnerProfile = (e: GestureResponderEvent) => {
    e.stopPropagation();
    if (onOwnerPress) onOwnerPress();
    else router.push(`/profile/${ownerUsername}`);
  };

  return (
    <TouchableOpacity
      style={[styles.card, { height: cardHeight }, style]}
      onPress={goToPostDetails}
      activeOpacity={0.8}
    >
      <Image source={image} style={[styles.image, { height: imageHeight }]} />

      <View style={styles.titleContainer}>
        <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
          {title}
        </Text>
      </View>

      <View style={styles.infoRow}>
        <TouchableOpacity onPress={goToOwnerProfile} activeOpacity={0.7} style={styles.ownerNameContainer}>
          <Text style={styles.ownerName} numberOfLines={1} ellipsizeMode="tail">
            {ownerUsername}
          </Text>
        </TouchableOpacity>

        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <MaterialCommunityIcons name="download-outline" size={16} color="#bbb" />
            <Text style={styles.statText}>{downloads}</Text>
          </View>

          <TouchableOpacity
            onPress={() => {
              console.log(`Like presionado para modelo ${id}`);
            }}
            activeOpacity={0.7}
            style={[styles.statItem, { marginLeft: 16 }]}
          >
            <MaterialCommunityIcons name="heart-outline" size={16} color="#bbb" />
            <Text style={styles.statText}>{likes}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ModelCard;

const styles = StyleSheet.create({
  card: {
    borderRadius: 0,
    overflow: 'hidden',
    backgroundColor: '#121212',
    elevation: 4,
    width: '100%',
  },
  image: {
    width: '100%',
    resizeMode: 'cover',
    backgroundColor: '#333',
  },
  titleContainer: {
    height: TITLE_HEIGHT,
    backgroundColor: '#333333',
    justifyContent: 'center',
    paddingHorizontal: 12,
    borderTopWidth: 1,
    borderTopColor: '#333',
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    color: '#fff',
  },
  infoRow: {
    height: SUBTITLE_HEIGHT,
    backgroundColor: '#333333',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    borderTopWidth: 1,
    borderTopColor: '#333',
    justifyContent: 'space-between',
  },
  ownerNameContainer: {
    flex: 1,
    marginRight: 12,
  },
  ownerName: {
    color: '#bbb',
    fontSize: 12,
    fontWeight: '500',
  },
  statsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statText: {
    marginLeft: 4,
    color: '#bbb',
    fontSize: 12,
  },
});








