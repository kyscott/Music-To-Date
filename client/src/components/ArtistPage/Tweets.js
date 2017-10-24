import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { Timeline } from 'react-twitter-widgets';
import './css/Tweets.css';


const Tweets = props => {
  if(props.verified === true) {
    return (
      <div className="col-md-4 sidebar">
         <div className="well">
          <div className="tweetListContainer">
            <Timeline
              dataSource={{
                sourceType: 'profile',
                screenName: props.username
              }}
              options={{
                height: '750'
              }}
            />
          </div>
         </div>
      </div>
    )
  } else {
    return <p></p>
  }
}

export default Tweets;
