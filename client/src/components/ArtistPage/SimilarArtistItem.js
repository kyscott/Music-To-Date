import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './SimilarArtistItem.css';

const SimilarArtistItem = () => {
  return (
<div className="col-md-9 similar-artists-container">
	<div className="card grid-content-container">
	   <h3>Artist Name</h3>
	   <img className='similar-artist-img' src="https://gitlab.maikel.pro/uploads/maikeldus/WhatsSpy-Public/718515848e/team-person-placeholder.jpg" alt="artist-2"/>
	</div>

	<div className="card grid-content-container">
	   <h3>Artist Name</h3>
	   <img className='similar-artist-img' src="https://gitlab.maikel.pro/uploads/maikeldus/WhatsSpy-Public/718515848e/team-person-placeholder.jpg" alt="artist-2"/>
	</div>	

	<div className="card grid-content-container">
	   <h3>Artist Name</h3>
	   <img className='similar-artist-img' src="https://gitlab.maikel.pro/uploads/maikeldus/WhatsSpy-Public/718515848e/team-person-placeholder.jpg" alt="artist-2"/>
	</div>

	<div className="card grid-content-container">
	   <h3>Artist Name</h3>
	   <img className='similar-artist-img' src="https://gitlab.maikel.pro/uploads/maikeldus/WhatsSpy-Public/718515848e/team-person-placeholder.jpg" alt="artist-2"/>
	</div>

	<div className="card grid-content-container">
	   <h3>Artist Name</h3>
	   <img className='similar-artist-img' src="https://gitlab.maikel.pro/uploads/maikeldus/WhatsSpy-Public/718515848e/team-person-placeholder.jpg" alt="artist-2"/>
	</div>	
</div>
  )
}

export default SimilarArtistItem;
