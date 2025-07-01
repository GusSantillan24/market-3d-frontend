// layouts/NotificationsLayout.tsx
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ViewStyle, } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type Props = {
  children: React.ReactNode;
  containerStyle?: ViewStyle;
  onSettingsPress?: () => void;
};

const NotificationsLayout: React.FC<Props> = ({ children, containerStyle, onSettingsPress }) => {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.root, containerStyle]}>
      {/* Header */}
      <View style={[styles.header, { paddingTop: insets.top }]}>
        <TouchableOpacity onPress={() => router.replace('/count')} style={styles.button}>
          <Feather name="arrow-left" size={22} color="white" />
        </TouchableOpacity>

        <Text style={styles.title}>Notificaciones</Text>

        <TouchableOpacity onPress={() => router.push('/notificaciones/settings')} style={styles.button}>
          <Feather name="settings" size={22} color="white" />
        </TouchableOpacity>
      </View>

      {/* Contenido */}
      <View style={styles.content}>{children}</View>
    </View>
  );
};

export default NotificationsLayout;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#121212',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingBottom: 8,
    paddingTop: 16,
    borderBottomWidth: 1,
    borderColor: '#2a2a2a',
    backgroundColor: '#1E1E1E',
  },
  button: {
    padding: 8,
  },
  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 12,
    paddingTop: 10,
  },
});

