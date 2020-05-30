import React from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView, FlatList, Button } from 'react-native'
import * as _DATA from '../utils'
import { getEntry, updateEntry } from '../api'
import { TouchableOpacity } from 'react-native-gesture-handler';

import DeckView from './DeckView'

export default class DeckList extends React.Component {
  constructor(){
    super()
    this.state = {
      'decks': []
    }
  }
  componentDidMount(){
    getEntry().then((resp) => {
        this.setState({
          'decks': resp
        })
      })
  }
  
  render(){
    return (
      <View style={{paddingBottom:100, height: 'auto' }}>
          <Text style={styles.header}>Decks</Text>
          <FlatList
            data={this.state.decks}
            renderItem={({ item }) => <Item item={item} navigation={this.props.navigation}/>}
            keyExtractor={item => item.id}
          />
        </View>
     );
    }
}

  function loadDeck(item, navigation){
    navigation.navigate('DeckView', {
      params: item
    });
  }
  function Item({ item, navigation }) {
    return (
      <TouchableOpacity onPress={() => loadDeck(item, navigation)} style={styles.item}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.title}>{item.cards.length} cards</Text>
      </TouchableOpacity>
    );
  }


  const styles = StyleSheet.create({
    item: {
      backgroundColor: '#81ae9d',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      borderRadius:10
    },
    title: {
      fontSize: 14,
      color:'#fff'
    },
    header:{
      padding: 20,
      fontSize: 20,
    }
  })