import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Title() {
  return (
     // Caixa que contém o título
    <View style={styles.boxTitle}>
      <Text style={styles.textTitle}>Calculadora de IMC</Text>
    </View>
  );
}
// Estilos do componente Title

const styles = StyleSheet.create({
  boxTitle: {
    alignItems: 'center',  // centraliza horizontalmente
    justifyContent: 'center', // Centraliza verticalmente
    padding: 10, // Espaçamento interno
  },
  textTitle: {
    color: '#000', // Cor preta
    fontSize: 24, // Tamanho da fonte
    fontWeight: 'bold', //  Deixa em negrito
  },
});
