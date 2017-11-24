import React, { Component } from 'react';
import {
   Route,
   Link
} from 'react-router-dom';

import axios from 'axios';
import './ArtistList.css';

const keys = require('../../../Keys.js');

let favoriteArtistNames = '';
let favoriteArtistLinks = '';

class ArtistList extends Component {
   state = {
      userId: 0,
      artistIds: [],
      artistNames: [],
      artistLinks: [],
      artistNamesUpdate: []
   };

   componentDidMount() {
      axios.get('/api/userId', {
            params: {
               email: this.props.email
            }
         })
         .then((res) => {
            this.setState({
               userId: res.data[0].id
            });

            axios.get('/api/favorites', {
                  params: {
                     userId: res.data[0].id
                  }
               })
               .then((res) => {
                  let artistIdArray = res.data.map(i => {
                     return i.artistId
                  });
                  this.setState({
                     artistIds: artistIdArray
                  });

                  axios.get('/api/favorites-names', {
                        params: {
                           ids: artistIdArray
                        }
                     })
                     .then((res) => {
                        this.setState({
                           artistNames: res.data
                        })

                        let imageLinkArray = this.state.artistNames.map(item => {
                           searchArtists(item.artistName)
                              .then((res) => {
                                 this.setState({
                                    artistLinks: this.state.artistLinks.concat([res.data.artist.image[4]["#text"]]),
                                    artistNamesUpdate: this.state.artistNamesUpdate.concat([res.data.artist.name])
                                 })
                              })
                        })
                     })
               })
         });

      const searchArtists = (query) => {
         return axios.get('https://ws.audioscrobbler.com/2.0/', {
            params: {
               method: 'artist.getinfo',
               api_key: keys.lastfm_api_key,
               artist: query,
               format: 'json',
               autocorrect: '1'
            }
         })
      }
   };

  componentDidUpdate() {
      favoriteArtistNames = this.state.artistNames.map((favoriteArtistName, i) => (
             <Link key={i} to = {`/artist/${favoriteArtistName.artistName}`}>
            <div className="card grid-content-container artist-list hvr-grow">
               <img className='artist-img' src={favoriteArtistName.artistUrl} />
               <h3 className="artist-img-label">{favoriteArtistName.artistName}</h3>
            </div>
          </Link>
          ))
      }

  render() {
    return (
        <div className="col-md-10 favorite-artists-container">
        {favoriteArtistNames}
        </div>
    )
  }
}

export default ArtistList;
