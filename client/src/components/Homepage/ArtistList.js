import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
}
 from 'react-router-dom';
 import './ArtistList.css';

const ArtistList = props => {
  return (
    <div className="col-md-8 similar-artists-container">
    	<div className="card grid-content-container">
    	   <h3>{props.artistName}</h3>
    	   <img className='artist-img' src="https://gitlab.maikel.pro/uploads/maikeldus/WhatsSpy-Public/718515848e/team-person-placeholder.jpg" alt="artist-2"/>
    	</div>

    	<div className="card grid-content-container">
    	   <h3>{props.artistName}</h3>
    	   <img className='artist-img' src="https://gitlab.maikel.pro/uploads/maikeldus/WhatsSpy-Public/718515848e/team-person-placeholder.jpg" alt="artist-2"/>
    	</div>

    	<div className="card grid-content-container">
    	   <h3>{props.artistName}</h3>
    	   <img className='artist-img' src="https://gitlab.maikel.pro/uploads/maikeldus/WhatsSpy-Public/718515848e/team-person-placeholder.jpg" alt="artist-2"/>
    	</div>

    	<div className="card grid-content-container">
    	   <h3>{props.artistName}</h3>
    	   <img className='artist-img' src="https://gitlab.maikel.pro/uploads/maikeldus/WhatsSpy-Public/718515848e/team-person-placeholder.jpg" alt="artist-2"/>
    	</div>

    	<div className="card grid-content-container">
    	   <h3>{props.artistName}</h3>
    	   <img className='artist-img' src="https://gitlab.maikel.pro/uploads/maikeldus/WhatsSpy-Public/718515848e/team-person-placeholder.jpg" alt="artist-2"/>
    	</div>
      <div className="card grid-content-container">
    	   <h3>{props.artistName}</h3>
    	   <img className='artist-img' src="https://gitlab.maikel.pro/uploads/maikeldus/WhatsSpy-Public/718515848e/team-person-placeholder.jpg" alt="artist-2"/>
    	</div>
    </div>
  )
}
export default ArtistList;
