import { Ionicons } from '@expo/vector-icons';
import { Stack, useRouter } from 'expo-router';
import { TouchableOpacity } from 'react-native';

export default function SettingsLayout() {
  const router = useRouter();

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'Configuraciones',
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.push('/count')} style={{ paddingHorizontal: 12 }}>
              <Ionicons name="arrow-back" size={24} color="white" />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => alert('Más opciones')} style={{ paddingHorizontal: 12 }}>
              <Ionicons name="ellipsis-vertical" size={24} color="white" />
            </TouchableOpacity>
          ),
        }}
      />

      <Stack.Screen
        name="perfil/index"
        options={{
          title: 'Mi perfil',
          // Se agrega automáticamente el botón de volver
        }}
      />
    </Stack>
  );
}


