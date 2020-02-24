import React, {Component} from 'react';
class DetailsProduit extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (          <div >
        <div className="product-details">{/*product-details*/}
          <div className="col-sm-5">
            <div className="view-product">
              <img src="images/product-details/1.jpg" alt="" />
              <h3>ZOOM</h3>
            </div>
            <div id="similar-product" className="carousel slide" data-ride="carousel">
              {/* Wrapper for slides */}
              <div className="carousel-inner">
                <div className="item active">
                  <a href><img src="images/product-details/similar1.jpg" alt="" /></a>
                  <a href><img src="images/product-details/similar2.jpg" alt="" /></a>
                  <a href><img src="images/product-details/similar3.jpg" alt="" /></a>
                </div>
                <div className="item">
                  <a href><img src="images/product-details/similar1.jpg" alt="" /></a>
                  <a href><img src="images/product-details/similar2.jpg" alt="" /></a>
                  <a href><img src="images/product-details/similar3.jpg" alt="" /></a>
                </div>
                <div className="item">
                  <a href><img src="images/product-details/similar1.jpg" alt="" /></a>
                  <a href><img src="images/product-details/similar2.jpg" alt="" /></a>
                  <a href><img src="images/product-details/similar3.jpg" alt="" /></a>
                </div>
              </div>
              {/* Controls */}
              <a className="left item-control" href="#similar-product" data-slide="prev">
                <i className="fa fa-angle-left" />
              </a>
              <a className="right item-control" href="#similar-product" data-slide="next">
                <i className="fa fa-angle-right" />
              </a>
            </div>
          </div>
          <div className="col-sm-7">
            <div className="product-information">{/*/product-information*/}
              <img src="images/product-details/new.jpg" className="newarrival" alt="" />
              <h2>Anne Klein Sleeveless Colorblock Scuba</h2>
              <p>Web ID: 1089772</p>
              <img src="images/product-details/rating.png" alt="" />
              <span>
                <span>US $59</span>
                <label>Quantity:</label>
                <input type="text" defaultValue={3} />
                <button type="button" className="btn btn-fefault cart">
                  <i className="fa fa-shopping-cart" />
                  Add to cart
                </button>
              </span>
              <p><b>Availability:</b> In Stock</p>
              <p><b>Condition:</b> New</p>
              <p><b>Brand:</b> E-SHOPPER</p>
              <a href><img src="images/product-details/share.png" className="share img-responsive" alt="" /></a>
            </div>{/*/product-information*/}
          </div>
        </div>{/*/product-details*/}
      </div>);
    }
}
 
export default DetailsProduit;