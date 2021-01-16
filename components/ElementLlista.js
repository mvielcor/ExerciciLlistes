/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';
import {Badge} from 'react-native-elements';

export class ElementLlista extends Component {
  constructor(props) {
    super(props);
  }
  /* Callback que s'executarà quan l'usuari polse sobre un element de la llista
       en principi només volem que ens mostre un alert amb el nom del profe seleccionat,
       però podriem fer qualsevol cosa.
    */
  elementPolsat(unElementDeLaLlistaClickat) {
    return alert('Has seleccionat: ' + unElementDeLaLlistaClickat.profe);
  }

  render() {
    let element = this.props.elementAMostrar.item;
    return (
      /* Modifiquem el codi per a que quan polse en el view d'un element de la llista,
         li passe al component pare les dades del element clickat */
      <Pressable
        elevation={4}
        onPress={this.props.comunicaAlpareElementSeleccionat.bind(this, element)}
        style={{margin: 5, borderRadius: 5}}>
        {/*Afegim el component Pressable per a saber quan es clica sobre el view i distingir
                el click que fem sobre el text del nom del profe i el que fem sobre el view
            */}
        <View
          style={{
            backgroundColor: 'orange',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          {/* Programem l'event onPress per a que execute un callback quan cliquem sobre el nom del profe*/}
          <View>
            <Text
              style={styles.text}
              onPress={this.elementPolsat.bind(
                this,
                element,
              )}>
              {element.profe}
            </Text>
          </View>
          <View>
            <Text style={[styles.text, {color: 'black'}]}>
              {element.modul}
              <Badge
                value={element.hores + ' h.'}
                status="error"
              />
            </Text>
          </View>
        </View>
        <View style={{backgroundColor: 'orange', alignItems: 'center'}}>
          <Text style={{color: 'blue'}}>
            {element.email}
          </Text>
        </View>
      </Pressable>
    );
  }
}
const styles = StyleSheet.create({
  text: {color: 'green', fontSize: 20, fontWeight: 'bold', margin: 5},
});
