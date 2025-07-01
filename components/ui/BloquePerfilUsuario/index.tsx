// components/ui/BloquePerfilUsuario/UserProfileBlock.tsx
import Colores from '@/constants/Colores';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';

const UserProfileBlock = () => {
  return (
    <View style={styles.profileContainer}>
      {/* FOTO DE PERFIL CENTRADA */}
      <View style={styles.avatarSection}>
        <TouchableOpacity
          style={styles.avatarWrapper}
          onPress={() => router.push('/settings/perfil')}
        >
          <Image
            source={{ uri: 'https://placekitten.com/200/200' }}
            style={styles.avatar}
          />
        </TouchableOpacity>

        {/* BOTÓN PERFIL A LA DERECHA */}
        <TouchableOpacity
          style={styles.perfilButton}
          onPress={() => router.push('/profile')}
          activeOpacity={0.8}
        >
          <Text style={styles.perfilButtonText}>Perfil</Text>
          <Ionicons name="chevron-forward" size={18} color={Colores.textPrimary} />
        </TouchableOpacity>
      </View>

      {/* NOMBRE */}
      <Text style={styles.username}>Nombre de Usuario</Text>

      {/* CONTADORES DE SEGUIDORES */}
      <View style={styles.statsRow}>
        {[
          { label: 'Siguiendo', count: 123, route: '/seguidores/siguiendo' },
          { label: 'Seguidores', count: 456, route: '/seguidores' },
          { label: 'Me gustas', count: 789, route: '/likes' },
        ].map(({ label, count, route }) => (
          <TouchableOpacity
            key={label}
            style={styles.statButton}
            onPress={() => router.push(route)}
          >
            <Text style={styles.statNumber}>{count}</Text>
            <Text style={styles.statLabel}>{label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default UserProfileBlock;


const styles = StyleSheet.create({
  profileContainer: {
    backgroundColor: Colores.background,
    paddingVertical: 20,
    paddingBottom: 2,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderColor: Colores.backgroundAccent,
  },
  avatarSection: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginBottom: 10,
  },
  avatarWrapper: {
    borderRadius: 55,
    borderWidth: 2,
    borderColor: '#ccc',
    padding: 2,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#ddd',
  },
  perfilButton: {
    position: 'absolute',
    right: 0,
    top: '50%',
    transform: [{ translateY: -20 }],
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colores.backgroundAccent,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  perfilButtonText: {
    color: Colores.textPrimary,
    fontSize: 14,
    fontWeight: '500',
    marginRight: 4,
  },
  username: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 12,
    color: Colores.textPrimary,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 10,
  },
  statButton: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  statNumber: {
    fontSize: 16,
    fontWeight: '700',
    color: Colores.textPrimary,
  },
  statLabel: {
    fontSize: 13,
    color: Colores.textPrimary,
  },
});



