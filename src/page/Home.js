import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import ProductCart from "../componet/ProductCart";
import BlogCart from "../componet/BlogCart";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section className="home-slide1">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6 position-relative">
              <Swiper
                pagination={{
                  type: "fraction",
                }}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
              >
                <SwiperSlide>
                  {" "}
                  <div className="slide1-img">
                    <img src="images/images/main-banner-1.jpg" />
                  </div>
                  <div className="slide1-content">
                    <p className="color-red">SUPERCHARGED FOR PROS.</p>
                    <h2 className="fw-bold">iPad S13+ Pro.</h2>
                    <p>From $999.00 or $41.62/mo.</p>
                    <div>
                      <button className="btn btn-dark">buy now</button>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div className="slide1-img">
                    <img src="images/images/main-banner-1.jpg" />
                  </div>
                  <div className="slide1-content">
                    <p className="color-red">SUPERCHARGED FOR PROS.</p>
                    <h2 className="fw-bold">iPad S13+ Pro.</h2>
                    <p>From $999.00 or $41.62/mo.</p>
                    <div>
                      <button className="btn btn-dark">buy now</button>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div className="slide1-img">
                    <img src="images/images/main-banner-1.jpg" />
                  </div>
                  <div className="slide1-content">
                    <p className="color-red">SUPERCHARGED FOR PROS.</p>
                    <h2 className="fw-bold">iPad S13+ Pro.</h2>
                    <p>From $999.00 or $41.62/mo.</p>
                    <div>
                      <button className="btn btn-dark">buy now</button>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div className="slide1-img">
                    <img src="images/images/main-banner-1.jpg" />
                  </div>
                  <div className="slide1-content">
                    <p className="color-red">SUPERCHARGED FOR PROS.</p>
                    <h2 className="fw-bold">iPad S13+ Pro.</h2>
                    <p>From $999.00 or $41.62/mo.</p>
                    <div>
                      <button className="btn btn-dark">buy now</button>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="col-6">
              <div className="row">
                <div className="col-6">
                  <div className="slide-product">
                    <div className="slide1-img">
                      <img src="images/images/catbanner-01.jpg" />
                    </div>
                    <div className="slide1-content">
                      <p className="color-red">SUPERCHARGED FOR PROS.</p>
                      <h2 className="fw-bold">iPad S13+ Pro.</h2>
                      <p>From $999.00 or $41.62/mo.</p>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="slide-product">
                    <div className="slide1-img">
                      <img src="images/images/catbanner-02.jpg" />
                    </div>
                    <div className="slide1-content">
                      <p className="color-red">SUPERCHARGED FOR PROS.</p>
                      <h2 className="fw-bold">iPad S13+ Pro.</h2>
                      <p>From $999.00 or $41.62/mo.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-6">
                  <div className="slide-product">
                    <div className="slide1-img">
                      <img src="images/images/catbanner-03.jpg" />
                    </div>
                    <div className="slide1-content">
                      <p className="color-red">SUPERCHARGED FOR PROS.</p>
                      <h2 className="fw-bold">iPad S13+ Pro.</h2>
                      <p>From $999.00 or $41.62/mo.</p>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="slide-product">
                    <div className="slide1-img">
                      <img src="images/images/catbanner-04.jpg" />
                    </div>
                    <div className="slide1-content">
                      <p className="color-red">SUPERCHARGED FOR PROS.</p>
                      <h2 className="fw-bold">iPad S13+ Pro.</h2>
                      <p>From $999.00 or $41.62/mo.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-two pt-3 mb-0">
        <div className="home-two-1 m-3 shadow-lg p-3 mb-5 bg-body rounded">
          <div className="container-xxl">
            <div className="row list-items-home-two m-3 mb-0">
              <div className="col-3 border-end border-bottom">
                <div className="home-two-1-product d-flex gap-10 align-items-center">
                  <div className="home-two-1-content">
                    <h5>Music & Gaming</h5>
                    <p>10 items</p>
                  </div>
                  <div className="home-two-1-img">
                    <img src="images/images/camera.jpg" />
                  </div>
                </div>
              </div>
              <div className="col-3 border-end border-bottom">
                <div className="home-two-1-product d-flex gap-10 align-items-center">
                  <div className="home-two-1-content">
                    <h5>Music & Gaming</h5>
                    <p>10 items</p>
                  </div>
                  <div className="home-two-1-img">
                    <img src="images/images/camera.jpg" />
                  </div>
                </div>
              </div>
              <div className="col-3 border-end border-bottom">
                <div className="home-two-1-product d-flex gap-10 align-items-center">
                  <div className="home-two-1-content">
                    <h5>Music & Gaming</h5>
                    <p>10 items</p>
                  </div>
                  <div className="home-two-1-img">
                    <img src="images/images/camera.jpg" />
                  </div>
                </div>
              </div>
              <div className="col-3 border-bottom">
                <div className="home-two-1-product d-flex gap-10 align-items-center">
                  <div className="home-two-1-content">
                    <h5>Music & Gaming</h5>
                    <p>10 items</p>
                  </div>
                  <div className="home-two-1-img">
                    <img src="images/images/camera.jpg" />
                  </div>
                </div>
              </div>
            </div>
            <div className="row list-items-home-two m-3 mt-0">
              <div className="col-3 border-end">
                <div className="home-two-1-product d-flex gap-10 align-items-center">
                  <div className="home-two-1-content">
                    <h5>Music & Gaming</h5>
                    <p>10 items</p>
                  </div>
                  <div className="home-two-1-img">
                    <img src="images/images/camera.jpg" />
                  </div>
                </div>
              </div>
              <div className="col-3 border-end">
                <div className="home-two-1-product d-flex gap-10 align-items-center">
                  <div className="home-two-1-content">
                    <h5>Music & Gaming</h5>
                    <p>10 items</p>
                  </div>
                  <div className="home-two-1-img">
                    <img src="images/images/camera.jpg" />
                  </div>
                </div>
              </div>
              <div className="col-3 border-end">
                <div className="home-two-1-product d-flex gap-10 align-items-center">
                  <div className="home-two-1-content">
                    <h5>Music & Gaming</h5>
                    <p>10 items</p>
                  </div>
                  <div className="home-two-1-img">
                    <img src="images/images/camera.jpg" />
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="home-two-1-product d-flex gap-10 align-items-center">
                  <div className="home-two-1-content">
                    <h5>Music & Gaming</h5>
                    <p>10 items</p>
                  </div>
                  <div className="home-two-1-img">
                    <img src="images/images/camera.jpg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-two-2 m-3 mb-0">
          <h4>Featured Collection</h4>
          <div className="row">
            <div className="col-3">
              <Link to="/singleproduct" className="text-dark">
              <ProductCart
              image='images/images/watch.jpg'
              title="Havels"
              content="Kids headphones bulk 10 pack multi colored for students"
              start={4}
              pricce={100}
            />
              </Link>
              
            </div>
            <div className="col-3">
              <ProductCart
              image='images/images/watch.jpg'
              title="Havels"
              content="Kids headphones bulk 10 pack multi colored for students"
              start={4}
              pricce={100}
            />
            </div>
            <div className="col-3">
              <ProductCart
              image='images/images/watch.jpg'
              title="Havels"
              content="Kids headphones bulk 10 pack multi colored for students"
              start={4}
              pricce={100}
            />
            </div>
            <div className="col-3">
              <ProductCart
              image='images/images/watch.jpg'
              title="Havels"
              content="Kids headphones bulk 10 pack multi colored for students"
              start={4}
              pricce={100}
            />
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <ProductCart
              image='images/images/watch.jpg'
              title="Havels"
              content="Kids headphones bulk 10 pack multi colored for students"
              start={4}
              pricce={100}
            />
            </div>
            <div className="col-3">
              <ProductCart
              image='images/images/watch.jpg'
              title="Havels"
              content="Kids headphones bulk 10 pack multi colored for students"
              start={4}
              pricce={100}
            />
            </div>
            <div className="col-3">
              <ProductCart
              image='images/images/watch.jpg'
              title="Havels"
              content="Kids headphones bulk 10 pack multi colored for students"
              start={4}
              pricce={100}
            />
            </div>
            <div className="col-3">
              <ProductCart
              image='images/images/watch.jpg'
              title="Havels"
              content="Kids headphones bulk 10 pack multi colored for students"
              start={4}
              pricce={100}
            />
            </div>
          </div>
        </div>
      </section>
      <section className="home-three p-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <BlogCart hoursMinSecs={{ hours: 1, minutes: 20, seconds: 40 }} />
            </div>
            <div className="col-6">
              <BlogCart hoursMinSecs={{ hours: 2, minutes: 20, seconds: 40 }} />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-6">
              <BlogCart hoursMinSecs={{ hours: 1, minutes: 20, seconds: 40 }} />
            </div>
            <div className="col-6">
              <BlogCart hoursMinSecs={{ hours: 2, minutes: 20, seconds: 40 }} />
            </div>
          </div>
        </div>
      </section>
      <section className="home-marque shadow-lg p-3 mb-5 bg-body rounded">
        <Marquee className="d-flex justify-content-between">
          <img className="mx-4" src="images/images/brand-03.png" />
          <img className="mx-4" src="images/images/brand-03.png" />
          <img className="mx-4" src="images/images/brand-03.png" />
          <img className="mx-4" src="images/images/brand-03.png" />
          <img className="mx-4" src="images/images/brand-03.png" />
          <img className="mx-4" src="images/images/brand-03.png" />
          <img className="mx-4" src="images/images/brand-03.png" />
          <img className="mx-4" src="images/images/brand-03.png" />
        </Marquee>
      </section>
      <section className="Car-home p-3">
        <div className="container-xxl ">
          <div className="row">
            <div className="col-3">
              <div class="card shadow-lg p-3 mb-5 bg-body rounded">
                <img
                  src="images/images/blog-1.jpg"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-dark">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div class="card shadow-lg p-3 mb-5 bg-body rounded">
                <img
                  src="images/images/blog-1.jpg"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-dark">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div class="card shadow-lg p-3 mb-5 bg-body rounded">
                <img
                  src="images/images/blog-1.jpg"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-dark">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div class="card shadow-lg p-3 mb-5 bg-body rounded">
                <img
                  src="images/images/blog-1.jpg"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-dark">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
