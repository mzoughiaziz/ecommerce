import React , {Component} from 'react';
import Slider from './components/Slider';
import Navbar from './components/Navbar';
import Home from './components/Home';

import './App.css';
import DetailsProduit from './components/DetailsProduit';
import SeConnecter from './components/SeConnecter';
import Sinscrire from './components/Sinscrire';
import Footer from './components/Footer';
import Reparation from './components/Reparation';
import Intervention from './components/Intervention';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Panier from './components/Panier';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
//<Produit key={i} produit={data} /><DetailsProduit />
/*


*/



  render() { 
    return (
      <Router >
      <div> <Navbar />
    <Slider />
    <section>
    <div class="container">
        <div class="row">
    
    
    <Switch>
    <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/Sinscrire">
            <Sinscrire />
          </Route>
          <Route exact path="/Reparation">
            <Reparation />
          </Route>
          <Route exact path="/Intervention">
            <Intervention />
          </Route>
          <Route exact path="/SeConnecter">
            <SeConnecter />
          </Route>
          <Route path="/Panier">
            <Panier />
          </Route>
          <Route path="*">
            <Home />
          </Route>
        </Switch>
    
   </div>
   </div>
   </section>
   <Footer />
         </div>
         
         </Router> );
  }
}
 
export default App;
