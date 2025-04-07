import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import Result from './Result';
import Classificacao from './Classificacao';
import PesoIdeal from './PesoIdeal';

export default function FormIMC() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setImc] = useState(null);

  function calcularIMC() {
    const alturaNum = parseFloat(altura);
    const pesoNum = parseFloat(peso);
    if (!isNaN(alturaNum) && !isNaN(pesoNum)) {
      const imcCalculado = pesoNum / (alturaNum * alturaNum);
      setImc(imcCalculado.toFixed(2));
    }
  }

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Altura (m)"
        keyboardType="numeric"
        value={altura}
        onChangeText={setAltura}
      />
      <TextInput
        style={styles.input}
        placeholder="Peso (kg)"
        keyboardType="numeric"
        value={peso}
        onChangeText={setPeso}
      />
      <Button title="Calcular IMC" onPress={calcularIMC} />
      {imc && (
        <>
          <Result imc={imc} />
          <Classificacao imc={parseFloat(imc)} />
          <PesoIdeal altura={altura} />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    padding: 10,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
});
