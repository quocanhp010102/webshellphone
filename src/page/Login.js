import React from "react";
import Meta from "../componet/Meta";
import BrechCrum from "../componet/BrechCrum";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <Meta title="sign in"/>
      <BrechCrum  name="sign in"/>
      <div className="login-main">
        <div className="container-xxl">
          <div className="row  d-flex justify-content-center">
            <div className="col-6">
              <div className="login-content shadow p-3 my-5 bg-body rounded">
                <h4 className=""> Sign in</h4>
                <div className="mb-3">
                  
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name"
                  />
                </div>
               
            
                <div className="mb-3">
                  
                  <input
                    type="password"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="password"
                  />
                </div>
                <Link  className="color-dark" to="/forgetpass"> quên mật khẩu ?</Link>
                <div className="mb-3  d-flex justify-content-center gap-30">
                    <button className="btn btn-info">Sign in</button>
                    <button className="btn btn-dark"><Link to="/signup">Sign up</Link></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
