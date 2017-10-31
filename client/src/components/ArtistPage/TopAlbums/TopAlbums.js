import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './TopAlbums.css';

const TopAlbums = props => {

  const albums = props.albums

  let albumsList = [];

  if (albums) {

  for (var i = 0; i < 5; i++){
    albumsList.push(
    <div key={i} className="card grid-content-container hvr-grow">
      <a className="stream-link" href={`http://www.itunes.com/${props.artistName}/${albums[i].name}`} target="_blank">
         <h4>{albums[i].name}</h4>
         <img className='top-song-img' src={albums[i].image[3]["#text"]} alt={albums[i].name}/>
         <i className="fa fa-music listen"></i></a>
      </div>)
    }
  }

  return (
    <div className="col-md-9 top-songs-container">

      {albumsList}

    </div>
  )
}

export default TopAlbums;
