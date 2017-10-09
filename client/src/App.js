import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './App.css';

import SignInPage from './views/SignInPage';
import Homepage from './views/Homepage';
import ArtistPage from './views/ArtistPage';


const App = () => (
  <Router>
    <div>


      <Route exact path="/" component={SignInPage}/>
      <Route path="/home" component={Homepage}/>
      <Route path="/artist" component={ArtistPage}/>
    </div>
  </Router>
)
export default App;
