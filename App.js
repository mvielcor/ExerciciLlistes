/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  FlatList,
} from 'react-native';
import { ElementLlista } from './components/ElementLlista';

export class App extends Component {
  constructor(props){
    super(props)
    //dadesAMostrar com a variable de l'estat de la classe
    //Afegim més informació al nostre array de dades
    this.state={
      dadesAMostrar:[
        {profe:'Manel', modul:'DIN',hores:120},
        {profe:'Belén', modul:'SGE',hores:100},
        {profe:'Fran', modul:'PMDM i PSP',hores:160},
        {profe:'JuanMi', modul:'ADA',hores:120},
        {profe:'Caterina', modul:'ANG',hores:60},
        {profe:'Manuel', modul:'EIE',hores:40}
    ]
    }
  }
  
  render(){
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Prova Llista</Text>
        </View>
        <View style={{height:300}}>
          {/* Volem que al fer click en un nom de la llista ens mostre un alert indicant
              el nom que hem clicat en la*/}
          <FlatList
           data={this.state.dadesAMostrar} 
           keyExtractor={(item, index)=>index.toString()}
           style={{padding:5}}
           renderItem={(item)=>(<ElementLlista elementAMostrar={item}/>  )}
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
