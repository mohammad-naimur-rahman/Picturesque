import React from 'react'

const PreLoader = () => {
  return (
    <div id='pre-loader' className='w-full h-[100vh] bg-primary fixed top-0 left-0 hidden'>
      <p className='text-white'>Loading...</p>
    </div>
  )
}

export default PreLoader
