import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'


function DeckView({ route, navigation }){
    const { params } = route.params
    return (
    <View>
        <Text style={styles.heading}>{params.title}</Text>
        <Text style={styles.subHeading}>{params.cards.length} Cards</Text>
        <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.btn} onPress={ () => addCard(params, navigation)}>
                <Text style={{color:'#fff'}}>Add Card</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{...styles.btn, backgroundColor:'#f19a3e'}} onPress={() => startQuiz(params, navigation)}>
                <Text style={{color:'#fff'}}>Start Quiz</Text>
            </TouchableOpacity>
        </View>
       
    </View>
    )
  }
  function addCard(deck, navigation){
     navigation.navigate('AddNewCard', {
        params: deck
      });
  }

  function startQuiz(deck, navigation){
    navigation.navigate('QuizModalScreen', {
      params: deck
    });
  }

  const styles = StyleSheet.create({
      heading:{
        fontSize:20,
        marginTop: 40,
        padding: 20,
        alignSelf:'center'
      },
      subHeading:{
        fontSize:14,
        padding: 20,
        alignSelf:'center'
      },
    btnContainer: {
        marginTop: 50,
        alignSelf:'center'
       },
    btn: {
      backgroundColor: '#81ae9d',
      paddingLeft: 50,
      paddingRight:50,
      alignItems: 'center',
      justifyContent:'center',
      width:200,
      height:50,
      borderRadius:10,
      marginTop:10
     }
  })
  export default DeckView