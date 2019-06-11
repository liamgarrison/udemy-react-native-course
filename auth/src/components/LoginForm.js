import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
  state = { email: '', password: '' }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label={'Email'}
            value={this.state.email}
            placeholder={'user@example.com'}
            onChangeText={(text) => this.setState({ email })}    
          />
        </CardSection>
        <CardSection>
        <Input
            label={'Password'}
            value={this.state.password}
            onChangeText={(text) => this.setState({ password })}    
          />
        </CardSection>
        <CardSection>
          <Button text={'Log In'} />
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
