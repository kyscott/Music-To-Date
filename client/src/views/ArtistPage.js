import React, { Component } from 'react';
import ArtistJumbotron from '../components/ArtistPage/ArtistJumbotron';
import EventModal from '../components/ArtistPage/EventModal';
import GridContainer from '../components/ArtistPage/GridContainer';
import SongItem from '../components/ArtistPage/SongItem';
import SimilarArtistItem from '../components/ArtistPage/SimilarArtistItem';
import Tweets from '../components/ArtistPage/Tweets';
import Nav from '../components/Homepage/Nav';
import axios from 'axios';
const BASEURL = 'http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=';
const APIKEYURL = '&api_key=d66187414773dbf6291ba5b784512236&format=json';

class ArtistPage extends Component {
  state= {
    result: {}
  };
  componentDidMount() {
    this.searchArtists(this.props.match.params.artistName);
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
    console.log(this.state.result);
    return (
      <div>
        <Nav />
        <Tweets />
        <ArtistJumbotron artistName={this.state.result.name} bio={this.state.result.bio? this.state.result.bio.content: ''}/>
        <SongItem />
        <SimilarArtistItem />
      </div>
    );
  }
};

export default ArtistPage;
