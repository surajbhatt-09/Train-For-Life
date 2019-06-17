import React from 'react'
import {Link,NavLink} from 'react-router-dom';
import '../CssFiles/navbar.css'

const NavBar= ()=> {
    return (
        <div>
        <nav className="nav-wrapper grey darken-3 ">
     <div className="container"><a className="brand-logo" href="">Train For Life</a></div>
  
     <div class="heartrate"></div>
<ul className="right hide-on-med-and-down">
<li>
<form action='' className="form">
  <input type="search" className="input"/>
  <i class="search ifa fa fa-search"></i>
</form>
</li>
<li>  <Link to='/'>Home</Link></li>
    <li><Link to='/about'>About</Link></li>
  <li>  <Link to='/contact'>Contact</Link></li>
</ul>

<ul class="sidenav grey lighten-2" id="mobile-menu">
          <li><a href="#services">Services</a></li>
          <li><a href="#123">Programs</a></li>
          <li><a href="#contact">Contact</a></li>
      </ul>
      
    </nav> 
    
        </div>
    )
}

export default NavBar
