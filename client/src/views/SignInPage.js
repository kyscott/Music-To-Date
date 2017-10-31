import React, { Component } from 'react';
import LoginForm from '../components/SignInPage/LoginForm/LoginForm';
import SignUpModal from '../components/SignInPage/SignUpModal/SignUpModal';

class SignInPage extends Component {
  render() {
    return (
      <div className="App container">
        <h1 className="homepageHeader">Music To Date</h1>
        <LoginForm {...this.props} />
        <SignUpModal {...this.props} />
      </div>
    );
  }
};

export default SignInPage;
