import React, { Component } from 'react';
// import './ArtistJumbotron.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import './ArtistJumbotron.css';

const ArtistJumbotron = () => {
  return (
<div className="col-md-10 text-center main-artist-container">
   <a href="#">
      <img className="main-artist-image" src="https://gitlab.maikel.pro/uploads/maikeldus/WhatsSpy-Public/718515848e/team-person-placeholder.jpg" alt="main artist image"/>
   </a>
</div>
  ) 
}

export default ArtistJumbotron;

