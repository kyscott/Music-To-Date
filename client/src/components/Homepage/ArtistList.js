import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import axios from 'axios';
import './ArtistList.css';
const keys = require('../../Keys.js');
class ArtistList extends Component {
  state = {
    userId: 0,
    artistIds: [],
    artistNames: [],
    artistLinks: []
  };
  componentDidMount() {
    console.log(this.props);
    axios.get('/api/userId', {
      params: {
        email: this.props.email
      }
    })
    .then((res) => {
      console.log(res);
      this.setState({
        userId: res.data[0].id
      });
      axios.get('/api/favorites', {
          params: {
            userId:  res.data[0].id
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
                    console.log(res.data.artist);
                    this.setState({
                      artistLinks: this.state.artistLinks.concat([res.data.artist.image[4]["#text"]])
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
      if(this.state.artistNames.length > 0) {
        console.log(this.state.artistLinks);
      }
  }
  // <div className="card grid-content-container artist-list">
  //    <h3>{res.data.artist.name}</h3>
  //    <img className='artist-img' src={res.data.artist.image[4]["#text"]} alt="artist-1"/>
  // </div>
  render() {
    return (
      <div className="col-md-8 favorite-artists-container">
        <p>{this.state.artistLinks[0]}</p>
      </div>
    )
  }
}
export default ArtistList;
