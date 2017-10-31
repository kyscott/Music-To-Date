import React, { Component } from 'react';
import {
   BrowserRouter as Router,
   Route,
   Link
} from 'react-router-dom';

import axios from 'axios';
import './ArtistList.css';

const keys = require('../../../Keys.js');

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
            }).then((res) => {
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
               }).then((res) => {
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
         return axios.get('http://ws.audioscrobbler.com/2.0/', {
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
      if(this.state.artistNamesUpdate) {
        console.log(this.state.artistLinks);
        console.log(this.state.artistNames);
      }
  }

  // componentDidUpdate() {
  //   let favoriteArtists = ''

  //   if (this.state.artistNamesUpdate) {
  //      favoriteArtists = this.state.artistLinks.map((favoriteArtistLink, i) => (
  //         <div key={i} className="card grid-content-container artist-list hvr-grow">
  //             <img className='artist-img' src={favoriteArtistLink} />
  //             <h3 className="artist-img-label">TEXT</h3>
  //         </div>
  //         ))
  //     }
  // }

  render() {
    return (
        <div className="col-md-10 favorite-artists-container">
        {/*{favoriteArtists}*/}

        <Link to = {`/artist/${this.state.artistNamesUpdate[0]}`}>
            <div className="card grid-content-container artist-list hvr-grow">
               <img className='artist-img' src={this.state.artistLinks[0]} />
               <h3 className="artist-img-label">{this.state.artistNamesUpdate[0]}</h3>
            </div>
          </Link>

          <Link to = {`/artist/${this.state.artistNamesUpdate[1]}`}>
            <div className="card grid-content-container artist-list hvr-grow">
               <img className='artist-img' src={this.state.artistLinks[1]} />
               <h3 className="artist-img-label">{this.state.artistNamesUpdate[1]}</h3>
            </div>
          </Link>

          <Link to = {`/artist/${this.state.artistNamesUpdate[2]}`}>
            <div className="card grid-content-container artist-list hvr-grow">
               <img className='artist-img' src={this.state.artistLinks[2]} />
               <h3 className="artist-img-label">{this.state.artistNamesUpdate[2]}</h3>
            </div>
          </Link>

          <Link to = {`/artist/${this.state.artistNamesUpdate[3]}`}>
            <div className="card grid-content-container artist-list hvr-grow">
               <img className='artist-img' src={this.state.artistLinks[3]} />
               <h3 className="artist-img-label">{this.state.artistNamesUpdate[3]}</h3>
            </div>
          </Link>

          <Link to = {`/artist/${this.state.artistNamesUpdate[4]}`}>
            <div className="card grid-content-container artist-list hvr-grow">
               <img className='artist-img' src={this.state.artistLinks[4]} />
               <h3 className="artist-img-label">{this.state.artistNamesUpdate[4]}</h3>
            </div>
          </Link>

        </div>
    )
  }
}

export default ArtistList;
