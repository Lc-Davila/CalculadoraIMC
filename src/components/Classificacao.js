import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Classificacao({ imc }) {
  function getClassificacao(imc) {
    if (imc < 18.5) return 'Abaixo do peso';
    if (imc < 25) return 'Peso normal';
    if (imc < 30) return 'Sobrepeso';
    if (imc < 35) return 'Obesidade grau 1';
    if (imc < 40) return 'Obesidade grau 2';
    return 'Obesidade grau 3 (mórbida)';
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Classificação: {getClassificacao(imc)}</Text>
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
    fontWeight: '600',
    color: '#333',
  },
});
