import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

const LoginForm = () => {
  return (
    <form>
      <div className="form-group">
        <label for="SignInEmail">Email address</label>
        <input type="email" className="form-control" id="SignInEmail" aria-describedby="emailHelp" placeholder="Enter email" />
      </div>
      <div className="form-group">
        <label for="SignInPassword">Password</label>
        <input type="password" className="form-control" id="SignInPassword" placeholder="Password" />
      </div>
      <Link to="/home"><button type="submit" className="btn btn-primary" data-dismiss='modal'>Submit</button></Link>
    </form>
  )
}

export default LoginForm;
