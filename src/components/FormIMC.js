import React, { useState } from 'react'; // Importa o React e o useState (Hook para gerenciar estado nos componentes)
import { View, TextInput, Button, StyleSheet } from 'react-native'; // Importa componentes da biblioteca React Native
import Result from './Result'; // Importa o componente que exibe o valor calculado do IMC
import Classificacao from './Classificacao'; // Importa o componente que mostra a classificação do IMC
import PesoIdeal from './PesoIdeal'; // Importa o componente que calcula e mostra o peso ideal com base na altura

export default function FormIMC() {
    // Estados para altura, peso e resultado do IMC
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setImc] = useState(null);

    // Função que calcula o IMC com base na fórmula
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
    //Campo para digitar altura
      <TextInput
        style={styles.input}
        placeholder="Altura (m)"
        keyboardType="numeric"
        value={altura}
        onChangeText={setAltura}
      />
          //Campo para digitar peso
      <TextInput
        style={styles.input}
        placeholder="Peso (kg)"
        keyboardType="numeric"
        value={peso}
        onChangeText={setPeso}
      />
          //Botão que aciona o cálculo
      <Button title="Calcular IMC" onPress={calcularIMC} />
          //Se o IMC for calculado, mostra os resultados
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
// Estilos do formulário
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
export default FormIMC;
