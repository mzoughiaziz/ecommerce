import React from 'react';
const Slider = (props) => {
    return (       <section id="slider">{/*slider*/}
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div id="slider-carousel" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#slider-carousel" data-slide-to={0} className="active" />
              <li data-target="#slider-carousel" data-slide-to={1} />
              <li data-target="#slider-carousel" data-slide-to={2} />
            </ol>
            <div className="carousel-inner">
              <div className="item active">
                <div className="col-sm-6">
                  <h1><span>T</span>ECHSTORE</h1>
                  <h2>HP i5 9éme géneration OMEN </h2>
                  <p> HP PC Portable Gamer OMEN - 15.6"FHD - Processeur Intel® Core™ i5-9300H </p>
                  <button type="button" className="btn btn-default get">Voir plus</button>
                </div>
                <div className="col-sm-6">
                  <img src="images/home/s1.jpg" className="girl img-responsive" alt="" />
            
                </div>
              </div>
              <div className="item">
                <div className="col-sm-6">
                  <h1><span>T</span>-ECHSTORE</h1>
                  <h2>HP i5 9éme géneration OMEN </h2>
                  <p>HP PC Portable Gamer OMEN - 15.6"FHD - Processeur Intel® Core™ i5-9300H  </p>
                  <button type="button" className="btn btn-default get">Voir plus</button>
                </div>
                <div className="col-sm-6">
                  <img src="images/home/s2.jpg" className="girl img-responsive" alt="" />
         
                </div>
              </div>
              <div className="item">
                <div className="col-sm-6">
                <h1><span>T</span>-ECHSTORE</h1>
                  <h2>Dell Inspiron 15 </h2>
                  <p>PC Portable 15.6'' Full HD (1920 x 1080) - AMD Ryzen 5 2500U Quad Core 2.0 GHz  </p>
                  <button type="button" className="btn btn-default get">Voir plus</button>
                </div>
                <div className="col-sm-6">
                  <img src="images/home/s3.jpg" className="girl img-responsive" alt="" />
                  
                </div>
              </div>
            </div>
            <a href="#slider-carousel" className="left control-carousel hidden-xs" data-slide="prev">
              <i className="fa fa-angle-left" />
            </a>
            <a href="#slider-carousel" className="right control-carousel hidden-xs" data-slide="next">
              <i className="fa fa-angle-right" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section> );
}
 
export default Slider;
