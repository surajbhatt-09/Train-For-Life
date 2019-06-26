import React,{Component} from 'react'
import '../CssFiles/Footer.css'
import '../CssFiles/social.css'


class Footer extends Component {
  constructor(props){
super(props);
this.state={
  userName:'',
 message:'',
  email:''
}

this.handleSubmit=this.handleSubmit.bind(this);
this.handleChange=this.handleChange.bind(this);

  }
handleChange(event){
this.setState({
[event.target.name]:event.target.value
})
}
  handleSubmit(e){
    e.preventDefault();
   const userName=this.state.userName;
   const email=this.state.email;
   const message=this.state.message
if(userName=="" || email=="" || message=="")
alert("fields cannot be empty")
else
alert("thanks for your reply, we will send you an email soon")  
}
    render(){
    return (
        <div>
        <div>
        <footer className="page-footer grey darken-3 center">
            <div className="row">
            <div className="col l6 s6"> <h5>
          About Us
        </h5>
        <p>We have created a friendly, supportive place where everybody is welcome, in a judgement 
          free zone. We are here to help and support everybody, whoever they are. We have members 
          from all walks of life, shapes and sizes, abilities, experience levels, and all types of goals.</p>
          <p>Discover what’s new in the health, fitness and wellbeing, 
            including free workouts and nutritional hints and tips to help fast track your success.</p> 
     <h4> Find Us...</h4>
       <div className="hide-on-med-and-down">
       <ul className="ul">
  <li className="li"><a className="a" href="#"><i className="fab fa-facebook" aria-hidden="true"></i></a></li>
  <li  className="li"><a className="a" href="#"><i className="fab fa-twitter" aria-hidden="true"></i></a></li>
  <li  className="li"><a className="a" href="#"><i className="fab fa-google-plus" aria-hidden="true"></i></a></li>
  <li  className="li"><a className="a"  href="#"><i className="fab fa-linkedin" aria-hidden="true"></i></a></li>
  <li  className="li"><a className="a" href="#"><i className="fab fa-instagram" aria-hidden="true"></i></a></li>
</ul>
</div>
</div>
      
      <div className="col l6 s6 ">
          <h5>Keep In Touch</h5>
      <form onSubmit={this.handleSubmit} className="pure-form pure-form-aligned">
    <fieldset>
        <div className="pure-control-group">
        <i className="material-icons prefix">person</i>
            <input id="name" name="userName" type="text" placeholder="Username" onChange={e=>{this.handleChange(e)}}  />
           
        </div>


        <div className="pure-control-group">
        <i className="material-icons prefix">email</i>
            <input id="email" type="email" name="email" onChange={e=>{this.handleChange(e)}}   placeholder="Email Address"/>
        </div>

        <div className="pure-control-group">
        <i className="material-icons prefix">message</i>
            <textarea id="foo" onChange={e=>{this.handleChange(e)}} name="message"  rows="40" cols='10' type="text" placeholder="Send Us Your Query..."></textarea>
        </div>

        <div className="pure-controls">
           
                <input id="cb" type="checkbox"/> I've read the terms and conditions
            
<br/>
            <button type="submit" className="btn btn-medium red pulse">Submit</button>
        </div>
    </fieldset>
</form>
      </div>
      </div>
        </footer>
        </div>
        
      <div className="copyright-footer grey darken-4 center hide-on-med-and-down " id="freak">
      <div className="row">
       <div className="col l6 s4" id="freakname">Train For Life &copy;2019 </div>
       <div className="col l6 s4" id="developer">Developer Link--> <a href="https://github.com/surajbhatt-09/loveGym" id="name"> surajbhatt-09.github.io</a></div>
   
      </div>
      </div>
      <div className="hide-on-med-and-up">
      <div className="copyright-footer grey darken-4 center " id="mobifreak">
      <div className="row">
       <div className="col l6 s6" id="mobicopy">Train For Life &copy;2019 </div>
       <div className="col l6 s6" id="mobideveloper">Developer Link--> <a href="https://github.com/surajbhatt-09/loveGym" id="name">@suraj.github</a></div>
   
      </div>
      </div>
   </div>
      </div>
       
    )
    }
}

export default Footer
