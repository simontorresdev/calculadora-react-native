import React, { useRef, useState } from 'react';
import {Text, View} from 'react-native';
import { BotonCalc } from '../components/BotonCalc';
import { styles } from '../theme/App';

enum Operadores {
  sumar, restar, multiplicar, dividir
}

export const Calculadora = () => {

  const [numberBefore, setNumberBefore] = useState('0')
  const [number, setNumber] = useState('0')

  const operation = useRef<Operadores>()

  const clear = () => {
    setNumber('0')
    setNumberBefore('0')
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

  const btnDelete = () => {
    const numberPositive = number.includes('-') ? number.replace('-', '') : number

    if(numberPositive.length === 1){
      setNumber('0')
    }else{
      setNumber(number.slice(0, -1))
    }
  }

  const changeBeforeNumber = () => {
    if(number.endsWith('.')){
      setNumberBefore(number.slice(0,-1))
    }else{
      setNumberBefore(number)
    }
    setNumber('0')
  }

  const btnDividir = () => {
    changeBeforeNumber()
    operation.current = Operadores.dividir
  }

  const btnSumar = () => {
    changeBeforeNumber()
    operation.current = Operadores.sumar
  }

  const btnRestar = () => {
    changeBeforeNumber()
    operation.current = Operadores.restar
  }

  const btnMultiplicar = () => {
    changeBeforeNumber()
    operation.current = Operadores.multiplicar
  }

  const calculate = () => {
    
    const num1 = Number(number)
    const num2 = Number(numberBefore)

    switch(operation.current){
      case Operadores.sumar: 
        setNumber(`${num1 + num2}`)
        break
      case Operadores.restar: 
        setNumber(`${num2 - num1}`)
        break         
      case Operadores.multiplicar: 
        setNumber(`${num1 * num2}`)
        break 
      case Operadores.dividir: 
        setNumber(`${num2 / num1}`)
        break 
      default: 
        setNumber('0')
        break
    }

    setNumberBefore('0')
  }

  return (
    <View style={styles.calculadoraContainer}>
      {numberBefore !== '0' &&
        <Text style={styles.resultadoPequeño}>{ numberBefore }</Text>
      }
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
        <BotonCalc texto="del" color="#9b9b9b" action={btnDelete} />
        <BotonCalc texto="/" color="#ff9427" action={btnDividir} />
      </View>

      <View style={styles.fila}>
        <BotonCalc texto="7" action={numberBuild} />
        <BotonCalc texto="8" action={numberBuild} />
        <BotonCalc texto="9" action={numberBuild} />
        <BotonCalc texto="X" color="#ff9427" action={btnMultiplicar} />
      </View>

      <View style={styles.fila}>
        <BotonCalc texto="4" action={numberBuild} />
        <BotonCalc texto="5" action={numberBuild} />
        <BotonCalc texto="6" action={numberBuild} />
        <BotonCalc texto="-" color="#ff9427" action={btnRestar} />
      </View>

      <View style={styles.fila}>
        <BotonCalc texto="1" action={numberBuild} />
        <BotonCalc texto="2" action={numberBuild} />
        <BotonCalc texto="3" action={numberBuild} />
        <BotonCalc texto="+" color="#ff9427" action={btnSumar} />
      </View>

      <View style={styles.fila}>
        <BotonCalc texto="0" ancho action={numberBuild} />
        <BotonCalc texto="." action={numberBuild} />
        <BotonCalc texto="=" color="#ff9427" action={calculate} />
      </View>

      
    </View>
  );
};
