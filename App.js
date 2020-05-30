import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import DeckList from './components/DeckList'
import DeckView from './components/DeckView'
import AddNewCard from './components/AddNewCard'
import AddNewDeck from './components/AddNewDeck'
import QuizModalScreen from './components/QuizModal'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const RootStack = createStackNavigator();

function Home(){
  return (
          <Tab.Navigator>
            <Tab.Screen name="Decks" component={DeckList} />
            <Tab.Screen name="Add New Deck" component={AddNewDeck} />
          </Tab.Navigator>
  )
}

function MainStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="DeckView" component={DeckView} />
      <Stack.Screen name="AddNewCard" component={AddNewCard} />
  </Stack.Navigator>
  );
}

export default class App extends React.Component {
  render(){
    return (
      <NavigationContainer>
        <RootStack.Navigator mode="modal" headerMode="none">
          <RootStack.Screen name="Main" component={MainStackScreen} />
          <RootStack.Screen name="QuizModalScreen" component={QuizModalScreen} />
        </RootStack.Navigator>
      </NavigationContainer>
     );
  }
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginRight:10,
    alignItems: 'center',
    justifyContent:'center'
   }
})
