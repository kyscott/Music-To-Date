import React from 'react';
import './Nav.css'

const Nav = props => {
  return (
<<<<<<< HEAD
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">Navbar</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
=======
<div>
   <nav class="navbar navbar-default">
      <div class="navbar-header">
         <a href="#">
            <img className="navbar-icon" alt="Home" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Circle-icons-volume.svg/1000px-Circle-icons-volume.svg.png"/>
         </a>

         <div className="form-inline">
            <input type="text" placeholder="Search"/>
            <input type="button" className="btn btn-default btn-sm" value="Search"/>
         </div>
      </div>
   </nav>
</div>
>>>>>>> 3d7f9a81f016a7c7c317fdfbc194374f43834970
  )
}

export default Nav;
