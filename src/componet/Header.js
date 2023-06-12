import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="header-top">
        <div className="container-xxl">
          <div className="row d-flex justify-content-between align-items-center">
            <div className="col-6">
              <p className="p-3 mb-0 color-white">
                Free Shipping Over $100 & Free Returns
              </p>
            </div>
            <div className="col-6 d-flex justify-content-end">
              <span className="p-3 color-white">
                Hotline : <Link className="color-white">0382845790</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="header-center">
        <div className="container-xxl">
          <div className="row d-flex align-items-center justify-content-between">
            <div className="col-2 m-2">
              <Link className="color-white" to="/">
                <h3>Nhom 10</h3>
              </Link>
            </div>
            <div className="col-4">
              <div class="input-group ">
                <input
                  type="text"
                  class="form-control"
                  placeholder="tim kiem"
                  aria-label="tim kiem"
                  aria-describedby="button-addon2"
                />
                <button
                  class="btn btn-warning color-white"
                  type="button"
                  id="button-addon2"
                >
                  Button
                </button>
              </div>
            </div>
            <div className="col-5">
              <div>
                <ul className="d-flex gap-30 justify-content-between align-items-center mb-0">
                  <li className="">
                    <Link className="d-flex" to="/compareProduct">
                      <img src="images/images/compare.svg" />
                      <div>
                        <p className="mb-0">Compare</p>
                        <p className="mb-0">Product</p>
                      </div>
                    </Link>
                  </li>
                  <li className="">
                    <Link className="d-flex justify-content-between" to="/compareProduct">
                      <img src="images/images/wishlist.svg" />
                      <div>
                        <p className="mb-0">Favorite</p>
                        <p className="mb-0">Wishlist</p>
                      </div>
                    </Link>
                  </li>
                  <li className="">
                    <Link className="d-flex" to="/login">
                      <img src="images/images/user.svg" />
                      <div>
                        <p className="mb-0">Login</p>
                        <p className="mb-0">My account</p>
                      </div>
                    </Link>
                  </li>
                  <li className="">
                    <Link className="d-flex" to="/homecart">
                      <img className="pe-2" src="images/images/cart.svg" />
                      <div>
                        <p className="mb-0">0</p>
                        <p className="mb-0">$500</p>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-bottom">
        <div className="container-xxl">
          <div className="p-3 d-flex">
            <div className="header-b-select d-flex align-items-center gap-10">
              <img src="images/images/menu.svg" />
              <div>
                <select class="form-select select-menu-bt" aria-label="Default select example">
                  <option selected>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
            <div className="header-b-menu d-flex">
              <ul className="d-flex align-items-center gap-10 mb-0">
                <li><Link to="">
                    HOME
                </Link ></li>
                <li><Link to="/outstore">
                OUR STORE
                </Link></li>
                <li><Link to="/blog">
                    BLOGS
                </Link></li>
                <li><Link to='/contact'>
                    CONTACT
                </Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
