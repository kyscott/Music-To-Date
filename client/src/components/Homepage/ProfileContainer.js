import React, { Component } from 'react';
import axios from 'axios';
const BASEURL = 'http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=';
const APIKEYURL = '&api_key=d66187414773dbf6291ba5b784512236&format=json';

class ProfileContainer extends Component {
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


  render() {
    return (
      <p>
        {this.state.result.name}
      </p>
    )
  }
}

export default ProfileContainer;
