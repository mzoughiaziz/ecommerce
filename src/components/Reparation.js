import React, { Component } from 'react';
import Categorie from './Categorie';
class Reparation extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (<div> <Categorie /> <div className="col-sm-9 padding-right">
            <div className="bill-to">
            <p>Réparation</p>
            <div className="form-one">
              <form>
                <input type="text" placeholder="Marque de PC *" />
                
                <select>
                  <option>PC Portable</option>
                  <option>PC Fixe</option>
                </select>
                <p></p>
                <select>
                  <option>Réparation et maintenance PC</option>
                  <option>Maintenance Systèmes et Equipements</option>
                  <option>Récupération données disque dur</option>
                  <option>Réseau informatique et internet</option>
                  <option>Sécurité informatique et antivirus</option>
                </select>
                <button className="btn btn-primary" >Reparer</button>
              </form>
            </div>
          </div></div></div>
         );
    }
}
 
export default Reparation;