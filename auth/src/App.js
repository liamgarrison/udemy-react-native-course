import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };
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
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true })
      } else {
        this.setState({ loggedIn: false})
      }
    });
  }  

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
          return (
            <Button text={"Log Out"} onPress={() => firebase.auth().signOut() } />
          )
      case false:
          return <LoginForm />
      default:
        return <Spinner size="large" />
    }    
  }

 render() {
    return (
      <View>
        <Header headerText={"Authentication"}></Header>
        {this.renderContent()}
      </View>
    )
  }
}

export default App;