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
            <Pressable elevation={4} onPress={this.viewPolsat} style={{margin:5, borderRadius:5}}>
            {/*Afegim el component Pressable per a saber quan es clica sobre el view i distingir
                el click que fem sobre el text del nom del profe i el que fem sobre el view 
            */}
                <View  style={{ backgroundColor: 'orange', flexDirection: 'row', alignItems: 'center', justifyContent:'space-around' }}>
                    {/* Programem l'event onPress per a que execute un callback quan cliquem sobre el nom del profe*/}
                    <View>
                        <Text style={styles.text}
                            onPress={this.elementPolsat.bind(this, this.props.elementAMostrar.item)}
                        >
                            {this.props.elementAMostrar.item.profe}
                        </Text>
                    </View>
                    <View >
                        <Text style={[styles.text,{color:'black'}]}>{this.props.elementAMostrar.item.modul}
                            <Badge value={this.props.elementAMostrar.item.hores + ' h.'} status="error" />
                        </Text>
                    </View>
                </View>
                <View style={{backgroundColor:'orange', alignItems:'center'}}>
                    <Text style={{color:'blue'}}>{this.props.elementAMostrar.item.email}</Text>
                </View>
            </Pressable>
        )
    }
}
const styles = StyleSheet.create({
    text: { color: 'green', fontSize: 20, fontWeight: 'bold', margin: 5 },
})