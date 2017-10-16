import React, { Component } from 'react';
import Nav from '../components/Homepage/Nav';
import MainArtistHeader from '../components/ArtistPage/MainArtistHeader';
import TopSongs from '../components/ArtistPage/TopSongs';
import SimilarArtists from '../components/ArtistPage/SimilarArtists';
import EventModal from '../components/ArtistPage/EventModal';
import GridContainer from '../components/ArtistPage/GridContainer';
import Tweets from '../components/ArtistPage/Tweets';
import Loader from '../components/ArtistPage/Loader';

import axios from 'axios';

const key = 'd66187414773dbf6291ba5b784512236';
const ytKey = ''

class ArtistPage extends Component {
   state = {
      result: {}
   };

   componentDidMount() {
      this.API.searchArtists(this.props.match.params.artistName);
      this.API.searchTopAlbums(this.props.match.params.artistName);
      // this.API.getTweets(this.props.match.params.artistName);
      // this.API.getYoutubeLink(this.props.match.params.artistName)
      // this.API.getEvents(this.props.match.params.artistName)
   };

   API = {
     searchArtists: query => {
        axios.get('http://ws.audioscrobbler.com/2.0/', {
              params: {
                 method: 'artist.getinfo',
                 api_key: key,
                 artist: query,
                 format: 'json',
                 autocorrect: '1'
              }
           })
           .then(
              res => this.setState({ result: res.data.artist
                
              }))
           .catch(err => console.log(err));
     },

     searchTopAlbums: query => {
        axios.get('http://ws.audioscrobbler.com/2.0/', {
              params: {
                 method: 'artist.getTopAlbums',
                 api_key: key,
                 artist: query,
                 format: 'json',
                 autocorrect: '1'
              }
           })
           .then(
              res => this.setState({ albumResult: res.data.topalbums }))
           .catch(err => console.log(err));
     },

     getTweets: query => {
        axios.get('', {
              params: {
                 track: query,
              }
           })
           .then(res => {
              console.log(res.data);
           })
           .catch(err => console.log(err));
     },

     getYoutubeLink: query => {

        axios.get('https://www.googleapis.com/youtube/v3/search', {
              params: {
                 key: ytKey,
                 q: query,
                 part: 'snippet,id',
                 order: 'date',
                 maxResults: 1
              }
           })
           .then(res => {

              console.log(res.data);
           })
           // res => this.setState({ ytLink: res.data }))
           .catch(err => console.log(err));
     },

     getEvents: query => {
        axios.get('http://api.songkick.com/api/3.0/artists/', {
              params: {
                 mbid: query,
                 apikey: '',
              }
           })
           .then(res => {
              console.log(res.data);
           })
           .catch(err => console.log(err));
     }
  };

   render() {
         console.log(this.state.result);
         console.log(this.state.albumResult);
         return (
      <div>
          <Nav />
              {/*<Loader>*/}
                    <Tweets />

                    <MainArtistHeader 
                    artistUrl = {this.state.result.url} 
                    artistName = {this.state.result.name} 
                    artistImage = {this.state.result.image ? this.state.result.image[3]["#text"]: ''}
                    artistImage = {this.state.result.image ? this.state.result.image[3]["#text"]: ''}
                    bio = {this.state.result.bio? this.state.result.bio.content.toString().substring(0, 500): ''}
                    mbid = {this.state.result.mbid}
                    />

                    <TopSongs 
                    artistName = {this.state.result.name} 
                    albumName1 = {this.state.albumResult ? this.state.albumResult.album[0].name: ''}
                    albumImage1 = {this.state.albumResult ? this.state.albumResult.album[0].image[3]["#text"]: ''}

                    albumName2 = {this.state.albumResult ? this.state.albumResult.album[1].name: ''}
                    albumImage2 = {this.state.albumResult ? this.state.albumResult.album[1].image[3]["#text"]: ''}

                    albumName3 = {this.state.albumResult ? this.state.albumResult.album[2].name: ''}
                    albumImage3 = {this.state.albumResult ? this.state.albumResult.album[2].image[3]["#text"]: ''}

                    albumName4 = {this.state.albumResult ? this.state.albumResult.album[3].name: ''}
                    albumImage4 = {this.state.albumResult ? this.state.albumResult.album[3].image[3]["#text"]: ''}

                    albumName5 = {this.state.albumResult ? this.state.albumResult.album[4].name: ''}
                    albumImage5 = {this.state.albumResult ? this.state.albumResult.album[4].image[3]["#text"]: ''}
                    />

                    <SimilarArtists 
                    similarArtist1 = {this.state.result.similar ? this.state.result.similar.artist[0].name: ''}
                    similarArtistImage1 = {this.state.result.similar ? this.state.result.similar.artist[0].image[3]["#text"]: ''}

                    similarArtist2 = {this.state.result.similar ? this.state.result.similar.artist[1].name: ''}
                    similarArtistImage2 = {this.state.result.similar ? this.state.result.similar.artist[1].image[3]["#text"]: ''}

                    similarArtist3 = {this.state.result.similar ? this.state.result.similar.artist[2].name: ''}
                    similarArtistImage3 = {this.state.result.similar ? this.state.result.similar.artist[2].image[3]["#text"]: ''}

                    similarArtist4 = {this.state.result.similar ? this.state.result.similar.artist[3].name: ''}
                    similarArtistImage4 = {this.state.result.similar ? this.state.result.similar.artist[3].image[3]["#text"]: ''}

                    similarArtist5 = {this.state.result.similar ? this.state.result.similar.artist[4].name: ''}
                    similarArtistImage5 = {this.state.result.similar ? this.state.result.similar.artist[4].image[3]["#text"]: ''}
                    />

              {/*</Loader>*/}
      </div>
    );
  }
};

export default ArtistPage;
