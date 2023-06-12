import React from 'react'
import { BsLinkedin,BsInstagram,BsGithub,BsYoutube } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer className='footer-top p-3'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-6 d-flex gap-30 flex-wrap'>
              <div>
              <img src='images/images/newsletter.png'/>
              </div>
             
              <h3 className='color-white'>Sign Up for Newsletter</h3>
            </div>
            <div className='col-6 '>
            <div class="input-group ">
                <input
                  type="text"
                  class="form-control"
                  placeholder="tim kiem"
                  aria-label="tim kiem"
                  aria-describedby="button-addon2"
                />
                <button
                  class="btn border color-white"
                  type="button"
                  id="button-addon2"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='footer-center p-3'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-4'>
              <h4 className='my-3'>Contact Us</h4>
              <address className="text-white fs-6">
                  Hno : 277 Near Vill chopal, <br /> Sonipat, Haryana <br />
                  PinCode: 131103
                </address>
                <a
                  href="tel:+91 8264954234"
                  className="mt-3 d-block mb-1 text-white"
                >
                  +91 8264954234
                </a>
                <a
                  href="mailto:navdeepdahiya753@gmail.com"
                  className="mt-2 d-block mb-0 text-white"
                >
                  navdeepdahiya753@gmail.com
                </a>
                <div className='d-flex gap-10'>
                   <Link to="">
                    <BsLinkedin className="fs-4" />
                   </Link>
                   <Link to="">
                    <BsInstagram className="fs-4" />
                   </Link>
                   <Link to="">
                    <BsGithub className="fs-4" />
                   </Link>
                   <Link to="">
                    <BsInstagram className="fs-5" />
                   </Link>
                </div>
            </div>
            <div className='col-3'>
              <h4 className='my-3'>Information</h4>
             
              <Link className='d-block my-3'>Privacy Policy</Link>
              <Link className='d-block my-3'>Refund Policy</Link>
              <Link className='d-block my-3'>Shipping Policy</Link>
              <Link className='d-block my-3'>Terms $ Conditions</Link>
              <Link className='d-block my-3'>Blogs</Link>
             
              
            </div>
            <div className='col-3'>
              <h4 className='my-3'>Account</h4>
              <Link className='d-block my-3'>About Us</Link>
              <Link className='d-block my-3'>Faq</Link>
              <Link className='d-block my-3'>Contact</Link>
            </div>
            <div className='col-2'>
              <h4 className='my-3'>Quick Links</h4>
              <Link className='d-block my-3'>Laptops</Link>
              <Link className='d-block my-3'>Headphones</Link>
              <Link className='d-block my-3'>Tablets</Link>
              <Link className='d-block my-3'>watchs</Link>
            </div>
          </div>
        </div>
      </footer>
      <footer className='footer-bottom p-3 d-flex justify-content-center align-items-center'>
        <span>
          &copy; 2023; Powered by Developer's Corner
        </span>
      </footer>
    </>
  )
}

export default Footer