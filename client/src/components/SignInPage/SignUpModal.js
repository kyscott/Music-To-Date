import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

const SignUpModal = () => {
  return (
    <div>
      <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#SignUpModal">
        Create a Login
      </button>

      <div className="modal fade" id="SignUpModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label for="SignUpEmail">Email address</label>
                  <input type="email" className="form-control" id="SignUpEmail" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div className="form-group">
                  <label for="SignUpPassword">Password</label>
                  <input type="password" className="form-control" id="SignUpPassword" placeholder="Password" />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="submit" className="btn btn-primary" data-dismiss='modal'>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUpModal;
