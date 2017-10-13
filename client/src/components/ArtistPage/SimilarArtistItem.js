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
	   <a href={props.similarArtistUrl} target="_blank"><img className='similar-artist-img' src={props.similarArtistImage} alt={props.similarArtist}/>
	   </a>
	</div>

	<div className="card grid-content-container">
	   <h4>Artist Name</h4>
	   <img className='similar-artist-img' src="https://gitlab.maikel.pro/uploads/maikeldus/WhatsSpy-Public/718515848e/team-person-placeholder.jpg" alt="artist-2"/>
	</div>	

	<div className="card grid-content-container">
	   <h4>Artist Name</h4>
	   <img className='similar-artist-img' src="https://gitlab.maikel.pro/uploads/maikeldus/WhatsSpy-Public/718515848e/team-person-placeholder.jpg" alt="artist-2"/>
	</div>

	<div className="card grid-content-container">
	   <h4>Artist Name</h4>
	   <img className='similar-artist-img' src="https://gitlab.maikel.pro/uploads/maikeldus/WhatsSpy-Public/718515848e/team-person-placeholder.jpg" alt="artist-2"/>
	</div>

	<div className="card grid-content-container">
	   <h4>Artist Name</h4>
	   <img className='similar-artist-img' src="https://gitlab.maikel.pro/uploads/maikeldus/WhatsSpy-Public/718515848e/team-person-placeholder.jpg" alt="artist-2"/>
	</div>	
</div>
  )
}

export default SimilarArtistItem;
