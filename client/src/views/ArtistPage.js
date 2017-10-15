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

const artistInfoUrl = 'http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=';
const similarArtistsUrl = 'http://ws.audioscrobbler.com/2.0/?method=artist.getSimilar&artist=';
const topAlbumsUrl = 'http://ws.audioscrobbler.com/2.0/?method=artist.getTopAlbums&artist=';
const key = '&api_key=d66187414773dbf6291ba5b784512236&format=json&autocorrect=1';

class ArtistPage extends Component {
   state = {
      result: {}
   };

   componentDidMount() {
      this.lastFM.searchArtists(this.props.match.params.artistName);
      this.lastFM.searchTopAlbums(this.props.match.params.artistName);
      // this.getTweets(this.props.match.params.artistName);
   };

   lastFM = {
      searchArtists: query => {
         const queryURL = artistInfoUrl + query + key;
         console.log(queryURL);
         axios.get(queryURL)
            .then(
               res => this.setState({ result: res.data.artist }))
            .catch(err => console.log(err));
      },

      searchTopAlbums: query => {
         const queryURL = topAlbumsUrl + query + key;
         console.log(queryURL);
         axios.get(queryURL)
            .then(
               res => this.setState({ albumResult: res.data.topalbums }))
            .catch(err => console.log(err));
      },

      // getTweets = query => {
      //   const queryURL = `http://aamirafridi.com/twitter/?q=${query}&count=20`;
      //       axios.get(queryURL)
      //     .then(res => { 
      //         // console.log(res.data);
      //     })
      //     .catch(err => console.log(err));
      // };
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
                    />

                    <TopSongs 
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
