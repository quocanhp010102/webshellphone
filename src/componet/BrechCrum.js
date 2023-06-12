import React from 'react'

const BrechCrum = (prop) => {
  return (
    <>
      <div className='brechCrum p-3'>
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-12 d-flex align-items-center justify-content-center'>
                    <p className='mb-0 '>Home / {prop.name}</p>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default BrechCrum