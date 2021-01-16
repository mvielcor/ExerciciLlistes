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
  ScrollView,
} from 'react-native';
import {ElementLlista} from './components/ElementLlista';
import {SeparadorLlista} from './components/SeparadorLlista';
import {DetallElementSeleccionat} from './components/DetallElementSeleccionat';

export class App extends Component {
  constructor(props) {
    super(props);
    //dadesAMostrar com a variable de l'estat de la classe
    //Afegim més informació al nostre array de dades
    this.state = {
      dadesAMostrar: [
        {
          profe: 'Manel',
          modul: 'DIN',
          hores: 120,
          email: 'mviel@florida-uni.es',
        },
        {
          profe: 'Belén',
          modul: 'SGE',
          hores: 100,
          email: 'mbgil@florida-uni.es',
        },
        {
          profe: 'Fran',
          modul: 'PMDM i PSP',
          hores: 160,
          email: 'fjserrano@florida-uni.es',
        },
        {
          profe: 'JuanMi',
          modul: 'ADA',
          hores: 120,
          email: 'jmalberola@florida-uni.es',
        },
        {
          profe: 'Caterina',
          modul: 'ANG',
          hores: 60,
          email: 'clatella@florida-uni.es',
        },
        {
          profe: 'Manuel',
          modul: 'EIE',
          hores: 40,
          email: 'mmiquel@florida-uni.es',
        },
      ],
      detallProfe: '',
      detallModul: '',
      detallHores: 0,
      detallEmail: '',
      mostrarDetall: false,
    };
  }
  /* funció que rep les dades de l'element seleccionat al FlatList, i ompli les dades
  del component DetallElementSeleccionat **/
  ompliDetall = (dadesElementSeleccionat) => {
    console.log(dadesElementSeleccionat)
    return this.setState({
      detallProfe: dadesElementSeleccionat.profe,
      detallModul: dadesElementSeleccionat.modul,
      detallHores: dadesElementSeleccionat.hores,
      detallEmail: dadesElementSeleccionat.email,
      mostrarDetall: true,
    });
  };

  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <View style={styles.body}>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Prova Llista</Text>
          </View>
          <View style={{height: 300}}>
            {/* Volem que al fer click en un nom de la llista ens mostre un alert indicant
              el nom que hem clicat en la llista*/}
            <FlatList
              data={this.state.dadesAMostrar}
              keyExtractor={(item, index) => index.toString()}
              style={{padding: 5}}
              renderItem={(item) => (
                <ElementLlista
                  elementAMostrar={item}
                  comunicaAlpareElementSeleccionat={this.ompliDetall}
                />
              )}
              ItemSeparatorComponent={() => <SeparadorLlista />}
            />
          </View>
          <ScrollView nestedScrollEnabled={true}>
            {this.state.mostrarDetall?(
              <DetallElementSeleccionat
                elementSeleccionat={{
                  nom: this.state.detallProfe,
                  modul: this.state.detallModul,
                  hores: this.state.detallHores,
                  email: this.state.detallEmail,
                }}
              />)
              :
              <View/>
            }
          </ScrollView>
        </View>
      </>
    );
  }
}

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
