import Colores from '@/constants/Colores';
import { router } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const PerfilUsuarioCompleto = () => {
  return (
    <View style={styles.container}>

      {/* FILA PRINCIPAL: FOTO + DERECHA */}
      <View style={styles.topRow}>
        {/* FOTO */}
        <Image
          source={{ uri: 'https://i.pravatar.cc/150?img=12' }}
          style={styles.avatar}
        />

        {/* DERECHA: Botón + contadores */}
        <View style={styles.rightSection}>
          <TouchableOpacity
            style={styles.editButton}
            onPress={() => router.push('/settings/perfil')}
            activeOpacity={0.8}
          >
            <Text style={styles.editButtonText}>Editar perfil</Text>
          </TouchableOpacity>

          <View style={styles.statsRow}>
            {[
              { label: 'Siguiendo', count: 123, route: '/seguidores/siguiendo' },
              { label: 'Seguidores', count: 456, route: '/seguidores' },
              { label: 'Me gustas', count: 789, route: '/likes' },
            ].map(({ label, count, route }) => (
              <TouchableOpacity
                key={label}
                style={styles.statItem}
                onPress={() => router.push(route)}
              >
                <Text style={styles.statNumber}>{count}</Text>
                <Text style={styles.statLabel}>{label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>

      {/* NOMBRE Y BIO */}
      <View style={styles.infoSection}>
        <Text style={styles.username}>Nombre de Usuario</Text>
        <Text style={styles.bio} numberOfLines={3}>
          Biografía. Después hago pruebas claras.
        </Text>
      </View>
    </View>
  );
};

export default PerfilUsuarioCompleto;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colores.background,
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderColor: Colores.backgroundAccent,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#ccc',
    marginRight: 16,
  },
  rightSection: {
    flex: 1,
  },
  editButton: {
    alignSelf: 'flex-end',
    backgroundColor: Colores.backgroundAccent,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    marginBottom: 8,
  },
  editButtonText: {
    color: Colores.textPrimary,
    fontSize: 13,
    fontWeight: '500',
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statNumber: {
    color: Colores.textPrimary,
    fontSize: 15,
    fontWeight: '600',
  },
  statLabel: {
    color: Colores.textPrimary,
    fontSize: 13,
  },
  infoSection: {
    marginTop: 12,
  },
  username: {
    fontSize: 17,
    fontWeight: '600',
    color: Colores.textPrimary,
    marginBottom: 4,
  },
  bio: {
    fontSize: 14,
    color: Colores.textPrimary,
    lineHeight: 20,
  },
});

