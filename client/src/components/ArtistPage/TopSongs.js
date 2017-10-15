import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './css/TopSongs.css'

// http://itunes.com/{props.artistName}/{props.albumName[i]}


const TopSongs = props => {
  return (
<div className="col-md-9 top-songs-container">

	<div className="card grid-content-container hvr-grow">
	<a className="stream-link" href="#">
	   <h4>{props.albumName1}</h4>
	   <img className='top-song-img' src={props.albumImage1} alt={props.albumName1}/>
	   <i className="fa fa-music"></i> Listen</a>
	</div>

	<div className="card grid-content-container hvr-grow">
	<a className="stream-link" href="#">
   <h4>{props.albumName2}</h4>
   <img className='top-song-img' src={props.albumImage2} alt={props.albumName2}/>
   <i className="fa fa-music"></i> Listen</a>
</div>

	<div className="card grid-content-container hvr-grow">
	<a className="stream-link" href="#">
	   <h4>{props.albumName3}</h4>
	   <img className='top-song-img' src={props.albumImage3} alt={props.albumName3}/>
	   <i className="fa fa-music"></i> Listen</a>
	</div>

	<div className="card grid-content-container hvr-grow">
	<a className="stream-link" href="#">
	   <h4>{props.albumName4}</h4>
	   <img className='top-song-img' src={props.albumImage4} alt={props.albumName4}/>
	   <i className="fa fa-music"></i> Listen</a>
	</div>

	<div className="card grid-content-container hvr-grow">
	<a className="stream-link" href="#">
	   <h4>{props.albumName5}</h4>
	   <img className='top-song-img' src={props.albumImage5} alt={props.albumName5}/>
	   <i className="fa fa-music"></i> Listen</a>
	</div>
	
</div>
  )
}

export default TopSongs;
