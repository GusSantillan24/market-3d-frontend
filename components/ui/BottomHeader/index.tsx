// components/ui/HeaderButtons.tsx
import Colores from '@/constants/Colores';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const HeaderButtons: React.FC = () => {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.buttonsWrapper}>
        <TouchableOpacity onPress={() => router.push('/scanner')} style={styles.button}>
          <Feather name="camera" size={20} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/notificaciones')} style={styles.button}>
          <Feather name="bell" size={20} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/settings')} style={styles.button}>
          <Feather name="settings" size={20} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/cart')} style={styles.button}>
          <MaterialCommunityIcons name="cart-outline" size={20} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HeaderButtons;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colores.background,
    paddingHorizontal: 15,
    paddingBottom: 8,
    paddingVertical: 1,
    borderBottomWidth: 1,
    borderColor: Colores.backgroundAccent,
  },
  buttonsWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 16,
  },
  button: {
    padding: 8,
  },
});

