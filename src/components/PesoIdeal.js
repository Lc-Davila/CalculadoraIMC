import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function PesoIdeal({ altura }) {
  const alturaNum = parseFloat(altura); // Converte string para número
  if (isNaN(alturaNum)) return null;  // Se valor inválido, não mostra nada

   // Cálculos do peso ideal mínimo e máximo
  const pesoMin = (18.5 * alturaNum * alturaNum).toFixed(1);
  const pesoMax = (24.9 * alturaNum * alturaNum).toFixed(1);

  return (
        // Exibe os valores calculados
    <View style={styles.container}>
      <Text style={styles.text}>Peso ideal entre {pesoMin} kg e {pesoMax} kg</Text>
    </View>
  );
}
// Estilo do componente PesoIdeal

const styles = StyleSheet.create({
  container: {
    marginTop: 10, // Espaço acima
    alignItems: 'center', // Centraliza
  },
  text: {
    fontSize: 16, // Fonte média
    color: '#555', // Cinza
  },
});
