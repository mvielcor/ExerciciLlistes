import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    FlatList,
    Pressable,
} from 'react-native';
import { Badge } from 'react-native-elements';

export class ElementLlista extends Component {
    constructor(props) {
        super(props)

    }
    /* Callback que s'executarà quan l'usuari polse sobre un element de la llista 
       en principi només volem que ens mostre un alert amb el nom del profe seleccionat,
       però podriem fer qualsevol cosa.
    */
    elementPolsat(unElementDeLaLlistaClickat) {
        return (alert('Has seleccionat: ' + unElementDeLaLlistaClickat.profe))
    }

    viewPolsat(){
        return alert('View')
    }
    render() {
        return (
            <Pressable onPress={this.viewPolsat}>
                <View elevation={4} style={{ backgroundColor: 'orange', flexDirection: 'row', alignItems: 'center', justifyContent:'space-around' }}>
                    {/* Programem l'event onPress per a que execute un callback*/}
                    <View>
                        <Text style={{ color: 'green', fontSize: 20, fontWeight: 'bold', margin: 5 }}
                            onPress={this.elementPolsat.bind(this, this.props.elementAMostrar.item)}>
                            {this.props.elementAMostrar.item.profe}
                        </Text>
                    </View>
                    <View >
                        <Text>{this.props.elementAMostrar.item.modul}
                            <Badge value={this.props.elementAMostrar.item.hores + ' h.'} status="error" />
                        </Text>
                    </View>
                </View>
            </Pressable>
        )
    }
}