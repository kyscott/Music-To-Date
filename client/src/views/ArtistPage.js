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

import Twitter from 'twitter';
import moment from 'moment';

const keys = require('../Keys.js')

class ArtistPage extends Component {
   state = {
      result: {}
   };


// chain these together and have getTweets use response from searchArtists to get the artistName
   componentDidMount() {
      this.API.lastfm.searchArtists(this.props.match.params.artistName);
      this.API.lastfm.searchTopAlbums(this.props.match.params.artistName);
      this.API.twitter.getTweets();
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
               console.log(this.state.result)
               this.API.songkick.getEvents(this.state.result.mbid)

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

    twitter: {
      getTweets: () => {
        axios.get('/api/get-tweets').then((res) => {
          this.setState({
            twitterResult: res.data
          })
          console.log(this.state.twitterResult);
        }).catch(err => console.log(err));
      }
    },

    artist: {
      handleClick: (e) =>{
        e.preventDefault();
        console.log("link clicked");
      }
    },

   songkick: {
      getEvents: query => {
      console.log(query);
         return axios.get("http://api.songkick.com/api/3.0/artists/mbid:" + query + "/calendar.json", {
            params: {
               apikey: keys.songkick_api_key
            }
         }).then(res => {
            this.setState({
               eventResult: res.data.resultsPage.results.event
            })
            console.log(this.state.eventResult)
         }).catch(err => console.log(err));
      }
   }


}



// {this.state.twitterResult.map((tweet, i) => (
//    <Tweets twitterPost={tweet} key={i}/ >
// ))}
   render() {
      return (
         <div >
         <Nav / >

         {/*<Loader>*/}

         <Tweets />

         <MainArtistHeader
         artistUrl = { this.state.result.url }
         artistName = { this.state.result.name }
         artistImage = { this.state.result.image ? this.state.result.image[3]["#text"] : '' }
         bio = { this.state.result.bio ? this.state.result.bio.content.toString().substring(0, 500) : '' }
         mbid = { this.state.result.mbid }
         />

         <EventModal
         artistName = { this.state.result.name }
         eventName01 = { this.state.eventResult ? this.state.eventResult[0].displayName : '' }
         eventUrl01 = { this.state.eventResult ? this.state.eventResult[0].uri : '' }
         eventDate01 = { moment(this.state.eventResult ? this.state.eventResult[0].start.date : '').format("MMM Do YY") }
         eventTime01 = { moment(this.state.eventResult ? this.state.eventResult[0].start.time : '', 'HH:mm').format('hh:mm a') }
         venue01 = { this.state.eventResult ? this.state.eventResult[0].venue.displayName : '' }
         venueUrl01 = { this.state.eventResult ? this.state.eventResult[0].venue.uri : '' }
         location01 = { this.state.eventResult ? this.state.eventResult[0].location.city : '' }

         eventName02 = { this.state.eventResult ? this.state.eventResult[1].displayName : '' }
         eventUrl02 = { this.state.eventResult ? this.state.eventResult[1].uri : '' }
         eventDate02 = { moment(this.state.eventResult ? this.state.eventResult[1].start.date : '').format("MMM Do YY") }
         eventTime02 = { moment(this.state.eventResult ? this.state.eventResult[1].start.time : '', 'HH:mm').format('hh:mm a') }
         venue02 = { this.state.eventResult ? this.state.eventResult[1].venue.displayName : '' }
         venueUrl02 = { this.state.eventResult ? this.state.eventResult[1].venue.uri : '' }
         location02 = { this.state.eventResult ? this.state.eventResult[1].location.city : '' }

         eventName03 = { this.state.eventResult ? this.state.eventResult[2].displayName : '' }
         eventUrl03 = { this.state.eventResult ? this.state.eventResult[2].uri : '' }
         eventDate03 = { moment(this.state.eventResult ? this.state.eventResult[2].start.date : '').format("MMM Do YY") }
         eventTime03 = { moment(this.state.eventResult ? this.state.eventResult[2].start.time : '', 'HH:mm').format('hh:mm a') }
         venue03 = { this.state.eventResult ? this.state.eventResult[2].venue.displayName : '' }
         venueUrl03 = { this.state.eventResult ? this.state.eventResult[2].venue.uri : '' }
         location03 = { this.state.eventResult ? this.state.eventResult[2].location.city : '' }

         eventName04 = { this.state.eventResult ? this.state.eventResult[3].displayName : '' }
         eventUrl04 = { this.state.eventResult ? this.state.eventResult[3].uri : '' }
         eventDate04 = { moment(this.state.eventResult ? this.state.eventResult[3].start.date : '').format("MMM Do YY") }
         eventTime04 = { moment(this.state.eventResult ? this.state.eventResult[3].start.time : '', 'HH:mm').format('hh:mm a') }
         venue04 = { this.state.eventResult ? this.state.eventResult[3].venue.displayName : '' }
         venueUrl04 = { this.state.eventResult ? this.state.eventResult[3].venue.uri : '' }
         location04 = { this.state.eventResult ? this.state.eventResult[3].location.city : '' }

         eventName05 = { this.state.eventResult ? this.state.eventResult[4].displayName : '' }
         eventUrl05 = { this.state.eventResult ? this.state.eventResult[4].uri : '' }
         eventDate05 = { moment(this.state.eventResult ? this.state.eventResult[4].start.date : '').format("MMM Do YY") }
         eventTime05 = { moment(this.state.eventResult ? this.state.eventResult[4].start.time : '', 'HH:mm').format('hh:mm a') }
         venue05 = { this.state.eventResult ? this.state.eventResult[4].venue.displayName : '' }
         venueUrl05 = { this.state.eventResult ? this.state.eventResult[4].venue.uri : '' }
         location05 = { this.state.eventResult ? this.state.eventResult[4].location.city : '' }
         />

         <TopSongs
         artistName = { this.state.result.name }
         albumName01 = { this.state.albumResult ? this.state.albumResult.album[0].name : '' }
         albumImage01 = { this.state.albumResult ? this.state.albumResult.album[0].image[3]["#text"] : '' }
         albumLink01 = { this.state.albumResult ? this.state.albumResult.album[0].url : '' }

         albumName02 = { this.state.albumResult ? this.state.albumResult.album[1].name : '' }
         albumImage02 = { this.state.albumResult ? this.state.albumResult.album[1].image[3]["#text"] : '' }
         albumLink02 = { this.state.albumResult ? this.state.albumResult.album[1].url : '' }

         albumName03 = { this.state.albumResult ? this.state.albumResult.album[2].name : '' }
         albumImage03 = { this.state.albumResult ? this.state.albumResult.album[2].image[3]["#text"] : '' }
         albumLink03 = { this.state.albumResult ? this.state.albumResult.album[2].url : '' }

         albumName04 = { this.state.albumResult ? this.state.albumResult.album[3].name : '' }
         albumImage04 = { this.state.albumResult ? this.state.albumResult.album[3].image[3]["#text"] : '' }
         albumLink04 = { this.state.albumResult ? this.state.albumResult.album[3].url : '' }

         albumName05 = { this.state.albumResult ? this.state.albumResult.album[4].name : '' }
         albumImage05 = { this.state.albumResult ? this.state.albumResult.album[4].image[3]["#text"] : '' }
         albumLink05 = { this.state.albumResult ? this.state.albumResult.album[4].url : '' }
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
