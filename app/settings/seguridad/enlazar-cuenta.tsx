import Colores from '@/constants/Colores';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const accounts = [
  {
    name: 'Google',
    icon: require('@/assets/images/google.png'),
    path: '/settings/seguridad/enlace/google',
  },
  {
    name: 'Facebook',
    icon: require('@/assets/images/facebook.png'),
    path: '/settings/seguridad/enlace/facebook',
  },
  {
    name: 'Twitter',
    icon: require('@/assets/images/x.png'),
    path: '/settings/seguridad/enlace/twitter',
  },
];

const EnlaceCuentaScreen = () => {
  const router = useRouter();

  // Ejemplo estado de cuentas vinculadas
  const [linkedAccounts, setLinkedAccounts] = useState({
    Google: false,
    Facebook: true,
    Twitter: false,
  });

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>

        {accounts.map((account) => {
          const isLinked = linkedAccounts[account.name];
          return (
            <TouchableOpacity
              key={account.name}
              style={styles.option}
              onPress={() => router.push(account.path)}
              activeOpacity={0.8}
            >
              <View style={styles.left}>
                <Image source={account.icon} style={styles.icon} />
                <Text style={styles.label}>{account.name}</Text>
              </View>
              <Text style={[styles.status, isLinked ? styles.linked : styles.notLinked]}>
                {isLinked ? 'Vinculado' : 'No enlazado'}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default EnlaceCuentaScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colores.background,
  },
  container: {
    padding: 20,
    gap: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: Colores.textPrimary,
    marginBottom: 24,
    textAlign: 'center',
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 20,
    backgroundColor: Colores.backgroundSecondary,
    borderRadius: 12,
    marginBottom: 12,
    // sombra sutil para levantar el botón
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    color: Colores.textPrimary,
    marginLeft: 12,
    fontWeight: '500',
  },
  status: {
    fontSize: 14,
    fontWeight: '600',
  },
  linked: {
    color: Colores.accentGreen ?? '#4CAF50',
  },
  notLinked: {
    color: Colores.accentRed ?? '#E53935',
  },
  icon: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
  },
});

