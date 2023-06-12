import React from 'react'
import { Helmet } from 'react-helmet'
import Meta from "../componet/Meta";
import BrechCrum from "../componet/BrechCrum";
import { Link } from 'react-router-dom';
import BlogCart from "../componet/BlogCart";

const Blog = () => {
  return (
    <>
       <Meta title='Blogs'/>
       <BrechCrum name='Blogs'/>
       <div className='Blogs'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-3'>
              <div className='blog-nav'>
                <h5>Find By Categories</h5>
                <div className='blog-nav-link'>
                  <Link to='/'>Watch</Link>
                  <Link to='/'>TV</Link>
                  <Link to='/'>Camera</Link>
                  <Link to='/'>Laptop</Link>
                </div>
              </div>
            </div>
            <div className='col-9'>
                 <div className='row m-20'>
                  <div className='col-6'>
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
                  <div className='col-6'>
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
                 <div className='row m-20'>
                  <div className='col-6'>
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
                  <div className='col-6'>
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
          </div>
        </div>
       </div>
    </>
  )
}

export default Blog