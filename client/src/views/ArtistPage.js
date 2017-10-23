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

const keys = require('../Keys.js')

class ArtistPage extends Component {
   state = {
      result: {},
      twitterResult: [],
      twitterUsername: ''
   };

// chain these together and have getTweets use response from searchArtists to get the artistName
   componentDidMount() {
      this.API.lastfm.searchArtists(this.props.match.params.artistName);
      this.API.lastfm.searchTopAlbums(this.props.match.params.artistName);
      this.API.songkick.getEvents("48262e82-db9f-4a92-b650-dfef979b73ec")
   };

API = {
   lastfm: {
      searchArtists: query => {
         return axios.get('http://ws.audioscrobbler.com/2.0/', {
            params: {
               method: 'artist.getinfo',
               api_key: keys.lastfm_api_key,
               artist: query,
               format: 'json',
               autocorrect: '1'
            }
         }).then(res => {
               this.setState({
                  result: res.data.artist,
               })
               console.log(this.state.result);
            }).then(artistName => {
              axios.post('/api/get-tweets', {
                searchArtist: this.state.result.name
              }).then((res) => {
                this.setState({
                  twitterResult: res.data,
                  twitterUsername: res.data[0].user.name
                })
                console.log(this.state.twitterResult);
              })
            }).catch(err => console.log(err));
         },

         searchTopAlbums: query => {
            axios.get('http://ws.audioscrobbler.com/2.0/', {
                  params: {
                     method: 'artist.getTopAlbums',
                     api_key: keys.lastfm_api_key,
                     artist: query,
                     format: 'json',
                     autocorrect: '1'
                  }
               }).then(res => {
                  this.setState({
                     albumResult: res.data.topalbums
                  })
                  console.log(this.state.albumResult)
               }).catch(err => console.log(err));
         }
      },

   songkick: {
      getEvents: query => {
         return axios.get("http://api.songkick.com/api/3.0/artists/mbid:" + query + "/calendar.json", {
            params: {
               apikey: keys.songkick_api_key
            }
         }).then(res => {
            this.setState({
               eventResult: res.data.resultsPage.results.event
            })
            this.state.eventResult.map(function(event) {
               console.log("");
               console.log(`
                        \n Event Name: ${event.displayName}
                        \n Event Link: ${event.uri}
                        \n Start Date: ${event.start.date}
                        \n Start Time: ${event.start.time}
                        \n Venue: ${event.venue.displayName}
                        \n Venue Link: ${event.venue.uri}
                        \n Location: ${event.location.city}
                        \n`);
               console.log("");
            })
         }).catch(err => console.log(err));
      }
   }
}

converter = {
   convertTime: time => {
      //return DO SOMETHING
   },

   convertDate: date => {
      //return DO SOMETHING
   }
}
   render() {
      return (
         <div >
         <Nav / >

         {/*<Loader>*/}

         <Tweets
          tweets={ this.state.twitterResult }
          username={ this.state.twitterUsername }
          />

         <MainArtistHeader artistUrl = { this.state.result.url }
         artistName = { this.state.result.name }
         artistImage = { this.state.result.image ? this.state.result.image[3]["#text"] : '' }
         bio = { this.state.result.bio ? this.state.result.bio.content.toString().substring(0, 500) : '' }
         mbid = { this.state.result.mbid }
         />

         <EventModal artistName = { this.state.result.name }
         eventName = { this.state.eventResult ? this.state.eventResult[0].displayName : '' }
         eventUrl = { this.state.eventResult ? this.state.eventResult[0].url : '' }
         eventDate = { this.state.eventResult ? this.state.eventResult[0].start.date : '' }
         eventTime = { this.state.eventResult ? this.state.eventResult[0].start.time : '' }
         venue = { this.state.eventResult ? this.state.eventResult[0].venue.displayName : '' }
         venueUrl = { this.state.eventResult ? this.state.eventResult[0].venue.uri : '' }
         location = { this.state.eventResult ? this.state.eventResult[0].location.city : '' }
         />



         <TopSongs artistName = { this.state.result.name }
         albumName01 = { this.state.albumResult ? this.state.albumResult.album[0].name : '' }
         albumImage01 = { this.state.albumResult ? this.state.albumResult.album[0].image[3]["#text"] : '' }
         iTunesLink01 = { `http://www.itunes.com/${this.state.result.name}/${this.state.albumResult ? this.state.albumResult.album[0].name : ''}` }

         albumName02 = { this.state.albumResult ? this.state.albumResult.album[1].name : '' }
         albumImage02 = { this.state.albumResult ? this.state.albumResult.album[1].image[3]["#text"] : '' }
         iTunesLink02 = { `http://www.itunes.com/${this.state.result.name}/${this.state.albumResult ? this.state.albumResult.album[1].name : ''}` }

         albumName03 = { this.state.albumResult ? this.state.albumResult.album[2].name : '' }
         albumImage03 = { this.state.albumResult ? this.state.albumResult.album[2].image[3]["#text"] : '' }
         iTunesLink03 = { `http://www.itunes.com/${this.state.result.name}/${this.state.albumResult ? this.state.albumResult.album[2].name : ''}` }

         albumName04 = { this.state.albumResult ? this.state.albumResult.album[3].name : '' }
         albumImage04 = { this.state.albumResult ? this.state.albumResult.album[3].image[3]["#text"] : '' }
         iTunesLink04 = { `http://www.itunes.com/${this.state.result.name}/${this.state.albumResult ? this.state.albumResult.album[3].name : ''}` }

         albumName05 = { this.state.albumResult ? this.state.albumResult.album[4].name : '' }
         albumImage05 = { this.state.albumResult ? this.state.albumResult.album[4].image[3]["#text"] : '' }
         iTunesLink05 = { `http://www.itunes.com/${this.state.result.name}/${this.state.albumResult ? this.state.albumResult.album[4].name : ''}` }
         />


         <SimilarArtists
         similarArtist01 = { this.state.result.similar ? this.state.result.similar.artist[0].name : '' }
         similarArtistImage01 = { this.state.result.similar ? this.state.result.similar.artist[0].image[3]["#text"] : '' }

         similarArtist02 = { this.state.result.similar ? this.state.result.similar.artist[1].name : '' }
         similarArtistImage02 = { this.state.result.similar ? this.state.result.similar.artist[1].image[3]["#text"] : '' }

         similarArtist03 = { this.state.result.similar ? this.state.result.similar.artist[2].name : '' }
         similarArtistImage03 = { this.state.result.similar ? this.state.result.similar.artist[2].image[3]["#text"] : '' }

         similarArtist04 = { this.state.result.similar ? this.state.result.similar.artist[3].name : '' }
         similarArtistImage04 = { this.state.result.similar ? this.state.result.similar.artist[3].image[3]["#text"] : '' }

         similarArtist05 = { this.state.result.similar ? this.state.result.similar.artist[4].name : '' }
         similarArtistImage05 = { this.state.result.similar ? this.state.result.similar.artist[4].image[3]["#text"] : '' }
         />

         {/*</Loader>*/}

         </div>
      );
   }
};

export default ArtistPage;
