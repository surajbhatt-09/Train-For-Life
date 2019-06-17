import React from 'react'
import '../CssFiles/header.css'
import '../CssFiles/Footer.css'
import life from '../img/life.jpg'
import diet from '../img/diet.jpg'
import medi from '../img/medi.jpg'
import work from '../img/work.jpg'
import {Link,NavLink} from 'react-router-dom'
import Mobi from './mobilebody'
import '../CssFiles/mobibody.css'
const Header=()=>{
return(
<div className="row">
<div class="hero col l12 s12 hide-on-med-and-down">
	<h1 className="hide-on-med-and-down">The cheerful mind perseveres, and the strong mind hews <br/>its way through a thousand difficulties.<span><div class="loader">
 
  <div class="face">
    <div class="circle"></div>
  </div>
  <div class="face">
    <div class="circle"></div>
  </div>
</div></span></h1>
<h3 className="hero hide-on-med-and-up">
The cheerful mind perseveres, and the strong mind hews its way through a thousand difficulties.
   </h3>
</div>
<div className="header col l12 hide-on-med-and-down">
    <div className="c">
    <div  className="box">
  <img src={life}/> 
  <span><Link to='/life'> 
    <button className="btn btn-large red pulse">LifeStyle</button>
  </Link>
  </span>
   </div>
 <div  className="box">
  <img src={diet}/> 
  <span><Link to='/diet'> 
    <button className="btn btn-large green pulse">Diet</button>
  </Link>
  </span>
   </div>
   
   <div  className="box">
  <img src={work}/> 
  <span><Link to='/work'> 
    <button className="btn btn-large blue pulse">Workout</button>
  </Link>
  </span>
   </div>
   
   <div  className="box">
  <img src={medi}/> 
  <span><Link to='/medi'> 
    <button className="btn btn-large green cyan">Meditation</button>
  </Link>
  </span>
   </div>
</div>

</div>
<div className="mobile hide-on-med-and-up">
  <Mobi/>
  </div>

</div>
);

}
export default Header;