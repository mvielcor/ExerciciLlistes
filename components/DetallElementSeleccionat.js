/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {Card, Text, Icon} from 'react-native-elements';

export class DetallElementSeleccionat extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    //destructurem l'objecte rebut
    let {nom, modul, hores, email} = this.props.elementSeleccionat;

    return (
      <View>
        <Card containerStyle={styles.ombra}>
          <Card.Title style={{color: 'white'}}>Dades del Professor</Card.Title>
          <Card.Divider />
          <View style={{alignItems: 'center'}}>
            <Text>Nom: {nom} </Text>
            <Text>Mòdul: {modul} </Text>
            <Text>Email: {email} </Text>
            <Text>Hores: {hores} </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Icon
              raised
              name="edit"
              type="font-awesome-5"
              color="#f50"
              reverse={true}
            />
            <Icon
              raised
              name="trash-alt"
              type="font-awesome-5"
              color="#50f"
              reverse={true}
            />
          </View>
        </Card>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  ombra: {
    backgroundColor: '#0C6DF6',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
});
