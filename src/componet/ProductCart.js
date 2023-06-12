import React from "react";
import { Link } from "react-router-dom";
import ReactStars from 'react-stars'

const ProductCart = (prop) => {
  return (
    <>
    <div className="product-main m-3 p-3 position-relative shadow-lg p-3 mb-5 bg-body rounded">
    <div className="product-img">
        <img src={prop.image} />
        <div className="product-link-icon fs-5">
        <Link  className="d-block pe-2"> <img className="fs-1" src="images/images/wish.svg"/></Link>
        <div className="link-hidden">
        <Link  className="d-block pe-2"> <img className="fs-1" src="images/images/cross.svg"/></Link>
        <Link  className="d-block pe-2"> <img className="fs-1" src="images/images/view.svg"/></Link>
        <Link  className="d-block pe-2"> <img className="fs-1" src="images/images/add-cart.svg"/></Link>
        </div>
      </div>
      </div>
      <div className="product-content">
        <p>{prop.title}</p>
        <h6>{prop.content}</h6>
        <ReactStars
          count={5}
          edit={false}
          size={24}
          isHalf={true}
          emptyIcon={<i className="far fa-star"></i>}
          halfIcon={<i className="fa fa-star-half-alt"></i>}
          fullIcon={<i className="fa fa-star"></i>}
          activeColor="#ffd700"
          value={prop.start}
        />
        <p>{prop.pricce}</p>
      </div>
      
    </div>
     
    </>
  );
};

export default ProductCart;
