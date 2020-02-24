import React, { Component } from 'react';
import Categorie from './Categorie';
class SeConnecter extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (<div> <Categorie /> <div className="col-sm-9 padding-right">
            <div className="col-sm-9 col-sm-offset-1">
            <div className="login-form">
              <h2>Se Connecter</h2>
              <form action="#">
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="mot de passe" />
                <span>
                  <input type="checkbox" className="checkbox" /> 
                  Gardez-moi connecté
                </span>
                
                <button  type="submit" className="btn btn-default">Login</button>
              </form>
            </div>
          </div></div></div>
         );
    }
}
 
export default SeConnecter;