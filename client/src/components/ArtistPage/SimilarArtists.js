import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import './css/SimilarArtists.css';
import '../../hover.css'

const SimilarArtists = props => {
  return (
<div className="col-md-9 similar-artists-container">

   <div className="card grid-content-container hvr-wobble-vertical">
   <a href={props.similarArtist1}>
      <h4>{props.similarArtist1}</h4>
      <img className='similar-artist-img' src={props.similarArtistImage1} alt={props.similarArtist1}/>
      </a>
   </div>

   <div className="card grid-content-container hvr-wobble-vertical">
   <a href={props.similarArtist2}>
      <h4>{props.similarArtist2}</h4>
      <img className='similar-artist-img' src={props.similarArtistImage2} alt={props.similarArtist2}/>
      </a>
   </div>

   <div className="card grid-content-container hvr-wobble-vertical">
   <a href={props.similarArtist3}>
      <h4>{props.similarArtist3}</h4>
      <img className='similar-artist-img' src={props.similarArtistImage3} alt={props.similarArtist3}/>
      </a>
   </div>

   <div className="card grid-content-container hvr-wobble-vertical">
   <a href={props.similarArtist4}>
      <h4>{props.similarArtist4}</h4>
      <img className='similar-artist-img' src={props.similarArtistImage4} alt={props.similarArtist4}/>
      </a>
   </div>

   <div className="card grid-content-container hvr-wobble-vertical">
   <a href={props.similarArtist5}>
      <h4>{props.similarArtist5}</h4>
      <img className='similar-artist-img' src={props.similarArtistImage5} alt={props.similarArtist5}/>
      </a>
   </div>

</div>

  )
}

export default SimilarArtists;
