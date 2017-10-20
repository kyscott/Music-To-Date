import React, { Component } from 'react';
import Nav from '../components/Homepage/Nav';
import Artist from '../components/Homepage/Artist';
import ArtistList from '../components/Homepage/ArtistList';
import ArtistGridContainer from '../components/Homepage/ArtistGridContainer'



class Homepage extends Component {
  state = {
    search: ""
  };

<<<<<<< HEAD
=======

>>>>>>> aca33c817f4b9e6d9a6ffb13e3cc756d829379bc
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
        <Nav
          value={this.state.search}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />
        <Artist />
        <ArtistList/>
      </div>
    );
  }
};

export default Homepage;
