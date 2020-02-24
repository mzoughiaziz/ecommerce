import React from 'react';
const Produit = (props) => {
    return (
      <div className="col-sm-3">
      <div className="product-image-wrapper">
        <div className="single-products">
          <div className="productinfo text-center">
            <img src="images/home/product1.jpg" alt="" />
            <h2>{props.produit.prix_prod} DT</h2>
            <p>{props.produit.nom_prod}</p>
            <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
          </div>
          <div className="product-overlay">
            <div className="overlay-content">
              <h2>{props.produit.prix_prod} DT</h2>
              <p>{props.produit.nom_prod}</p>
              <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
            </div>
          </div>
        </div>

      </div>
    </div>
);
}
export default Produit;
