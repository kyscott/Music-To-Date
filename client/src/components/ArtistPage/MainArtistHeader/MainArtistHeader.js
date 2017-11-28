import React from 'react';
import {
} from 'react-router-dom';

import axios from 'axios';
import './MainArtistHeader.css';


const MainArtistHeader = props => {

  const handleFavoriteClick = event => {
    event.preventDefault();
      axios.post("/api/artist", {
        artist: props.artistName,
        image: props.artistImage
      })
     }

   const handleUnfavoriteClick = event => {
     event.preventDefault();
     axios.delete("/api/artist", {
      artist: props.artistName,
      image: props.artistImage
     })
   }

  return (
    <div className="col-md-9 main-artist-container">
      <a href={props.artistUrl} target="_blank">
      <h1 className="artist-header">{props.artistName}</h1>
        <img className="main-artist-image" src={props.artistImage} alt={props.artistName}/>
      </a>

      <div className='bio'>
        <p className='bio-align'>{props.bio}...</p>
      </div>

        <br/>
        <br/>

      <div className='buttons'>
        <button onClick={handleFavoriteClick} className='fav-btn favs' data-toggle='modal' data-target='#favoritedAlert'><i className="fa fa-heart fa-1x" aria-hidden="true"></i> Favorite</button>

        <button onClick={handleUnfavoriteClick} className='fav-btn favs' data-toggle='modal' data-target='#unfavoritedAlert'><i className="fa fa-remove fa-1x" aria-hidden="true"></i> Remove</button>

        <button type="button" className='tour-btn fav-btn favs' data-toggle='modal' data-target='#eventsModal'><i className="fa fa-calendar fa-1x" aria-hidden="true"></i> Tour Dates</button>
      </div>
  </div>

  )
}

export default MainArtistHeader;
