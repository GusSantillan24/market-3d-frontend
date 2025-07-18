import { Stack } from 'expo-router';

export default function NotificationsStackLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false, 
        }}
      />
      <Stack.Screen
        name="settings"
        options={{
          title: 'Configuración',
          headerStyle: { backgroundColor: '#1E1E1E' },
          headerTitleStyle: { color: '#fff' },
          headerTintColor: '#fff',
          headerBackTitleVisible: false,
        }}
      />
    </Stack>
  );
}


