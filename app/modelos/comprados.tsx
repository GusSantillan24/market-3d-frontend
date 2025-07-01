import { StyleSheet, Text, View } from 'react-native';

export default function MisModelos() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tus modelos cargados aparecerán aquí</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
});
