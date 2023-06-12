import React from 'react'
import Meta from '../componet/Meta'
import BrechCrum from '../componet/BrechCrum'
import CompareProductCart from '../componet/CompareProductCart'

const CompareProduct = () => {
  return (
    <>
       <Meta title="Compare products" />
       <BrechCrum name="Compare products"/>
       <div className='compareptd'>
        <div className='container-xxl pt-3'>
            <div className='row'>
                <div className='col-3'>
                     <CompareProductCart/>
                </div>
                <div className='col-3'>
                     <CompareProductCart/>
                </div>
                <div className='col-3'>
                     <CompareProductCart/>
                </div>
                <div className='col-3'>
                     <CompareProductCart/>
                </div>
            </div>
        </div>
       </div>
    </>
  )
}

export default CompareProduct