import React, { Component } from 'react';
import './App.css';

import SignInPage from './views/SignInPage';
import Homepage from './views/Homepage';
import ArtistPage from './views/ArtistPage';


// const App = () => (
//   <Router>
//     <div>
//       <ul>
//         <li><Link to="/">Sign In</Link></li>
//         <li><Link to="/index">Home</Link></li>
//         <li><Link to="/artist">Artist</Link></li>
//       </ul>
//
//       <hr/>
//
//       <Route exact path="/" component={Home}/>
//       <Route path="/about" component={About}/>
//       <Route path="/topics" component={Topics}/>
//     </div>
//   </Router>
// )
// export default App;



class App extends Component {
  render() {
    return (
      <div className="App">
        <ArtistPage />
        <Homepage />
        <SignInPage />
      </div>
    );
  }
}

export default App;
