import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../theme/App';

interface Props {
  texto: String,
  color?: String,
  ancho?: boolean,
  action: (numberText : String) => void
}

export const BotonCalc = ({ texto, color = "#2d2d2d", ancho = false, action } : Props) => {
  return (
    <TouchableOpacity
      onPress={() => action(texto)}
    >
      <View 
        style={{
          ...styles.boton,
          backgroundColor: color,
          width: ancho ? 180 : 80
        }}
        >
        <Text style={{
          ...styles.botonTexto,
          color: color === '#9b9b9b' ? 'black' : 'white'
        }}>
          {texto}
        </Text>
      </View>
    </TouchableOpacity>
  )
}
