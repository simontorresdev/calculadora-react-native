import React, { useState } from 'react';
import {Text, View} from 'react-native';
import { BotonCalc } from '../components/BotonCalc';
import { styles } from '../theme/App';

export const Calculadora = () => {

  const [numberBefore, setNumberBefore] = useState('0')
  const [number, setNumber] = useState('0')

  const clear = () => {
    setNumber('0')
  } 

  const numberBuild = (numberText: String) => {
    setNumber(number + numberText)
  }

  return (
    <View style={styles.calculadoraContainer}>
      <Text style={styles.resultadoPequeño}>{ numberBefore }</Text>
      <Text 
        style={styles.resultado}
        numberOfLines={1}
        adjustsFontSizeToFit
      >
          { number }
      </Text>

      <View style={styles.fila}>
        <BotonCalc texto="C" color="#9b9b9b" action={clear} />
        <BotonCalc texto="+/-" color="#9b9b9b" action={clear} />
        <BotonCalc texto="del" color="#9b9b9b" action={clear} />
        <BotonCalc texto="/" color="#ff9427" action={clear} />
      </View>

      <View style={styles.fila}>
        <BotonCalc texto="7" action={numberBuild} />
        <BotonCalc texto="8" action={numberBuild} />
        <BotonCalc texto="9" action={numberBuild} />
        <BotonCalc texto="X" color="#ff9427" action={clear} />
      </View>

      <View style={styles.fila}>
        <BotonCalc texto="4" action={numberBuild} />
        <BotonCalc texto="5" action={numberBuild} />
        <BotonCalc texto="6" action={numberBuild} />
        <BotonCalc texto="-" color="#ff9427" action={clear} />
      </View>

      <View style={styles.fila}>
        <BotonCalc texto="1" action={numberBuild} />
        <BotonCalc texto="2" action={numberBuild} />
        <BotonCalc texto="3" action={numberBuild} />
        <BotonCalc texto="+" color="#ff9427" action={clear} />
      </View>

      <View style={styles.fila}>
        <BotonCalc texto="0" ancho action={numberBuild} />
        <BotonCalc texto="." action={numberBuild} />
        <BotonCalc texto="=" color="#ff9427" action={clear} />
      </View>

      
    </View>
  );
};
