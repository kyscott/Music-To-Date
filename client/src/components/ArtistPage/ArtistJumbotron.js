import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import './ArtistJumbotron.css';

const ArtistJumbotron = props => {
  return (
    <div className="col-md-10 text-center main-artist-container">
      <h1 className="artist-header">{props.artistName}</h1>
      <a href={props.artistUrl} target="_blank">
        <img className="main-artist-image" src={props.artistImage} alt={props.artistName}/>
      </a>
      <br/>
      <br/>
      <button className='heart favs'><i className="fa fa-heart fa-1x" aria-hidden="true"></i> Favorite</button>
      <button className='delete favs'><i className="fa fa-1x" aria-hidden="true"></i> Unfavorite</button>
    </div>
  )
}

export default ArtistJumbotron;
