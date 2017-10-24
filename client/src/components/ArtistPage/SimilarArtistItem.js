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
          <h4>{props.similarArtist}</h4>
          <a href={props.similarArtist}><img className='similar-artist-img' src={props.similarArtistImage} alt={props.similarArtist}/>
          </a>
       </div>

       <div className="card grid-content-container">
          <h4>{props.similarArtist}</h4>
          <a href={props.similarArtist}><img className='similar-artist-img' src={props.similarArtistImage} alt={props.similarArtist}/>
          </a>
       </div>

       <div className="card grid-content-container">
          <h4>{props.similarArtist}</h4>
          <a href={props.similarArtist}><img className='similar-artist-img' src={props.similarArtistImage} alt={props.similarArtist}/>
          </a>
       </div>

       <div className="card grid-content-container">
          <h4>{props.similarArtist}</h4>
          <a href={props.similarArtist}><img className='similar-artist-img' src={props.similarArtistImage} alt={props.similarArtist}/>
          </a>
       </div>

       <div className="card grid-content-container">
          <h4>{props.similarArtist}</h4>
          <a href={props.similarArtist}><img className='similar-artist-img' src={props.similarArtistImage} alt={props.similarArtist}/>
          </a>
       </div>

    </div>

  )
}

export default SimilarArtistItem;
