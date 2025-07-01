import { Feather } from '@expo/vector-icons';
import { Tabs, useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
    StyleSheet,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function ModelosLayout() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [searchText, setSearchText] = useState('');

  return (
    <View style={[styles.root, { paddingTop: insets.top }]}>
      {/* HEADER PERSONALIZADO */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.backButton}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <Feather name="arrow-left" size={22} color="#fff" />
        </TouchableOpacity>

        <View style={styles.searchContainer}>
          <Feather
            name="search"
            size={16}
            color="#999"
            style={{ marginRight: 8 }}
          />
          <TextInput
            placeholder="Buscar modelos..."
            placeholderTextColor="#aaa"
            style={styles.searchInput}
            value={searchText}
            onChangeText={setSearchText}
            returnKeyType="search"
            clearButtonMode="while-editing"
          />
        </View>

        <TouchableOpacity
          onPress={() => console.log('Abrir filtros')}
          style={styles.iconButton}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <Feather name="filter" size={22} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* PESTAÑAS */}
      <View style={styles.tabsWrapper}>
        <Tabs
          screenOptions={{
            headerShown: false,
            tabBarStyle: styles.tabBar,
            tabBarLabelStyle: styles.tabLabel,
            tabBarActiveTintColor: '#fff',
            tabBarInactiveTintColor: '#888',
            tabBarIndicatorStyle: styles.indicator,
          }}
        >
          <Tabs.Screen
            name="mis-modelos"
            options={{
              title: 'Mis modelos',
              tabBarIcon: ({ color }) => (
                <Feather name="grid" size={16} color={color} />
              ),
            }}
          />
          <Tabs.Screen
            name="likes"
            options={{
              title: 'Likes',
              tabBarIcon: ({ color }) => (
                <Feather name="heart" size={16} color={color} />
              ),
            }}
          />
          <Tabs.Screen
            name="comprados"
            options={{
              title: 'Comprados',
              tabBarIcon: ({ color }) => (
                <Feather name="shopping-bag" size={16} color={color} />
              ),
            }}
          />
          <Tabs.Screen
            name="descargas"
            options={{
              title: 'Descargados',
              tabBarIcon: ({ color }) => (
                <Feather name="download" size={16} color={color} />
              ),
            }}
          />
        </Tabs>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#121212',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E1E1E',
    borderBottomWidth: 1,
    borderColor: '#2a2a2a',
    paddingHorizontal: 12,
    paddingVertical: 10,
    gap: 8,
  },
  backButton: {
    paddingHorizontal: 4,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2a2a2a',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 6,
    flex: 1,
  },
  searchInput: {
    color: '#fff',
    fontSize: 14,
    flex: 1,
    padding: 0,
  },
  iconButton: {
    paddingHorizontal: 8,
  },
  tabsWrapper: {
    flex: 1,
  },
  tabBar: {
    backgroundColor: '#1E1E1E',
    borderTopWidth: 1,
    borderTopColor: '#2a2a2a',
  },
  tabLabel: {
    fontSize: 12,
    fontWeight: '500',
  },
  indicator: {
    backgroundColor: '#fff',
    height: 2,
  },
});




