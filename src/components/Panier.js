import React, { Component } from 'react';
class Panier extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (       <table className="table table-bordered">
        <thead>
          <tr>
            <th>Product</th>
            <th>Description</th>
            <th>le nombre_de_produit_commander</th>
            <th>Price</th>
            <th>Discount</th>
            <th>Tax</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> <img width={60} src="themes/images/products/4.jpg" alt="" /></td>
            <td>MASSA AST<br />Color : black, Material : metal</td>
            <td>
              <div className="input-append"><input className="span1" style={{maxWidth: '34px'}} placeholder={1} id="appendedInputButtons" size={8} type="text" /><button className="btn" type="button"><i class="fa fa-minus-circle"></i></button><button className="btn" type="button"><i class="fa fa-plus-circle"></i></button><button className="btn btn-danger" type="button"><i class="fa fa-minus-circle"></i></button>				</div>
            </td>
            <td>$120.00</td>
            <td>$25.00</td>
            <td>$15.00</td>
            <td>$110.00</td>
          </tr>


          <tr>
            <td colSpan={6} style={{textAlign: 'right'}}>Total Price:	</td>
            <td> $228.00</td>
          </tr>
          <tr>
            <td colSpan={6} style={{textAlign: 'right'}}>Total Discount:	</td>
            <td> $50.00</td>
          </tr>
          <tr>
            <td colSpan={6} style={{textAlign: 'right'}}>Total Tax:	</td>
            <td> $31.00</td>
          </tr>
          <tr>
            <td colSpan={6} style={{textAlign: 'right'}}><strong>TOTAL ($228 - $50 + $31) =</strong></td>
            <td className="label label-important" style={{display: 'block'}}> <strong> $155.00 </strong></td>
          </tr>
        </tbody>
      </table>
         );
    }
}
 
export default Panier;