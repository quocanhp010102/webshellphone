import React from 'react'
import { Link } from 'react-router-dom'
import Meta from '../componet/Meta'
import BrechCrum from '../componet/BrechCrum'

const SignUp = () => {
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
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="email"
                />
              </div>
              <div className="mb-3">
                
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="phone number"
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
              <div className="mb-3  d-flex justify-content-center gap-30">
                
                  <button className="btn btn-info">Sign up</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default SignUp