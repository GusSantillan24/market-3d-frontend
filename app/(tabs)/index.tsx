import MasonryView from '@/components/MasonryView';
import ModelCard from '@/components/ModelCard';
import { mockModels } from '@/constants/mockModels';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Dimensions, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const { width, height } = Dimensions.get('window');

const iconTabs = [
  { label: 'Regalos', icon: 'gift-outline', color: '#4dabf7' },
  { label: 'Modelos Líderes', icon: 'trophy-outline', color: '#42a5f5' },
  { label: 'Concursos', icon: 'star-outline', color: '#90caf9' },
  { label: 'Diseñadores', icon: 'account-outline', color: '#64b5f6' },
  { label: 'Blogs', icon: 'notebook-outline', color: '#2196f3' },
];

const subTabs = ['Recientes', 'Populares', 'Favoritos', 'PLA', 'ABS', 'PETG', 'Diseños'];

const getRandomHeight = () => {
  const min = 220;
  const max = 320;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const MAX_TOP_HEIGHT = height * 0.33;

export default function HomeScreen() {
  const [selectedTab, setSelectedTab] = useState('Recientes');
  const insets = useSafeAreaInsets();
  const router = useRouter();

  const renderDynamicBar = () => {
    switch (selectedTab) {
      case 'Recientes':
        return (
          <View style={styles.filterBar}>
            <Text style={styles.filterText}>Orden: Nuevos primero</Text>
          </View>
        );
      case 'Populares':
        return (
          <View style={styles.filterBar}>
            <Text style={styles.filterText}>Filtrado por descargas</Text>
          </View>
        );
      case 'Favoritos':
        return (
          <View style={styles.filterBar}>
            <Text style={styles.filterText}>Tus favoritos</Text>
          </View>
        );
      default:
        return (
          <View style={styles.filterBar}>
            <Text style={styles.filterText}>Categoría: {selectedTab}</Text>
          </View>
        );
    }
  };

  const filteredData = mockModels.filter((item) => {
    if (selectedTab === 'Recientes') return true;
    if (selectedTab === 'Populares') return true;
    if (selectedTab === 'Favoritos') return item.favorito;
    return item.tags.includes(selectedTab.toLowerCase());
  });

  return (
    <SafeAreaView style={[styles.container, { paddingTop: insets.top }]}>
      <View style={[styles.topSection, { maxHeight: MAX_TOP_HEIGHT }]}>
        <Text style={styles.appTitle}>
          <Text style={styles.titleHighlight}>Gus</Text>Crá
        </Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.iconTabsContainer}
        >
          {iconTabs.map((item) => (
            <TouchableOpacity key={item.label} style={styles.iconButton}>
              <MaterialCommunityIcons
                name={item.icon}
                size={26}
                color={item.color}
                style={{ marginBottom: 6 }}
              />
              <Text
                style={[styles.iconLabel, { color: item.color }]}
                numberOfLines={2}
                adjustsFontSizeToFit
                minimumFontScale={0.8}
              >
                {item.label}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.tabsContainer}
        >
          {subTabs.map((tab) => (
            <TouchableOpacity
              key={tab}
              onPress={() => setSelectedTab(tab)}
              style={[styles.tabButton, selectedTab === tab && styles.tabButtonActive]}
            >
              <Text style={[styles.tabText, selectedTab === tab && styles.tabTextActive]}>
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {renderDynamicBar()}
      </View>

      <View style={styles.masonryContainer}>
        <MasonryView
          data={filteredData}
          numColumns={2}
          renderItem={({ item, style }) => (
            <ModelCard
              id={item.id}
              image={item.image}
              title={item.title}
              owner={item.owner}
              downloads={item.downloads}
              likes={item.likes}
              cardHeight={getRandomHeight()}
              style={style}
              onPress={() => router.push(`/post/${item.id}`)}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  topSection: {
    backgroundColor: '#121212',
  },
  appTitle: {
    fontSize: 30,
    fontWeight: '900',
    color: '#fff',
    marginBottom: 10,
    paddingHorizontal: 16,
    letterSpacing: 2,
  },
  titleHighlight: {
    color: '#3a86ff',
  },
  iconTabsContainer: {
    paddingHorizontal: 8,
    paddingBottom: 10,
    paddingTop: 4,
  },
  iconButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
    paddingVertical: 8,
    paddingHorizontal: 6,
    backgroundColor: '#2a2a2a',
    borderRadius: 14,
    height: 72,
    width: 82,
  },
  iconLabel: {
    fontSize: 11,
    fontWeight: '600',
    textAlign: 'center',
    lineHeight: 14, // para mejor lectura en 2 líneas
  },
  tabsContainer: {
    paddingHorizontal: 8,
    paddingVertical: 6,
  },
  tabButton: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 20,
    backgroundColor: '#2a2a2a',
    marginRight: 8,
  },
  tabButtonActive: {
    backgroundColor: '#3a86ff',
  },
  tabText: {
    color: '#aaa',
    fontSize: 13,
    fontWeight: '600',
  },
  tabTextActive: {
    color: '#fff',
  },
  filterBar: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#1e1e1e',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#2e2e2e',
  },
  filterText: {
    color: '#ccc',
    fontSize: 14,
  },
  masonryContainer: {
    flex: 1,
  },
});



