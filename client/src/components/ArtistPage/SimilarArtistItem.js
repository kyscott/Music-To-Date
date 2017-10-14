import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './SimilarArtistItem.css';

const SimilarArtistItem = props => {
  return (
<div className="col-md-9 similar-artists-container">

   <div className="card grid-content-container">
      <h4>{props.similarArtist1}</h4>
      <a href={props.similarArtist1}><img className='similar-artist-img' src={props.similarArtistImage1} alt={props.similarArtist}/>
      </a>
   </div>

   <div className="card grid-content-container">
      <h4>{props.similarArtist2}</h4>
      <a href={props.similarArtist2}><img className='similar-artist-img' src={props.similarArtistImage2} alt={props.similarArtist}/>
      </a>
   </div>

   <div className="card grid-content-container">
      <h4>{props.similarArtist3}</h4>
      <a href={props.similarArtist3}><img className='similar-artist-img' src={props.similarArtistImage3} alt={props.similarArtist}/>
      </a>
   </div>

   <div className="card grid-content-container">
      <h4>{props.similarArtist4}</h4>
      <a href={props.similarArtist4}><img className='similar-artist-img' src={props.similarArtistImage4} alt={props.similarArtist}/>
      </a>
   </div>

   <div className="card grid-content-container">
      <h4>{props.similarArtist5}</h4>
      <a href={props.similarArtist5}><img className='similar-artist-img' src={props.similarArtistImage5} alt={props.similarArtist}/>
      </a>
   </div>

</div>

  )
}

export default SimilarArtistItem;
