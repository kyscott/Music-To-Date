import React, { Component } from 'react';
import LoginForm from '../components/SignInPage/LoginForm';
import SignUpModal from '../components/SignInPage/SignUpModal';

class SignInPage extends Component {
  render() {
    return (
      <div className="App">
        <LoginForm />
        <SignUpModal />
      </div>
    );
  }
};

export default SignInPage;
