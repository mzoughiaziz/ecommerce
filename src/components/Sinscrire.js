import React, { Component } from 'react';
import Categorie from './Categorie';
class Sinscrire extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (<div> <Categorie /> <div className="col-sm-9 padding-right">
               <div className="bill-to">
        <p>S'inscrire</p>
        <div className="form-one ">
          <form>
            <input type="text" placeholder="Email *" required />
            <input type="text" placeholder="S'identifier *" required/>
            <input type="password" placeholder="mot de passe *"required />
            <select required>
              <option>Homme</option>
              <option>Femme</option>
            </select>
            <p></p>
            <input type="text" placeholder="Nom *" required/>
            <input type="text" placeholder="Prenom *" required/>
            <input type="text" placeholder="Telephone *" required/>
            <input type="text" placeholder="Addresse *" required/>
            <input type="text" placeholder="Code Postal *"required />
            <input type="text" placeholder="Cin *" required/>
            <button className="btn btn-primary" >S'inscrire</button>
          </form>
        </div>
      </div> </div> </div> );
    }
}
 
export default Sinscrire;