// layouts/UserListLayout.tsx
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

type Props = {
  children: React.ReactNode;
  containerStyle?: ViewStyle;
  onSearchPress?: () => void;
};

const UserListLayout: React.FC<Props> = ({ children, containerStyle, onSearchPress }) => {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView style={styles.safeArea} edges={['bottom']}>
      <View style={[styles.root, containerStyle]}>
        {/* Header */}
        <View style={[styles.header, { paddingTop: insets.top }]}>
          <TouchableOpacity onPress={() => router.replace('/(tabs)/count')} style={styles.button}>
            <Feather name="arrow-left" size={22} color="white" />
          </TouchableOpacity>

          <TouchableOpacity onPress={onSearchPress} style={styles.button}>
            <Feather name="search" size={22} color="white" />
          </TouchableOpacity>
        </View>

        {/* Contenido */}
        <View style={styles.content}>{children}</View>
      </View>
    </SafeAreaView>
  );
};

export default UserListLayout;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#121212', // fondo global oscuro
  },
  root: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingBottom: 4,
    borderBottomWidth: 1,
    borderColor: '#2a2a2a',
    backgroundColor: '#1E1E1E',
  },
  button: {
    padding: 8,
  },
  content: {
    flex: 1,
    paddingHorizontal: 12,
    paddingTop: 10,
  },
});


