import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { Timeline } from 'react-twitter-widgets';
import './Tweets.css';


const Tweets = props => {
  if(props.verified === true) {
    return (
          <div className="tweetListContainer col-md-3">
            <Timeline
              dataSource={{
                sourceType: 'profile',
                screenName: props.username
              }}
              options={{
                height: '843'
              }}
            />
          </div>
    )
  } else {
    return <p></p>
  }
}

export default Tweets;
