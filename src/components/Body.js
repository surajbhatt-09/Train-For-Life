import React from 'react'
import '../CssFiles/header.css'
import '../CssFiles/Footer.css'
import life from '../img/life.jpg'
import diet from '../img/diet.jpg'
import medi from '../img/medi.jpg'
import work from '../img/work.jpg'
import {Link,NavLink} from 'react-router-dom'
const Header=()=>{
return(

<div className="header">
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


);

}
export default Header;