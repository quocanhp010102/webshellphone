import React from "react";
import Meta from "../componet/Meta";
import BrechCrum from "../componet/BrechCrum";
import { Link } from "react-router-dom";

const ForgetPass = () => {
  return (
    <>
      <Meta title="forget password" />
      <BrechCrum name="forget password" />
      <div className="password-main">
        <div className="container-xxl">
          <div className="row d-flex justify-content-center">
            <div className="col-6 text-center">
              <div className="password-content  shadow p-3 my-5 bg-body rounded">
                <h4 className="color-ccc">Reset Your Password</h4>
                <p className="color-ccc">
                  We will send you an email to reset your password
                </p>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="email"
                  />
                </div>
                <div>
                    <button className="btn btn-dark py-2 rounded-pill">SUBMIT</button>
                    <Link className="color-dark d-block " to="/login"> cancel</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgetPass;
