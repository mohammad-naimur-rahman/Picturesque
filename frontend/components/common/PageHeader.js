import React from 'react'
import PropTypes from 'prop-types'
import Div100vh from 'react-div-100vh'
import styles from 'styles/components/common/page-header.module.scss'
import Img from './Img'
import Button from './Button'

const PageHeader = ({ introTitle, introDesc, introImg }) => {
  return (
    <Div100vh>
      <header className='min-h-screen'>
        <main className='flex h-full'>
          <section className='basis-1/2'>
            <Img
              src={introImg?.url}
              alt={introImg?.name}
              sizes='100vw'
              width='600'
              height='600'
              className='!w-full !h-full object-cover'
            />
          </section>
          <section className='basis-1/2 bg-bg'>
            <div className='flex flex-col justify-center h-full px-24 text-gray mt-16'>
              <span className='w-32 h-[1px] bg-gray'></span>
              <h1 className='text-gray text-5xl my-6 font-light leading-normal'>{introTitle}</h1>
              <p className='text-gray text-lg mb-10 font-thin leading-relaxed'>{introDesc}</p>
              <div>
                <Button white className='inline-block'>
                  Contact Me
                </Button>
              </div>
            </div>
          </section>
        </main>
      </header>
    </Div100vh>
  )
}

export default PageHeader

PageHeader.propTypes = {
  introTitle: PropTypes.string,
  introDesc: PropTypes.string,
  introImg: PropTypes.object
}
