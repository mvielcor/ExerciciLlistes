import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
} from 'react-native';

export class ElementLlista extends Component {
  constructor(props){
    super(props)
    
  }
  /* Callback que s'executarà quan l'usuari polse sobre un element de la llista 
     en principi només volem que ens mostre un alert amb el nom del profe seleccionat,
     però podriem fer qualsevol cosa.
  */
  elementPolsat(unElementDeLaLlistaClickat){
    return(alert('Has seleccionat: '+unElementDeLaLlistaClickat.profe))
  }

  render(){
      return( 
        <View elevation= {4} style={{backgroundColor:'orange'}}>
          {/* Programem l'event onPress per a que execute un callback*/}
          <Text style={{color:'green', fontSize:20, fontWeight:'bold',margin:5}}
            onPress={this.elementPolsat.bind(this, this.props.elementAMostrar.item)}>
            {this.props.elementAMostrar.item.profe}
          </Text>
        </View>
   )
  }
}