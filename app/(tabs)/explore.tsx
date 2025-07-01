import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
  Keyboard,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const SearchScreen = () => {
  const insets = useSafeAreaInsets();

  const [query, setQuery] = useState('');
  const [history, setHistory] = useState(['Impresora', 'GusCrá', 'Modelos', 'Filamento PLA']);
  const trends = ['Warhammer', 'Fidget', 'Star Wars', 'Soporte Celular', 'GusCrásaurio', 'Lámparas LED'];

  const handleSearch = (text: string) => {
    if (!text.trim()) return;
    setHistory((prev) => [text, ...prev.filter((item) => item !== text)].slice(0, 10));
    setQuery('');
    Keyboard.dismiss();
    console.log('Buscando:', text);
  };

  return (
    <View style={[styles.container, { paddingTop: insets.top + 10 }]}>
      {/* Input de búsqueda */}
      <View style={styles.searchBar}>
        <MaterialCommunityIcons name="magnify" size={22} color="#999" />
        <TextInput
          style={styles.input}
          placeholder="Buscar modelos, diseñadores..."
          placeholderTextColor="#666"
          value={query}
          onChangeText={setQuery}
          onSubmitEditing={() => handleSearch(query)}
          returnKeyType="search"
        />
        {query.length > 0 && (
          <TouchableOpacity onPress={() => setQuery('')}>
            <MaterialCommunityIcons name="close-circle" size={20} color="#666" />
          </TouchableOpacity>
        )}
      </View>

      {/* Historial de búsqueda */}
      {history.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Historial</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.historyScroll}>
            {history.map((item, idx) => (
              <TouchableOpacity
                key={idx}
                style={styles.historyItem}
                onPress={() => handleSearch(item)}
              >
                <Text style={styles.historyText}>{item}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      )}

      {/* Tendencias del momento */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Tendencias del momento</Text>
        {trends.map((trend, idx) => (
          <TouchableOpacity
            key={idx}
            style={styles.trendItem}
            onPress={() => handleSearch(trend)}
          >
            <MaterialCommunityIcons name="fire" size={18} color="#ff6e40" />
            <Text style={styles.trendText}>{trend}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingHorizontal: 16,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1f1f1f',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: Platform.OS === 'ios' ? 10 : 8,
    marginBottom: 16,
  },
  input: {
    flex: 1,
    marginLeft: 8,
    color: '#fff',
    fontSize: 16,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 10,
  },
  historyScroll: {
    flexDirection: 'row',
    gap: 10,
  },
  historyItem: {
    backgroundColor: '#2a2a2a',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  historyText: {
    color: '#eee',
    fontSize: 13,
  },
  trendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 12,
    backgroundColor: '#1e1e1e',
    borderRadius: 10,
    marginBottom: 10,
  },
  trendText: {
    color: '#fff',
    marginLeft: 8,
    fontSize: 14,
    fontWeight: '500',
  },
});

