import React, { Component } from 'react';
import Nav from '../components/Homepage/Nav';
import Artist from '../components/Homepage/Artist';
import ProfileContainer from '../components/Homepage/ProfileContainer';

class Homepage extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Artist />
        <ProfileContainer />
      </div>
    );
  }
};

export default Homepage;
