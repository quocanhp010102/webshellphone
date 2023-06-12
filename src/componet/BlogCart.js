import React from 'react'
import CountDownTimer from './CountDownTimer'

const BlogCart = ({hoursMinSecs}) => {
  return (
    <>
    <div className='blog-cart shadow-lg p-3 mb-5 bg-body rounded'>
    <div className='container-xxl'>
        <div className='row'>
            <div className='col-4'>
                <img className='w-100' src='images/images/watch.jpg'/>
            </div>
            <div className='col-8'>
               <h5>Havels</h5>
               <p className='fw-bold'>Samsung Galaxy Note10+ Mobile Phone; Sim...</p>
               <p className='fw-bolder'>$100 <span>$200</span></p>
               <div className='thoigiandem-product d-flex gap-10'>
                  <span> 5 day</span>
                  <CountDownTimer hoursMinSecs ={hoursMinSecs} />
               </div>
               <p>Product : 5</p>
               <div className='slSP'>
                <p className='pt-left'></p>
                <p className='pt-right'></p>
               </div>
               <button className='btn btn-dark'> add product</button>
            </div>
        </div>
      </div>
    </div>
      
    </>
  )
}

export default BlogCart