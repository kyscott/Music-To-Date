import React from 'react';
import {
} from 'react-router-dom';

import axios from 'axios';


class LoginForm extends React.Component {
  state = {
    email: '',
    password: ''
  }

  attemptSignIn() {
    const {email, password} = this.state;

    axios.post('/api/signin', this.state)
      .then(response => {
        console.log(response);
        this.props.onSuccess(response.data.email);
        this.props.history.push('/home');
      });
  }


  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this);
    this.attemptSignIn();
  }

  render() {
    return (
    <form id="signin" name="signin">
      <div className="form-group">
        <label htmlFor="SignInEmail">Email address</label>
        <input name="email" type="email" onChange={this.handleChange} className="form-control" id="SignInEmail" aria-describedby="emailHelp" placeholder="Enter email" />
      </div>
      <div className="form-group">
        <label htmlFor="SignInPassword">Password</label>
        <input name="password" type="password" onChange={this.handleChange} className="form-control" id="SignInPassword" placeholder="Password" />
      </div>
      <button type="submit" onClick={this.handleSubmit} className="signInBtn fav-btn favs" data-dismiss='modal'>Submit</button>
    </form>

    )
  }
}

export default LoginForm;
