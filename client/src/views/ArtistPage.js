import React, { Component } from 'react';
import ArtistJumbotron from '../components/ArtistPage/ArtistJumbotron';
import EventModal from '../components/ArtistPage/EventModal';
import GridContainer from '../components/ArtistPage/GridContainer';
import SongItem from '../components/ArtistPage/SongItem';
import SimilarArtistItem from '../components/ArtistPage/SimilarArtistItem';
import Tweets from '../components/ArtistPage/Tweets';
import Nav from '../components/Homepage/Nav';

class ArtistPage extends Component {
  render() {
    return (
      <div>
        <Nav />
        {/*<Tweets />*/}
        <ArtistJumbotron/>
        <SongItem />
        <SimilarArtistItem />
        <GridContainer />
      </div>
    );
  }
};

export default ArtistPage;
