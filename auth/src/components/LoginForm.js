import React, { Component } from 'react';
import { Text } from 'react-native';
import { Button, Card, CardSection, Input } from './common';
import firebase from 'firebase';

class LoginForm extends Component {
  state = { email: '', password: '', error: '' }

  onButtonPress() {
    const { email, password } = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password)
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .catch(() => {
          this.setState({error: 'Authentication Failed.'})
        });
      });
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Text>Log in or sign up</Text>
        </CardSection>
        <CardSection>
          <Input
            label={'Email'}
            value={this.state.email}
            placeholder={'user@example.com'}
            onChangeText={(email) => this.setState({ email })}    
          />
        </CardSection>
        <CardSection>
        <Input
            label={'Password'}
            value={this.state.password}
            placeholder={'password'}
            secureTextEntry={true}
            onChangeText={(password) => this.setState({ password })}    
          />
        </CardSection>
        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)} text={'Log In'} />
        </CardSection>
      </Card>
    );
  }
}

styles = {
  errorTextStyle: {
    fontSize:20,
    alignSelf: 'cetner',
    color: 'red'
  }
}

export default LoginForm;
