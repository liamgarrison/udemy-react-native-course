import React, { Component } from 'react';
import { Text } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './common';
import firebase from 'firebase';

class LoginForm extends Component {
  state = { email: '', password: '', error: '', loading: false }

  onButtonPress() {
    this.setState({error: '', loading: true});
    const { email, password } = this.state;
    console.log('calling firebase api');
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        console.log('could not sign in. attempting to sign up');
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(this.onLoginSuccess.bind(this))
        .catch(this.onLoginFail.bind(this));
      });
 
  }

  onLoginSuccess() {
    this.setState({
      loading: false,
      email: '',
      password: '',
      error: ''
    });
  }

  onLoginFail() {
    console.log('authentication failed');
    this.setState({
      error: 'Authentication Failed.',
      loading: false
    })
  }

  renderButton() {
    if (this.state.loading) {
      console.log('spinner loading')
      return <Spinner size={'small'} />;
    } 
    
    return <Button onPress={this.onButtonPress.bind(this)} text={'Log In'} />
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
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

styles = {
  errorTextStyle: {
    fontSize:20,
    alignSelf: 'center',
    color: 'red'
  }
}

export default LoginForm;
