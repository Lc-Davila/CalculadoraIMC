import React, { useState } from 'react'; // Hook para estado
import { View, TextInput, Button, StyleSheet } from 'react-native'; // Componentes nativos
import Result from './Result'; // Mostra o IMC
import Classificacao from './Classificacao'; // Mostra a classificação do IMC
import PesoIdeal from './PesoIdeal'; // Mostra o peso ideal

export default function FormIMC() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setImc] = useState(null);

  // Calcula o IMC
  function calcularIMC() {
    const alturaNum = parseFloat(altura);
    const pesoNum = parseFloat(peso);
    if (!isNaN(alturaNum) && !isNaN(pesoNum)) {
      const imcCalculado = pesoNum / (alturaNum * alturaNum);
      setImc(imcCalculado.toFixed(2)); // Arredonda para 2 casas
    }
  }

  return (
    <View style={styles.form}>
      {/* Campo de altura */}
      <TextInput
        style={styles.input}
        placeholder="Altura (m)"
        keyboardType="numeric"
        value={altura}
        onChangeText={setAltura}
      />

      {/* Campo de peso */}
      <TextInput
        style={styles.input}
        placeholder="Peso (kg)"
        keyboardType="numeric"
        value={peso}
        onChangeText={setPeso}
      />

      {/* Botão de calcular */}
      <Button title="Calcular IMC" onPress={calcularIMC} />

      {/* Se houver resultado, mostra os componentes */}
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

// Estilos
const styles = StyleSheet.create({
  form: {
   padding: 10,
   borderRadius: 10,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
});
