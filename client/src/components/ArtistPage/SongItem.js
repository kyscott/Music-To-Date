import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './SongItem.css'

const SongItem = () => {
  return (
<div className="col-md-9 top-songs-container">
	<div className="card grid-content-container">
	   <h4>Song Name</h4>
	   <img className='similar-artist-img' src="https://gitlab.maikel.pro/uploads/maikeldus/WhatsSpy-Public/718515848e/team-person-placeholder.jpg" alt="artist-2"/>
	   <a className="stream-link" href="#"><i className="fa fa-music"></i> Listen Here</a>
	</div>

	<div className="card grid-content-container">
   <h4>Song Name</h4>
   <img className='similar-artist-img' src="https://gitlab.maikel.pro/uploads/maikeldus/WhatsSpy-Public/718515848e/team-person-placeholder.jpg" alt="artist-2"/>
   <a className="stream-link" href="#"><i className="fa fa-music"></i> Listen Here</a>
</div>

	<div className="card grid-content-container">
	   <h4>Song Name</h4>
	   <img className='similar-artist-img' src="https://gitlab.maikel.pro/uploads/maikeldus/WhatsSpy-Public/718515848e/team-person-placeholder.jpg" alt="artist-2"/>
	   <a className="stream-link" href="#"><i className="fa fa-music"></i> Listen Here</a>
	</div>

	<div className="card grid-content-container">
	   <h4>Song Name</h4>
	   <img className='similar-artist-img' src="https://gitlab.maikel.pro/uploads/maikeldus/WhatsSpy-Public/718515848e/team-person-placeholder.jpg" alt="artist-2"/>
	   <a className="stream-link" href="#"><i className="fa fa-music"></i> Listen Here</a>
	</div>

	<div className="card grid-content-container">
	   <h4>Song Name</h4>
	   <img className='similar-artist-img' src="https://gitlab.maikel.pro/uploads/maikeldus/WhatsSpy-Public/718515848e/team-person-placeholder.jpg" alt="artist-2"/>
	   <a className="stream-link" href="#"><i className="fa fa-music"></i> Listen Here</a>
	</div>
</div>
  )
}

export default SongItem;
