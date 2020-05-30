import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'

import { updateEntry } from '../api'

class AddNewCard extends React.Component {
    state = {
        'question': '',
        'answer': ''
    }
    handleQuestionInput = (event) => {
        this.setState({'question': event.nativeEvent.text})
    }
    handleAnswerInput = (event) => {
        this.setState({'answer': event.nativeEvent.text})
    }
    handleInput = () => {
        let { params } = this.props.route.params
        updateEntry(params.id, this.state)
        this.props.navigation.navigate('DeckView')
    }
    render(){
        const { question, answer } = this.state
        return (
            <View>
                <Text style={styles.heading}>Add New Card to the Deck</Text>
                <View style={styles.inputContainer}>
                    <Text>Question</Text>
                    <TextInput style={styles.input} onChange={this.handleQuestionInput} value={question}></TextInput>
                    <Text style={{color:'#fff'}}>Answer</Text>
                    <TextInput style={styles.input} onChange={this.handleAnswerInput} value={answer}></TextInput>
                    <TouchableOpacity style={styles.btn} onPress={this.handleInput}>
                        <Text style={{color:'#fff'}}>Submit Card</Text>
                    </TouchableOpacity>
                </View>
            </View>
            )
    }
    
}

const styles = StyleSheet.create({
    heading:{
      fontSize:14,
      marginTop: 40,
      textAlign: 'center'
    },
    inputContainer:{
        marginTop: 50,
        alignSelf:'center'
       
    },
    input:{
        height: 60,
        width:300,
        padding: 8,
        borderWidth: 1,
        borderColor: '#757575',
        marginTop: 10,
        alignItems:'stretch'
    },
  btnContainer: {
      marginTop: 500
     },
  btn: {
    backgroundColor: '#81ae9d',
    paddingLeft: 50,
    paddingRight:50,
    alignItems: 'center',
    justifyContent:'center',
    width:300,
    height:50,
    borderRadius:10,
    marginTop:10
   }
})

export default AddNewCard