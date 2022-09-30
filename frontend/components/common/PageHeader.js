import React from 'react'
import PropTypes from 'prop-types'
import Img from './Img'
import Button from './Button'
import { useRouter } from 'next/router'

const PageHeader = ({ introTitle, introDesc, introImg, extra = false, showButton = true }) => {
  const router = useRouter()
  return (
    <header className='min-h-screen'>
      <main className='flex flex-col lg:flex-row h-full min-h-screen'>
        <section className='basis-full lg:basis-1/2 max-h-[50vh] lg:max-h-screen'>
          <Img
            src={introImg?.url}
            alt={introImg?.name}
            sizes='100vw'
            width='600'
            height='600'
            className='!w-full !h-[50vh] lg:!h-full object-cover'
          />
        </section>
        <section className='basis-full lg:basis-1/2 min-h-[50vh] lg:min-h-screen bg-bg relative z-10 overflow-hidden'>
          <div
            className={`flex flex-col  ${
              extra ? 'justify-between' : 'justify-center'
            } min-h-[50vh] lg:min-h-screen h-full px-5 md:px-10 xl:px-16 xxl:px-24 py-12 text-gray z-10`}
          >
            {extra ? <div></div> : null}
            <div className='animate__animated animate__fadeInRight'>
              <div className='light-line'></div>
              <h1 className='text-gray text-2xl lg:text-3xl xl:text-4xl xxl:text-5xl my-4 lg:my-6 font-light leading-normal'>
                {introTitle}
              </h1>
              <p className='text-gray text-base xl:text-lg mb-6 lg:mb-10 font-thin leading-relaxed'>{introDesc}</p>
              <div>
                {showButton && (
                  <Button white className='inline-block' onClick={() => router.push('/contact')}>
                    Contact Me
                  </Button>
                )}
              </div>
            </div>
            {extra ? extra : null}
          </div>
          <Img src='/backgrounds/dots.png' alt='dots' className='absolute -right-32 bottom-20 z-[1] opacity-10' />
        </section>
      </main>
    </header>
  )
}

export default PageHeader

PageHeader.propTypes = {
  introTitle: PropTypes.string,
  introDesc: PropTypes.string,
  introImg: PropTypes.object,
  showButton: PropTypes.bool,
  extra: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node, PropTypes.bool])
}
