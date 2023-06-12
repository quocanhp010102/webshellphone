import React from "react";
import Meta from "../componet/Meta";
import BrechCrum from "../componet/BrechCrum";
import { BsCarFront,BsFillTelephoneFill,BsExclamationCircleFill,BsHouseDoor } from "react-icons/bs";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <Meta title="Contact" />
      <BrechCrum name="Contact" />
      <div className="Contact">
        <div className="container-xxl">
          <div className="row">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d119833.733994333!2d105.81542367035551!3d21.024311685836825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1686364881537!5m2!1svi!2s"
              width="600"
              height="450"
              //style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="row m-3">
            <div className="col-12">
              <div className="contact-main m-3">
                <div className="row p-3">
                  <div className="col-6">
                    <h4>Contact</h4>
                    <div class="mb-3">
                      <input
                        type="text"
                        class="form-control"
                        id="exampleFormControlInput1"
                        placeholder="name"
                      />
                    </div>
                    <div class="mb-3">
                      <input
                        type="email"
                        class="form-control"
                        id="exampleFormControlInput1"
                        placeholder="email"
                      />
                    </div>
                    <div class="mb-3">
                      <input
                        type="text"
                        class="form-control"
                        id="exampleFormControlInput1"
                        placeholder="phone"
                      />
                    </div>
                    <div class="mb-3">
                      <label
                        for="exampleFormControlTextarea1"
                        class="form-label"
                      >
                        Example textarea
                      </label>
                      <textarea
                        class="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                      ></textarea>
                    </div>
                    <div className="mb-3">
                    <button type="submit" class="btn btn-primary mb-3">submit</button>
                    </div>
                  </div>
                  <div className="col-6 px-4">
                    <h4>Get in touch with us</h4>
                    <div>
                      <p className="p-1 color-ccc"><BsHouseDoor className="color-dark me-2"/> Hno:277 , Near village chopal , Mandaura, Sonipat, Haryana </p>
                      <p className="p-1 color-ccc"><BsFillTelephoneFill/><Link className="color-ccc" to='+91 8264954234'>+91 8264954234</Link> </p>
                      <p className="p-1 color-ccc"><BsCarFront className="color-dark me-2"/> navdeepdahiya753@gmail.com </p>
                      <p className="p-1 color-ccc"><BsExclamationCircleFill className="color-dark me-2"/> Monday – Friday 10 AM – 8 PM </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
