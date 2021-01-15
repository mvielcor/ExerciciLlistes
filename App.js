/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  FlatList,
} from 'react-native';
import { ElementLlista } from './components/ElementLlista';
import {SeparadorLlista } from './components/SeparadorLlista';

export class App extends Component {
  constructor(props) {
    super(props)
    //dadesAMostrar com a variable de l'estat de la classe
    //Afegim més informació al nostre array de dades
    this.state = {
      dadesAMostrar: [
        { profe: 'Manel', modul: 'DIN', hores: 120, email: 'mviel@florida-uni.es' },
        { profe: 'Belén', modul: 'SGE', hores: 100, email: 'mbgil@florida-uni.es' },
        { profe: 'Fran', modul: 'PMDM i PSP', hores: 160, email: 'fjserrano@florida-uni.es' },
        { profe: 'JuanMi', modul: 'ADA', hores: 120, email: 'jmalberola@florida-uni.es' },
        { profe: 'Caterina', modul: 'ANG', hores: 60, email: 'clatella@florida-uni.es' },
        { profe: 'Manuel', modul: 'EIE', hores: 40, email: 'mmiquel@florida-uni.es' }
      ]
    }
  }

  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <View style={styles.body}>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Prova Llista</Text>
          </View>
          <View style={{ height: 300 }}>
            {/* Volem que al fer click en un nom de la llista ens mostre un alert indicant
              el nom que hem clicat en la llista*/}
            <FlatList
              data={this.state.dadesAMostrar}
              keyExtractor={(item, index) => index.toString()}
              style={{ padding: 5 }}
              renderItem={(item) => (<ElementLlista elementAMostrar={item} />)}
              ItemSeparatorComponent={()=>(<SeparadorLlista/>)}
            />

          </View>
        </View>
      </>
    );
  }
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'white',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
  },

});

export default App;
