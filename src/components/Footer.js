import React from 'react';
const Footer = () => {
    return ( 
        <footer id="footer">{/*Footer*/}
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                <div className="companyinfo">
                  <h2><span>T</span>ECHSTORE</h2>
                  <p>Vente et réparation des appareils électroniques </p>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="companyinfo">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">

  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <a className="nav-item" href="#">
      À propos . <span> </span> 
      </a> 
      <a className="nav-item" href="#">
      Contacter-nous .
      </a> <span> </span>
      <a className="nav-item" href="#">
      Réparation
      </a>
    </div>
  </div>
</nav>                </div>
              </div>
            </div>
          </div>
        </div>
       
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <p className="text-center">Copyright © 2020 - TECHSTORE Tous droits reservés.</p>
                    </div>
          </div>
        </div>
      </footer>
     );
}
 
export default Footer;