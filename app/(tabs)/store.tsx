import Colores from '@/constants/Colores';
import React from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const products = [
  {
    id: '1',
    title: 'Impresora 3D Ender 3 V2',
    price: '$289.99',
    image: '@/assets/images/impresora.png',
    category: 'Impresoras 3D',
  },
  {
    id: '2',
    title: 'Resina Elegoo Standard (1L)',
    price: '$35.50',
    image: '@/assets/images/resina.png',
    category: 'Materiales',
  },
  {
    id: '3',
    title: 'Filamento PLA 1.75mm (1KG)',
    price: '$22.90',
    image: 'https://i.imgur.com/Kdfcsxd.png',
    category: 'Materiales',
  },
  {
    id: '4',
    title: 'Oferta Especial: Kit de limpieza',
    price: '$9.99',
    image: 'https://i.imgur.com/pMHRXfX.png',
    category: 'Descuentos',
  },
];

const StoreScreen = () => {
  const renderSection = (title, filter) => {
    const filtered = products.filter(p => p.category === filter);

    return (
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{title}</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {filtered.map(product => (
            <View key={product.id} style={styles.card}>
              <Image source={{ uri: product.image }} style={styles.cardImage} />
              <Text style={styles.cardTitle}>{product.title}</Text>
              <Text style={styles.cardPrice}>{product.price}</Text>
              <TouchableOpacity style={styles.buyButton}>
                <Text style={styles.buyButtonText}>Comprar</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.header}>Tienda</Text>

        {/* Publicidad destacada */}
        <View style={styles.banner}>
          <Text style={styles.bannerText}>🔥 Descuento exclusivo en impresoras 3D hasta 25%</Text>
        </View>

        {renderSection('Impresoras 3D', 'Impresoras 3D')}
        {renderSection('Materiales', 'Materiales')}
        {renderSection('Ofertas y descuentos', 'Descuentos')}
      </ScrollView>
    </SafeAreaView>
  );
};

export default StoreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colores.background,
  },
  content: {
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  header: {
    fontSize: 26,
    fontWeight: '700',
    color: Colores.textPrimary,
    marginBottom: 20,
  },
  section: {
    marginBottom: 28,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Colores.textPrimary,
    marginBottom: 12,
  },
  card: {
    backgroundColor: Colores.backgroundSecondary,
    borderRadius: 12,
    padding: 12,
    marginRight: 16,
    width: 160,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },
  cardImage: {
    width: '100%',
    height: 100,
    borderRadius: 8,
    marginBottom: 8,
    resizeMode: 'contain',
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: Colores.textPrimary,
    marginBottom: 4,
  },
  cardPrice: {
    fontSize: 13,
    color: Colores.textSecondary,
    marginBottom: 8,
  },
  buyButton: {
    backgroundColor: '#3a86ff',
    paddingVertical: 6,
    borderRadius: 6,
    alignItems: 'center',
  },
  buyButtonText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '600',
  },
  banner: {
    backgroundColor: '#3a86ff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 24,
  },
  bannerText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});