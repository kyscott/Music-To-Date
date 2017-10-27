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
    artistIds: []
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
          }).then(function(data) {
            console.log(data);
          })
        })
    });


  };
  render() {
    return (
      <div className="col-md-8 favorite-artists-container">
      	<div className="card grid-content-container artist-list">
      	   <h3>{this.props.artistName}</h3>
      	   <img className='artist-img' src="https://gitlab.maikel.pro/uploads/maikeldus/WhatsSpy-Public/718515848e/team-person-placeholder.jpg" alt="artist-1"/>
      	</div>

      	<div className="card grid-content-container artist-list">
      	   <h3>{this.props.artistName}</h3>
      	   <img className='artist-img' src="https://gitlab.maikel.pro/uploads/maikeldus/WhatsSpy-Public/718515848e/team-person-placeholder.jpg" alt="artist-2"/>
      	</div>

      	<div className="card grid-content-container artist-list">
      	   <h3>{this.props.artistName}</h3>
      	   <img className='artist-img' src="https://gitlab.maikel.pro/uploads/maikeldus/WhatsSpy-Public/718515848e/team-person-placeholder.jpg" alt="artist-3"/>
      	</div>

      	<div className="card grid-content-container artist-list">
      	   <h3>{this.props.artistName}</h3>
      	   <img className='artist-img' src="https://gitlab.maikel.pro/uploads/maikeldus/WhatsSpy-Public/718515848e/team-person-placeholder.jpg" alt="artist-4"/>
      	</div>

      	<div className="card grid-content-container artist-list">
      	   <h3>{this.props.artistName}</h3>
      	   <img className='artist-img' src="https://gitlab.maikel.pro/uploads/maikeldus/WhatsSpy-Public/718515848e/team-person-placeholder.jpg" alt="artist-5"/>
      	</div>
        <div className="card grid-content-container artist-list">
      	   <h3>{this.props.artistName}</h3>
      	   <img className='artist-img' src="https://gitlab.maikel.pro/uploads/maikeldus/WhatsSpy-Public/718515848e/team-person-placeholder.jpg" alt="artist-6"/>
      	</div>
      </div>
    )
  }
}
export default ArtistList;
