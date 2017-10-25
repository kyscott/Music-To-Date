import React, { Component } from 'react';
import Artist from '../components/Homepage/Artist';
import ArtistList from '../components/Homepage/ArtistList';
import ArtistGridContainer from '../components/Homepage/ArtistGridContainer'

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
        <ArtistList/>
      </div>
    );
  }
};

export default Homepage;
