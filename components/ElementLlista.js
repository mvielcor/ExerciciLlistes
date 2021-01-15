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
  render(){
      return(
        <View elevation= {4} style={{backgroundColor:'orange'}}>
          <Text style={{color:'green', fontSize:20, fontWeight:'bold',margin:5}}>
            {this.props.elementAMostrar.item.profe}
          </Text>
        </View>
   )
  }
}