import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import { generateUID } from '../utils'
import { submitEntry, getEntry } from '../api'
import { color } from 'react-native-reanimated';

class AddNewDeck extends React.Component {
    state = {
       name:''
    }
    handleInput = (event) => {
        this.setState({'name': event.nativeEvent.text})
    }
    submitDeck = () => {
        const key = generateUID()
        const entry = {
            id: key,
            title: this.state.name,
            cards:[],
        }
        submitEntry({key, entry})
        console.log(this.props.navigation)
        this.props.navigation.navigate('DeckView', {
            params: entry
        }
        
        )
    }
    render(){
        const { name } = this.state
        return (
            <View>
                <Text style={styles.heading}>Add New Deck</Text>
                <View style={styles.inputContainer}>
                    <Text>Name of the Deck</Text>
                    <TextInput style={styles.input} onChange={this.handleInput} value={name}></TextInput>
                    <TouchableOpacity style={styles.btn} onPress={this.submitDeck} disabled={this.state.name.length == 0}> 
                        <Text style={{color:'#fff'}}>Submit Deck</Text>
                    </TouchableOpacity>
                </View>
            </View>
            )
    }
    
}

const styles = StyleSheet.create({
    heading:{
      fontSize:20,
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
   },
})

export default AddNewDeck