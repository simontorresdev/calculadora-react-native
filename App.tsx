import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import {Calculadora} from './src/screens/Calculadora';
import { styles } from './src/theme/App';

const App = () => {
  return (
    <SafeAreaView style={styles.fondo}>
      <StatusBar 
        backgroundColor="black"
        barStyle="light-content"
      />
      <Calculadora/>
    </SafeAreaView>
  );
};

export default App;
