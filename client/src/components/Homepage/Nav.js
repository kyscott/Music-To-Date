import React from 'react';
import './Nav.css'

const Nav = () => {
  return (
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
  )
}

export default Nav;
