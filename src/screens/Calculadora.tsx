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

  const numberBuild = (numberText: string) => {
    
    // No aceptar doble punto
    if(number.includes('.') && numberText === '.') return

    if(number.startsWith('0') || number.startsWith('-0')){
      
      // punto decimal

      if(numberText === '.'){
        setNumber(number + numberText)

        // Evaluar si es otro 0  y hay punto
      }else if(numberText === '0' && number.includes('.')){
        setNumber(number + numberText)
        
        // Evaluar si es diferente de 0 y no tiene un punto
      }else if(numberText !== '0' && !number.includes('.')){
        setNumber(numberText)
      
        // Evitar 000.000
      }else if(numberText === '0' && !number.includes('.')){
        setNumber(number)
      }else{
        setNumber(number + numberText)
      }
    
    }else{
      setNumber(number + numberText)
    }

  }

  const positiveNegative = () => {
    if(number.includes('-')){
      setNumber(number.replace('-', ''))
    }else{
      setNumber('-' + number)
    }
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
        <BotonCalc texto="+/-" color="#9b9b9b" action={positiveNegative} />
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
