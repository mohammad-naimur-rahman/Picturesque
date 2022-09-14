import Button from 'components/common/Button'
import React from 'react'

const HomeContactIntro = () => {
  return (
    <div className='container mb-20'>
      <div className='bg-black h-56'>
        <Button white>Click Me</Button>
        <Button white solid>
          Click Me
        </Button>
      </div>
      <div className='h-56 border'>
        <Button>Click Me</Button>
        <Button solid>Click Me</Button>
      </div>
      <p>https://www.npmjs.com/package/simplebar-react</p>
    </div>
  )
}

export default HomeContactIntro
