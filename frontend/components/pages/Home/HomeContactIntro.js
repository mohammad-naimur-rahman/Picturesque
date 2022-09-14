import Button from 'components/common/Button'
import React from 'react'

const HomeContactIntro = () => {
  return (
    <div className='container my-20 flex gap-5'>
      <div className='bg-black p-5 border text-center flex flex-col'>
        <Button white>Click Me</Button>
        <Button white solid>
          Click Me
        </Button>
        <Button white inverted>
          Click Me
        </Button>
        <Button white solid inverted>
          Click Me
        </Button>
        <Button white edge inverted solid>
          Click Me
        </Button>
      </div>
      <div className='p-5 text-center border flex flex-col'>
        <Button>Click Me</Button>
        <Button solid>Click Me</Button>
        <Button inverted>Click Me</Button>
        <Button solid inverted>
          Click Me
        </Button>
        <Button edge inverted solid>
          Click Me
        </Button>
      </div>
      {/* <p>https://www.npmjs.com/package/simplebar-react</p> */}
    </div>
  )
}

export default HomeContactIntro
