import React, { Component } from 'react';
import Categorie from './Categorie';
class Intervention extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (<div> <Categorie /><div className="col-sm-9 padding-right"> <div>
            <div>
        <div className="review-payment">
          <h2>Intervention</h2>
        </div>
        <div className="table-responsive cart_info">
          <table className="table table-condensed">
            <thead>
              <tr className="cart_menu">
                <td className="image">PC</td>
                <td className="description" />
                <td className="price">Prix</td>
                <td className="total">Etat</td>
                <td />
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="cart_product">
                  <a href><img src="images/cart/one.png" alt="" /></a>
                </td>
                <td className="cart_description">
                  <h4><a href>Colorblock Scuba</a></h4>
                  <p>Web ID: 1089772</p>
                </td>
                <td className="cart_price">
                  <p>$59</p>
                </td>
                <td className="cart_total">
                  <p className="cart_total_price">mezel</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
        </div> </div></div>);
    }
}
 
export default Intervention;