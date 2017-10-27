import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import './css/SimilarArtists.css';
import '../../hover.css'

const SimilarArtists = props => {

const simArtists = props.simArtists
let similarArtistsList = '';

if (simArtists) {
  similarArtistsList = simArtists.map((simArtist, i) => (
    <Link to = {`/artist/${simArtist.name}`}>
       <div className="card grid-content-container hvr-grow">
          <h4>{simArtist.name}</h4>
          <img className='similar-artist-img' src={simArtist.image[3]["#text"]} alt={simArtist.name}/>
      </div>
    </Link>
  ))
}
  return (
    <div className="col-md-9 similar-artists-container">
       {similarArtistsList}
    </div>
  )
}

export default SimilarArtists;
