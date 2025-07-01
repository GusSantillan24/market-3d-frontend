import { Stack } from 'expo-router';

export default function StackLayout() {
  return (
    <Stack
      screenOptions={({ route }) => ({
        headerShown: route.name !== 'subir', 
        headerStyle: {
          backgroundColor: '#1E1E1E',
        },
        headerTintColor: '#fff',
      })}
    />
  );
}

