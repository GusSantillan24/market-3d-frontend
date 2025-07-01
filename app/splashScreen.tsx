import Colores from '@/constants/Colores';
import { useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native';

const SplashScreen = () => {
  const router = useRouter();

  useEffect(() => {
    // Simula carga de datos o inicialización
    const timeout = setTimeout(() => {
      router.replace('/(tabs)'); 
    }, 2500);

    return () => clearTimeout(timeout);
  }, [router]);

  return (
    <View style={styles.container}>
      {/* Logo o imagen de splash */}
      <Image
        source={require('@/assets/images/logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Título o nombre */}
      <Text style={styles.title}>Mi App 3D Store</Text>

      {/* Loading spinner */}
      <ActivityIndicator size="large" color="#3a86ff" style={{ marginTop: 30 }} />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colores.background,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  title: {
    color: '#3a86ff',
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
