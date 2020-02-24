import React from 'react';
import {Link} from 'react-router-dom';
const Navbar = () => {
    return (  
    <div className="header-middle">
    <div className="container">
      <div className="row">
        <div className="col-sm-4">
          <div className="logo pull-left">
            <Link to="/"><img src="images/home/logo56.png" alt="" /></Link>
          </div>
          <div className="btn-group pull-right">
           
          
          </div>
        </div>
        <div className="col-sm-8">
          <div className="shop-menu pull-right">
            <ul className="nav navbar-nav">
              
              <li><Link to="/Reparation"><i className="fa" /> Réparation</Link></li>
              <li><Link to="/Intervention"><i className="fa" /> Mes interventions</Link></li>
              <li><Link to="/Panier"><i className="fa" /> Panier</Link></li>
              <li><Link to="/Sinscrire"><i className="fa" />S'inscrire</Link></li>
              <li><Link to="/SeConnecter"><i className="fa" /> Se connecter</Link></li>
              
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div> );
}
 
export default Navbar;
