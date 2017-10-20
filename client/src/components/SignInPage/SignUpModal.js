import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import axios from 'axios';

class SignUpModal extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  }

  attemptSignUp() {
    const {firstName, lastName, email, password} = this.state;
    axios.post('/signup', this.state)
      .then(response => {
        console.log(response);
      })
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    console.log(this);
    this.attemptSignUp();
  }

  render() {
    return (
      <div>
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#SignUpModal">
          Create a Login
        </button>

        <div className="modal fade" id="SignUpModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Sign up!</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <form id="signup" method="post" action="/">
                <div className="modal-body">
                  <div className="form-group">
                    <label htmlFor="SignUpFirstName">First Name</label>
                    <input name="firstname" onChange={this.handleChange} className="form-control" id="SignUpFirstName" placeholder="First Name"/>
                  </div>
                  <div className="form-group">
                  <label htmlFor="SignUpLastName">Last Name</label>
                  <input name="lastname" onChange={this.handleChange} className="form-control" id="SignUpLastName" placeholder="Last Name"/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="SignUpEmail">Email address</label>
                    <input name="email" onChange={this.handleChange} className="form-control" id="SignUpEmail" aria-describedby="emailHelp" placeholder="Enter email"/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="SignUpPassword">Password</label>
                    <input type="password" name="password" onChange={this.handleChange} className="form-control" id="SignUpPassword" placeholder="Password" />
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="submit" onClick={this.handleSubmit} className="btn btn-primary" data-dismiss='modal'>Sign Up</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default SignUpModal;
