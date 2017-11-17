import React, { Component } from 'react';
import Artist from '../components/Homepage/Artist/Artist';
import ArtistList from '../components/Homepage/ArtistList/ArtistList';

import '../App.css';

class Homepage extends Component {
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
      <div className="App">
        <Artist />
        <ArtistList email={this.props.userEmail}/>
      </div>
    );
  }
};

export default Homepage;
