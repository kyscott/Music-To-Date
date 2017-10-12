import React, { Component } from 'react';
import Nav from '../components/Homepage/Nav';
import Artist from '../components/Homepage/Artist';
import ArtistList from '../components/Homepage/ArtistList';
import ArtistGridContainer from '../components/Homepage/ArtistGridContainer'

import axios from 'axios';
const BASEURL = 'http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=';
const APIKEYURL = '&api_key=d66187414773dbf6291ba5b784512236&format=json';

class Homepage extends Component {
  state = {
    result: {},
    search: ""
  };

  componentDidMount() {
    this.searchArtists("Kanye+West");
  }

  searchArtists = query => {
    const queryURL = BASEURL + query + APIKEYURL;
    console.log(queryURL);
    axios.get(queryURL)
      .then(
        res => this.setState({ result: res.data.artist })
      )
      .catch(err => console.log(err));
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
    this.searchArtists(this.state.search);
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
        <ArtistList artistName={this.state.result.name}/>
      </div>
    );
  }
};

export default Homepage;
