import React, { Component } from 'react';
import './App.css';
import ArtistJumbotron from './components/ArtistPage/ArtistJumbotron';
import EventModal from './components/ArtistPage/EventModal';
import GridContainer from './components/ArtistPage/GridContainer';
import GridItem from './components/ArtistPage/GridItem';
import LoginForm from './components/SignInPage/LoginForm';
import Nav from './components/Homepage/Nav';
import SignUpModal from './components/SignInPage/SignUpModal';
import Tweets from './components/ArtistPage/Tweets';
import Artist from './components/Homepage/Artist';
import ProfileContainer from './components/Homepage/ProfileContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ArtistJumbotron />
        <EventModal />
        <GridContainer />
        <GridItem />
        <LoginForm />
        <Nav />
        <SignUpModal />
        <Tweets />
        <Artist />
        <ProfileContainer />
      </div>
    );
  }
}

export default App;
