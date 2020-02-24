import React, { Component } from 'react';
import Categorie from './Categorie';
import Produit from './Produit';
import axios from 'axios';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { produits: []  }
    }
    componentDidMount() {
        axios.get('http://192.168.1.16:8080/produits.php')
            .then(res => {
                this.setState({ produits: res.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    render() { 
        return (<div><Categorie /> <div className="col-sm-9 padding-right"> <div>
            {this.state.produits.map((data, i)=> (
             <Produit key={i} produit={data} />
             ))}
             </div> </div></div>);
    }
}
 
export default Home;