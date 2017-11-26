import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
import './Nav.css';

class Nav extends Component {
  state = {
    search: ""
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      search: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
  };

  render() {
    return (
      <div>
         <nav className="navbar navbar-default">
            <div className="navbar-header">

               <Link to="/home">
                  <img src="/images/equalizer.png" className="navbar-icon" alt="Home"/>
                  <h1 className="homepageHeaderNav">Music To Date</h1>
               </Link>

               <div className="form-inline">
                  <input
                    onChange={this.handleInputChange}
                    value={this.state.search}
                    type="text"
                    placeholder="Search"
                  />
              <Link to={`/artist/${this.state.search}`}>
              <input
                    type="button"
                    className="fav-btn favs search-button"
                    value="Search" /></Link>
                <a
                    href="/"
                    className="log-out">Logout</a>
               </div>

            </div>
         </nav>
      </div>
    )
  }

}

export default Nav;
