import React from "react";
import Meta from "../componet/Meta";
import BrechCrum from "../componet/BrechCrum";
import { BsFillTrashFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const HomeCart = () => {
  return (
    <>
      <Meta title="Home cart" />
      <BrechCrum name="Home cart" />
      <div className="homecart">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Product</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="">
                    <td scope="row " className="d-flex gap-10">
                        <img className="w-50p" src="images/images/watch.jpg"/>
                        <div > <p>sdafsdf</p>
                        <p>sdafsdf</p>
                        <p>sdafsdf</p></div>
                        
                    </td>
                    <td className="fw-bold">$100</td>
                    <td className="">
                        <input type="number" className="w-40p me-2"/>
                        <BsFillTrashFill/>
                    </td>
                    <td className="fw-bold">$100</td>
                  </tr>
                  <tr className="">
                    <td scope="row " className="d-flex gap-10">
                        <img className="w-50p" src="images/images/watch.jpg"/>
                        <div > <p>sdafsdf</p>
                        <p>sdafsdf</p>
                        <p>sdafsdf</p></div>
                        
                    </td>
                    <td className="fw-bold">$100</td>
                    <td className="">
                        <input type="number" className="w-40p me-2"/>
                        <BsFillTrashFill/>
                    </td>
                    <td className="fw-bold">$100</td>
                  </tr>
                  <tr className="">
                    <td scope="row " className="d-flex gap-10">
                        <img className="w-50p" src="images/images/watch.jpg"/>
                        <div > <p>sdafsdf</p>
                        <p>sdafsdf</p>
                        <p>sdafsdf</p></div>
                        
                    </td>
                    <td className="fw-bold">$100</td>
                    <td className="">
                        <input type="number" className="w-40p me-2"/>
                        <BsFillTrashFill/>
                    </td>
                    <td className="fw-bold">$100</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="row py-3">
            <div className="col-12 d-flex justify-content-between">
                <div className="">
                   <Link to="/outstore">
                   <button className="btn btn-dark rounded-pill">Continue to shopping</button>
                   </Link>
                    
                </div>
                <div>
                    <h3>SubTotal: $ 1000</h3>
                    <p>Taxes and shipping calculated at checkout</p>
                    <Link to="/detailproduct">
                    <button className="btn btn-dark rounded-pill">Check Out</button>
                    </Link>
                    
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeCart;
