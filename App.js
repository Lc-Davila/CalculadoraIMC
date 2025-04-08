import React from 'react';
import { View, StyleSheet } from 'react-native';

// Importa os componentes principais da aplicação
import Title from './src/components/Title';
import FormIMC from './src/components/FormIMC';

export default function App() {
  return (    
    // View principal que agrupa os componentes na tela
    <View style={styles.container}>
      <Title />
      <FormIMC />
    </View>
  );
}
// Estilo da tela principal
const styles = StyleSheet.create({
  container: {
    flex: 1,  // Ocupa toda a tela
    backgroundColor: '#fff', // Fundo branco
    padding: 8, // Espaçamento interno
    justifyContent: 'center', // Centraliza verticalmente
  },
});
