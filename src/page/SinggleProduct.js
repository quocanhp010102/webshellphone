import React from "react";
import Meta from "../componet/Meta";
import BrechCrum from "../componet/BrechCrum";
import ReactImageZoom from "react-image-zoom";
import ReactStars from "react-stars";
import { Link } from "react-router-dom";
import { TbGitCompare,TbHeart } from "react-icons/tb";
const SinggleProduct = () => {
  const props = {
    width: 594,
    
    zoomWidth: 600,

    img: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg",
  };

  return (
    <>
      <Meta title="product name" />
      <BrechCrum name="product name" />
      <div className="singleproduct-main">
        <div className="container-xxl">
          <div className="row ">
            <div className="col-6 mt-4 bg-white ss2 ">
              <div className="mt-4 bg-white">
                <ReactImageZoom {...props}  />
              </div>
              <div>
                <div className="row">
                  <div className="col-5 border m-3">
                    <img
                      className="m-2 w-100"
                      src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
                    />
                  </div>
                  <div className="col-5 border m-3">
                    <img
                      className="m-2 w-100"
                      src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-5 border m-3">
                    <img
                      className="m-2 w-100"
                      src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
                    />
                  </div>
                  <div className="col-5 border m-3">
                    <img
                      className="m-2 w-100"
                      src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6  mt-4 bg-white">
              <div className="border-bottom mt-3">
                <p className="fw-bold">
                  Kids Headphones Bulk 10 Pack Multi Colored For Students
                </p>
              </div>
              <div className="py-3 border-bottom">
                <p className="fw-bold">$100</p>
                <ReactStars
                  count={5}
                 className="d-inline-block ss1"
                  size={24}
                  activeColor="#ffd700"
                  edit={false}
                  value={4}
                /> 
                <span>( 2 reviews)</span>
                <Link className="text-dark">
                 <p>write reviews</p>
                </Link>
                
              </div>
              <div className="py-3">
                <p className="fw-bold">Type :<span className="fw-normal"> Watch</span></p>
                <p className="fw-bold">Brand :<span className="fw-normal"> Havells</span></p>
                <p className="fw-bold">Category :<span className="fw-normal"> Watch</span></p>
                <p className="fw-bold">Tags :<span className="fw-normal"> Watch</span></p>
                <p className="fw-bold">Availability :<span className="fw-normal"> In Stock</span></p>
                <div className="fw-bold d-flex gap-30">Size :
                     <p className="p-2 w-12p">S</p>
                     <p className="p-2 w-12p">M</p>
                     <p className="p-2 w-12p">XL</p>
                     <p className="p-2 w-12p">XXL</p>
                </div>
                <div className="fw-bold d-flex gap-30 align-items-center">Color :
                     <p className="p-2 w-10p mb-0"></p>
                     <p className="p-2 w-10p mb-0"></p>
                     <p className="p-2 w-10p mb-0"></p>
                     <p className="p-2 w-10p mb-0"></p>
                </div>
                <div>
                    <div className="row pt-2">
                        <div className="col-4">
                        <p className="fw-bold ">Quantity : <input className="w-25" type="number"/></p>
                        </div>
                        <div className="col-4"> 
                           <button className="btn btn-dark rounded-pill">Add to cart</button>
                          
                        </div>
                        <div className="col-4"> <button className="btn btn-dark rounded-pill">Buy now</button></div>
                    </div>
                </div>
                <div>
                    <Link className="text-dark">
                       <TbGitCompare className="me-2"/>
                       Add to compare
                    </Link>
                    <Link className="text-dark ms-4">
                       <TbHeart className="me-2"/>
                       Add to wishlish
                    </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SinggleProduct;
