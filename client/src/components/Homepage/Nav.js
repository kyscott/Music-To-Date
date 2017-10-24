import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './Nav.css';

const Nav = props => {
  return (
    <div>
       <nav className="navbar navbar-default">
          <div className="navbar-header">

             <Link to="/home">
                <img className="navbar-icon" alt="Home" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Circle-icons-volume.svg/1000px-Circle-icons-volume.svg.png"/>
             </Link>

             <div className="form-inline">
                <input
                  onChange={props.handleInputChange}
                  value={props.value}
                  type="text"
                  placeholder="Search"
                />
            <Link to={`/artist/${props.value}`}><input
                  type="button"
                  className="btn btn-default btn-sm"
                  value="Search" /></Link>
             </div>
          </div>
       </nav>
    </div>
  )
}

export default Nav;
