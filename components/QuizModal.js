import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native'

class QuizModalScreen extends React.Component {
    state = {
       correctCount: 0,
       counter: 0,
       showAnswer: false,
       resultView: false
    }
    showAnswer = () => {
        this.setState({showAnswer: true})
    }
    reStartQuiz = () => {
        this.setState({
            correctCount: 0,
            counter: 0,
            showAnswer: false,
            resultView: false
        })
    }
    updateCard = (score) => {
        if(this.state.counter < this.props.route.params.params.cards.length - 1)
        this.setState({
            counter: this.state.counter + 1,
            showAnswer: false,
            correctCount: this.state.correctCount + score
        })
        else{
            this.setState({
                correctCount: this.state.correctCount + score,
                resultView: true
            })
        }
    }
    render(){
        const { params } = this.props.route.params
        const { cards } = params 
        const correcScoreCount = 1
        const inCorrecScoreCount = 0
        if(this.state.resultView){
            return(
                <View style={styles.inputContainer}>
                    <Text style={styles.heading}>Result!</Text>
                        <Text style={styles.questionsContainer}>You answered {this.state.correctCount} out of {cards.length} correct!</Text>
                    <TouchableOpacity style={styles.btn} onPress={() => this.reStartQuiz()}> 
                                <Text style={{color:'#fff'}}>Restart</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn} onPress={() => this.props.navigation.goBack()}> 
                                <Text style={{color:'#fff'}}>Done</Text>
                    </TouchableOpacity>
                </View>
            )
        }
        if(cards.length > 0){
            return (
                <View>
                    <Text style={{marginTop: 100, padding: 20}}>{this.state.counter + 1}/{cards.length}</Text>
                    <Text style={styles.heading}>Quiz!</Text>
                    <View style={styles.questionsContainer}>
                        <Text>Question</Text>
                            <Text>{cards[this.state.counter].question}</Text>
                            {this.state.showAnswer && 
                            <View>
                                <Text>Answer</Text> 
                                <Text>{cards[this.state.counter].answer}</Text>
                            </View> 
                            }
                    </View>
                        <View style={styles.inputContainer}>
                            <TouchableOpacity style={styles.btn} onPress={() => this.showAnswer()}> 
                                <Text style={{color:'#fff'}}>Show Answer</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{...styles.btn, backgroundColor:'#abedc6'}} onPress={() => this.updateCard(correcScoreCount)}> 
                                <Text style={{color:'#fff'}}>Correct</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{...styles.btn, backgroundColor:'#800000'}} onPress={() => this.updateCard(inCorrecScoreCount)}> 
                                <Text style={{color:'#fff'}}>Incorrect</Text>
                            </TouchableOpacity>
                    </View>
                </View>
                )
        }else{
            return (
                <View style={styles.inputContainer}> 
                    <Text style={styles.heading}>You can not start the quiz without any cards in your deck...</Text>
                    <Button onPress={() => this.props.navigation.goBack()} title="Dismiss"/>
                </View>
            )
        }
    }
    
}

const styles = StyleSheet.create({
    heading:{
      fontSize:20,
      marginTop: 40,
      textAlign: 'center'
    },
    inputContainer:{
        marginTop: 300,
        alignSelf:'center' 
    },
    questionsContainer:{
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

export default QuizModalScreen