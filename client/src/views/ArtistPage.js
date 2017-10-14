import React, { Component } from 'react';
import ArtistJumbotron from '../components/ArtistPage/ArtistJumbotron';
import EventModal from '../components/ArtistPage/EventModal';
import GridContainer from '../components/ArtistPage/GridContainer';
import SongItem from '../components/ArtistPage/SongItem';
import SimilarArtistItem from '../components/ArtistPage/SimilarArtistItem';
import Tweets from '../components/ArtistPage/Tweets';
import Nav from '../components/Homepage/Nav';
import axios from 'axios';

const artistInfoUrl = 'http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=';
const similarArtistsUrl = 'http://ws.audioscrobbler.com/2.0/?method=artist.getSimilar&artist=';
const topAlbumsUrl = 'http://ws.audioscrobbler.com/2.0/?method=artist.getTopAlbums&artist=';
const key = '&api_key=d66187414773dbf6291ba5b784512236&format=json&autocorrect=1';

class ArtistPage extends Component {
  state= {
    result: {}
  };

componentDidMount() {
    this.searchArtists(this.props.match.params.artistName);
    this.searchTopAlbums(this.props.match.params.artistName);
  }
 
  searchArtists = query => {
    const queryURL = artistInfoUrl + query + key;
    console.log(queryURL);
    axios.get(queryURL)
      .then(
        res => this.setState({ result: res.data.artist })
      )
      .catch(err => console.log(err));
  };
 
searchTopAlbums = query => {
    const queryURL = topAlbumsUrl + query + key;
    console.log(queryURL);
    axios.get(queryURL)
      .then(
        res => this.setState({ albumResult: res.data.topalbums})
      )
      .catch(err => console.log(err));
  };

  // getTweets = query => {
  //   const queryURL = '';
  //       axios.get(queryURL)
  //     .then(res => { 
  //         console.log('');
  //     }
  //     )
  //     .catch(err => console.log(err));
  // };

  render() {
    console.log(this.state.result);
    return (
      <div>

        <Nav />

        <Tweets />

        <ArtistJumbotron 
        artistUrl = {this.state.result.url} 
        artistName = {this.state.result.name} 
        artistImage = {this.state.result.image ? this.state.result.image[3]["#text"]: ''}
        />

        <SongItem 
        albumName1 = {this.state.albumResult ? this.state.albumResult.album[0].name: ''}
        albumImage1 = {this.state.albumResult ? this.state.albumResult.album[0].image[2]["#text"]: ''}

        albumName2 = {this.state.albumResult ? this.state.albumResult.album[1].name: ''}
        albumImage2 = {this.state.albumResult ? this.state.albumResult.album[1].image[2]["#text"]: ''}

        albumName3 = {this.state.albumResult ? this.state.albumResult.album[2].name: ''}
        albumImage3 = {this.state.albumResult ? this.state.albumResult.album[2].image[2]["#text"]: ''}

        albumName4 = {this.state.albumResult ? this.state.albumResult.album[3].name: ''}
        albumImage4 = {this.state.albumResult ? this.state.albumResult.album[3].image[2]["#text"]: ''}

        albumName5 = {this.state.albumResult ? this.state.albumResult.album[4].name: ''}
        albumImage5 = {this.state.albumResult ? this.state.albumResult.album[4].image[2]["#text"]: ''}
        />

        <SimilarArtistItem 
        similarArtist1 = {this.state.result.similar ? this.state.result.similar.artist[0].name: ''}
        similarArtistImage1 = {this.state.result.similar ? this.state.result.similar.artist[0].image[2]["#text"]: ''}

        similarArtist2 = {this.state.result.similar ? this.state.result.similar.artist[1].name: ''}
        similarArtistImage2 = {this.state.result.similar ? this.state.result.similar.artist[1].image[2]["#text"]: ''}

        similarArtist3 = {this.state.result.similar ? this.state.result.similar.artist[2].name: ''}
        similarArtistImage3 = {this.state.result.similar ? this.state.result.similar.artist[2].image[2]["#text"]: ''}

        similarArtist4 = {this.state.result.similar ? this.state.result.similar.artist[3].name: ''}
        similarArtistImage4 = {this.state.result.similar ? this.state.result.similar.artist[3].image[2]["#text"]: ''}

        similarArtist5 = {this.state.result.similar ? this.state.result.similar.artist[4].name: ''}
        similarArtistImage5 = {this.state.result.similar ? this.state.result.similar.artist[4].image[2]["#text"]: ''}
        />

      </div>
    );
  }
};

export default ArtistPage;
