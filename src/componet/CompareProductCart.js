import React from 'react'

const CompareProductCart = () => {
  return (
    <>
      <div className='compareprd-cart m-2 border-bottom p-3'>
        <div>
            <img src='images/images/watch.jpg'/>
        </div>
        <div className='compare-content'>
            <h5 className='fs-20'>Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch With Wi-Fi+3G Tablet</h5>
            <div className='py-2 border-bottom'> $100</div>
            <div className='d-flex justify-content-between py-2 border-bottom'><h3 className='fs-20'>Brand:</h3> <span>Havels</span></div>
            <div className='d-flex justify-content-between py-2 border-bottom'> <h3 className='fs-20'>Type:</h3> <span>Watch</span></div>
            <div className='d-flex justify-content-between py-2 border-bottom'><h3 className='fs-20'>Availablity:</h3> <span>In Stock</span></div>
            <div className='d-flex justify-content-between py-2 border-bottom'><h3 className='fs-20'>Color:</h3> <div className='d-flex gap-10'><p className='viendo'></p> <p className='viendo'></p> <p className='viendo'></p> <p className='viendo'></p> </div></div>
            <div className='d-flex justify-content-between py-2'><h3 className='fs-20'>Brand:</h3> <p><span>S</span> <span>M</span></p></div>
        </div>
      </div>
    </>
  )
}

export default CompareProductCart