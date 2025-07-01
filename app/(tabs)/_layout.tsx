import { Tabs } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const tintColor = Colors[colorScheme ?? 'light'].tint;
  const inactiveColor = '#888';
  const insets = useSafeAreaInsets(); 

  function TabButton({ focused, iconName, label }) {
    return (
      <View style={[styles.tabButton, focused && styles.tabButtonActive]}>
        <MaterialCommunityIcons
          name={iconName}
          size={26}
          color={focused ? '#3a86ff' : inactiveColor}
          style={styles.icon}
        />
        <Text
          style={[
            styles.tabLabel,
            { color: focused ? '#3a86ff' : inactiveColor },
          ]}
          numberOfLines={1}
        >
          {label}
        </Text>
      </View>
    );
  }

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: {
          height: 50 + insets.bottom, // 👈 altura base + área segura
          paddingBottom: insets.bottom, // bottom dinámico
          paddingTop: 6,
          backgroundColor: '#121212',
          borderTopColor: '#2a2a2a',
          borderTopWidth: 1,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => (
            <TabButton focused={focused} iconName="home" label="Explorar" />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => (
            <TabButton focused={focused} iconName="magnify" label="Buscar" />
          ),
        }}
      />
      <Tabs.Screen
        name="store"
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => (
            <TabButton focused={focused} iconName="cart-outline" label="Tienda" />
          ),
        }}
      />
      <Tabs.Screen
        name="count"
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => (
            <TabButton focused={focused} iconName="account-circle-outline" label="Cuenta" />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    height: 56,
    paddingVertical: 4,
  },
  tabButtonActive: {
    backgroundColor: 'rgba(58, 134, 255, 0.1)',
    borderRadius: 14,
  },
  icon: {
    marginBottom: 2,
  },
  tabLabel: {
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'center',
  },
});





