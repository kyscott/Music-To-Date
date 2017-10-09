import React, { Component } from 'react';
import ArtistJumbotron from '../components/ArtistPage/ArtistJumbotron';
import EventModal from '../components/ArtistPage/EventModal';
import GridContainer from '../components/ArtistPage/GridContainer';
import GridItem from '../components/ArtistPage/GridItem';
import Tweets from '../components/ArtistPage/Tweets';

class ArtistPage extends Component {
  render() {
    return (
      <div className="App">
        <ArtistJumbotron />
        <EventModal />
        <GridContainer />
        <GridItem />
        <Tweets />
      </div>
    );
  }
};

export default ArtistPage;
