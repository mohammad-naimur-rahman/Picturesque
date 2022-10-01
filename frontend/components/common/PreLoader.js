import React from 'react'

const PreLoader = () => {
  return (
    <div id='pre-loader' className='w-full h-[100vh] bg-primary fixed top-0 left-0 z-50 flex-all overflow-hidden'>
      <div id='loader'></div>
    </div>
  )
}

export default PreLoader
