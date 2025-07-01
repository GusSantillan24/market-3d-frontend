import { Feather, MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type Props = {
  onLike?: () => void;
  onSave?: () => void;
  onPrint?: () => void;
  onBatch?: () => void;
};

const PostActionsBar: React.FC<Props> = ({ onLike, onSave, onPrint, onBatch }) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingBottom: insets.bottom || 12 }]}>
      {/* Acciones izquierda */}
      <View style={styles.leftGroup}>
        <TouchableOpacity onPress={onBatch} style={styles.iconButton}>
          <MaterialIcons name="layers" size={22} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={onPrint} style={styles.iconButton}>
          <Feather name="printer" size={22} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Acciones derecha */}
      <View style={styles.rightGroup}>
        <TouchableOpacity onPress={onLike} style={styles.iconButton}>
          <Feather name="heart" size={22} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={onSave} style={styles.iconButton}>
          <Feather name="bookmark" size={22} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PostActionsBar;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 12,
    backgroundColor: '#121212',
    borderTopWidth: 1,
    borderTopColor: '#2a2a2a',
    zIndex: 100,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  leftGroup: {
    flexDirection: 'row',
    columnGap: 16,
  },
  rightGroup: {
    flexDirection: 'row',
    columnGap: 16,
  },
  iconButton: {
    padding: 6,
  },
});

