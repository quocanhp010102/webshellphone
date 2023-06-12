import React from "react";
import { Link } from "react-router-dom";

const DetailProduct = () => {
  return (
    <>
      <div className="detail-product mb-3 py-4">
        <div className="container-xxl mt-0">
          <div className="row">
            <div className="col-6">
              <h3>QuocAP</h3>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="#" className="color-dark">
                      Cart
                    </a>
                  </li>
                  <li className="breadcrumb-item">Library</li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Data
                  </li>
                </ol>
              </nav>
              <h5>Contact Information</h5>
              <p>Navdeep Dahiya (monud0232@gmail.com)</p>
              <h3>Shipping Address</h3>
              <div>
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option selected>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                <div className="row mt-3">
                  <div className="col-6">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="first name"
                    />
                  </div>
                  <div className="col-6">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="last name"
                    />
                  </div>
                </div>
                <div>
                  <div className="mt-3">
                    <input
                      type="email"
                      className="form-control w-100"
                      id="exampleFormControlInput1"
                      placeholder="name@example.com"
                    />
                  </div>
                  <div className="mt-3">
                    <input
                      type="text"
                      className="form-control w-100"
                      id="exampleFormControlInput1"
                      placeholder="ancd"
                    />
                  </div>
                  <div className="row mt-3">
                    <div className="col-4">
                      <input
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="City"
                      />
                    </div>
                    <div className="col-4">
                      <select
                        class="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                    <div className="col-4">
                      <input
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="City"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center py-4" >
                <Link className="d-block mt-3 color-dark" to="/homecart">
                  &#8592; return Cart
                </Link>
                <Link to="/outstore">
                <button className="btn btn-dark">continute shopping</button>
                </Link>
                
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex justify-content-between align-items-center border-bottom py-4">
                <div className="position-relative sll">
                  <img src="images/images/watch.jpg" className="w-100 position-absolute top-0"
                  />
                  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    99+
                    <span class="visually-hidden">unread messages</span>
                  </span>
                </div>
                <div className="fw-bold">$100</div>
              </div>
              <div className="d-flex justify-content-between align-items-center border-bottom py-4">
                 <div >
                  <p className="fw-bold">Subtotal</p>
                  <p className="fw-bold">Shippiing</p>
                 </div>
                 <div>
                  <p className="color-xam">$10000</p>
                  <p className="color-xam">$10000</p>
                 </div>
              </div>
              <div className="d-flex justify-content-between align-items-center border-bottom py-4">
                 <div >
                  <p className="fw-bold">Total</p>
               
                 </div>
                 <div>
              
                  <p className="color-xam">$10000</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailProduct;
