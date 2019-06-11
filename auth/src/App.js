import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common'

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyAyeT1JAUZkKwmLHVtdwKNTn_tcFEGtYpg",
      authDomain: "udemy-authentication-57561.firebaseapp.com",
      databaseURL: "https://udemy-authentication-57561.firebaseio.com",
      projectId: "udemy-authentication-57561",
      storageBucket: "udemy-authentication-57561.appspot.com",
      messagingSenderId: "865442463284",
      appId: "1:865442463284:web:f72cdc00123f97a6"
    })
  }  

 render() {
    return (
      <View>
        <Header headerText={"Authentication"}></Header>
        <Text>Some Text</Text>
      </View>
    )
  }
}

export default App;