import React ,{Component}from 'react';
import {HashRouter,Route} from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Diet from './InternalComp/Diet'
import Life from './InternalComp/Life'
import Work from './InternalComp/Work'
import Medi from './InternalComp/meditation'


 class App extends Component {
   

  render(){
  return (
    <HashRouter>
    <div className="App">
    <Route exact path='/' component={Home}/>
    <Route path='/contact' component={Contact}/>
    <Route path='/about' component={About}/>
    <Route path='/life' component={Life}/>
    <Route path='/diet' component={Diet}/>
    <Route path='/work' component={Work}/>
    <Route path='/medi' component={Medi}/>
  

    </div>
    </HashRouter>
  )};
}

export default App;
