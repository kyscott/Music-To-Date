const API = {
      lastfm: {
         searchArtists: query => {
            return axios.get('http://ws.audioscrobbler.com/2.0/', {
                  params: {
                     method: 'artist.getinfo',
                     api_key: keys.lastfm_api_key,
                     artist: query,
                     format: 'json',
                     autocorrect: '1'
                  }
               })
               .then(
                  res => {
                     this.setState({
                        result: res.data.artist,
                     })
                     console.log(this.state.result)
                     let mbid = this.state.result.mbid;
                  })
               .catch(err => console.log(err));
         },

         searchTopAlbums: query => {
            return axios.get('http://ws.audioscrobbler.com/2.0/', {
                  params: {
                     method: 'artist.getTopAlbums',
                     api_key: keys.lastfm_api_key,
                     artist: query,
                     format: 'json',
                     autocorrect: '1'
                  }
               })
               .then(
                  res => {
                     this.setState({
                        albumResult: res.data.topalbums

                     })
                     console.log(this.state.albumResult)
                  })
               .catch(err => console.log(err));
         }
      },

      // twitter: {
      //    getTweets: (query) => {
      //       let params = {
      //          screen_name: query,
      //          count: 10
      //       };

      //       client.get('statuses/user_timeline', params, (error, tweets, response) => {
      //          if (!error) {
      //             for (var i = 0; i < tweets.length; i++) {
      //                console.log("");
      //                console.log(tweets[i].created_at + ":");
      //                console.log(tweets[i].text);
      //             }
      //          }
      //       });
      //    }
      // },

      songkick: {
         getEvents: query => {
            console.log(`${this.props.match.params.artistName}'s mbid is: ${query}`);
            return axios.get("http://api.songkick.com/api/3.0/artists/mbid:" + query + "/calendar.json", {
                  params: {
                     apikey: keys.songkick_api_key
                  }
               })
               .then(res => {
                  const events = res.data.resultsPage.results.event;
                  
                  events.map(function(event) {
                     console.log("");

                     console.log(`Event Name: ${event.displayName} 
                        \n Event Link: ${event.uri} 
                        \n Start Date: ${event.start.date} 
                        \n Start Time: ${event.start.time}
                        \n Venue: ${event.venue.displayName}
                        \n Venue Link: ${event.venue.uri}
                        \n Location: ${event.location.city}`);

                     console.log("\n");
                  })
               })
               .catch(err => console.log(err));
         }
      }
   }