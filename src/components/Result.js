import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Result({ imc }) {
  return (
    // Mostra o resultado do IMC calculado
    <View style={styles.result}>
      <Text style={styles.resultText}>Seu IMC é: {imc}</Text>
    </View>
  );
}

// Estilo do componente Result
const styles = StyleSheet.create({
  result: {
    marginTop: 20,           // Espaço acima do resultado
    alignItems: 'center',    // Centraliza texto
  },
  resultText: {
    fontSize: 18,            // Tamanho da fonte
    fontWeight: 'bold',      // Negrito
  },
});
export default Result;
