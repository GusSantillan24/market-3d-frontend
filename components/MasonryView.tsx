import MasonryList from '@react-native-seoul/masonry-list';
import React from 'react';
import { StyleSheet, View } from 'react-native';

type MasonryViewProps<T> = {
  data: T[];
  numColumns?: number;
  renderItem: ({ item, style }: { item: T; style: any }) => React.ReactElement;
};

export default function MasonryView<T>({
  data,
  numColumns = 2,
  renderItem,
}: MasonryViewProps<T>) {
  return (
    <View style={styles.container}>
      <MasonryList
        data={data}
        numColumns={numColumns}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={styles.contentContainer}
        renderItem={({ item, style }) =>
          renderItem({ item, style: [style, styles.itemSpacing] })
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  contentContainer: {
    paddingHorizontal: 4, // separación mínima a los costados (milímetros)
    paddingRight: 4,
    paddingTop: 1,
    paddingBottom: 20, // pequeño margen inferior para que no se pegue
  },
  itemSpacing: {
    margin: 4, // separación mínima entre cards
    paddingRight: 4,
  },
});


