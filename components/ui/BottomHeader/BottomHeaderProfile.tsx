// components/ui/HeaderButtons.tsx
import Colores from '@/constants/Colores';
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const HeaderButtons: React.FC = () => {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.headerContent}>
        {/* Botón de volver (izquierda) */}
        <TouchableOpacity onPress={() => router.back()} style={styles.button}>
          <Feather name="arrow-left" size={20} color="white" />
        </TouchableOpacity>

        <View style={styles.rightButtons}>
          {/* Configuración */}
          <TouchableOpacity onPress={() => router.push('/settings')} style={styles.button}>
            <Feather name="settings" size={20} color="white" />
          </TouchableOpacity>

          {/* Compartir perfil */}
          <TouchableOpacity onPress={() => console.log('Compartir perfil')} style={styles.button}>
            <Feather name="share-2" size={20} color="white" />
          </TouchableOpacity>
        </View>
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
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rightButtons: {
    flexDirection: 'row',
    gap: 16,
  },
  button: {
    padding: 8,
  },
});
