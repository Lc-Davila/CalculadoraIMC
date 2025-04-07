import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Result({ imc }) {
  return (
    <View style={styles.result}>
      <Text style={styles.resultText}>Seu IMC é: {imc}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  result: {
    marginTop: 20,
    alignItems: 'center',
  },
  resultText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
