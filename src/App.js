import React from 'react';
import {View, Text,TextInput, Switch, StyleSheet, TouchableOpacity} from 'react-native';
import { Container } from '@mui/material/Container';

const App = () => {
  return (
    <Container maxWidth="xs">
    <View style={{padding: 10}}>
      <Text style={{marginBottom: 20}}>Carteira</Text>

      <View style={{backgroundColor: 'blue', padding: 10, borderRadius: 10}}>
        <View style={styles.view1}>
          <Text style={styles.saldo}>seu saldo</Text>
          <Switch />
        </View>
          <Text>R$ 500,00</Text>

          <TextInput style={{backgroundColor: '#fff', marginVertical: 10}}/>

          <View style={styles.view2}>

         
            <TouchableOpacity style={styles.button}>
              <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 16}}>Adicionar</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button}>
              <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 16}}>Remover</Text>
              </TouchableOpacity>
          </View>
      </View>
    </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  view1: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  saldo: {
    color: '#fff',
    fontSize: 30,
    textAlign: 'center',
    marginTop: 10,
  },
  view2: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  button: {
    height: 40,
    justifyContent: 'center',
    marginVertical: 10,
  }
});

export default App;
