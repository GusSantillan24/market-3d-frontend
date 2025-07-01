// components/ui/BloquePerfilUsuario/UserFeatureBlock.tsx
import { Feather, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const UserFeatureBlock = () => {
  return (
    <View style={styles.featuresRow}>
      {[
        {
          icon: <FontAwesome5 name="layer-group" size={20} color="#E0E0E0" />,
          label: 'Modelos',
          count: 12,
          route: '/modelos',
        },
        {
          icon: <MaterialIcons name="print" size={20} color="#E0E0E0" />,
          label: 'Configuración',
          count: 3,
          route: '/impresion/configuracion',
        },
        {
          icon: <Feather name="activity" size={20} color="#E0E0E0" />,
          label: 'Registros',
          count: 8,
          route: '/impresion/registros',
        },
      ].map(({ icon, label, count, route }) => (
        <TouchableOpacity
          key={label}
          style={styles.featureButton}
          onPress={() => router.push(route)}
        >
          <View style={styles.iconCount}>
            {icon}
            <Text style={styles.featureCount}>{count}</Text>
          </View>
          <Text style={styles.featureLabel}>{label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default UserFeatureBlock;

const styles = StyleSheet.create({
  featuresRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 12,
    paddingBottom: 10,
    borderBottomWidth: 1,
  },
  featureButton: {
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  iconCount: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  featureCount: {
    fontSize: 14,
    fontWeight: '600',
    color: '#E0E0E0',
    marginLeft: 4,
  },
  featureLabel: {
    fontSize: 12,
    color: '#E0E0E0',
    marginTop: 2,
  },
});
