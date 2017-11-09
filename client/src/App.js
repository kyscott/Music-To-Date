import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './App.css';
import Nav from './components/Nav/Nav';
import SignInPage from './views/SignInPage';
import Homepage from './views/Homepage';
import ArtistPage from './views/ArtistPage';


class App extends React.Component {
  state = {
  authenticated: false,
  userEmail: ''
}

render () { return (
  <Router>
    <div>
    {this.state.authenticated && <Nav />}
    <Route exact path='/' render={(props) => {
         return <SignInPage {...props} onSuccess={(email) => {
           console.log(email);
           this.setState({
             authenticated: true,
             userEmail: email
           })
         }} />
       }} />

      <Route path="/home" render={(props) => {
        return <Homepage {...props} userEmail={this.state.userEmail} />
      }}/>
      <Route path="/artist/:artistName" component={ArtistPage}/>
    </div>
  </Router>
)};
}

export default App;
