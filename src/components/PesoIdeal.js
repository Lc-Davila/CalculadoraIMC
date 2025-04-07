import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function PesoIdeal({ altura }) {
  const alturaNum = parseFloat(altura);
  if (isNaN(alturaNum)) return null;

  const pesoMin = (18.5 * alturaNum * alturaNum).toFixed(1);
  const pesoMax = (24.9 * alturaNum * alturaNum).toFixed(1);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Peso ideal entre {pesoMin} kg e {pesoMax} kg</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    color: '#555',
  },
});
