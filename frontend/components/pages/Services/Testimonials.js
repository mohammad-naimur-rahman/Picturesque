import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import dynamic from 'next/dynamic'
import { useQuery } from '@tanstack/react-query'
import { axiosQGetter } from 'utils/queryUtils'
const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
  ssr: false
})

const Testimonials = ({ bg }) => {
  const { data, isLoading } = useQuery(['testimonials'], async () => await axiosQGetter('testimonials'), {
    suspense: false
  })
  const {
    data: {
      attributes: {
        image: {
          data: {
            attributes: { url }
          }
        }
      }
    }
  } = { ...bg }
  const { data: testimonialsArr } = { ...data }
  const styles = {
    backgroundImage: `url(${url})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed'
  }
  const options = {
    loop: true,
    dots: true,
    autoplay: true,
    items: 1,
    margin: 0,
    autoplayTimeout: 5000,
    smartSpeed: 1000
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const { matches } = window.matchMedia('(min-width: 768px)')
      if (matches) {
        document.querySelector('.testimonial-bg').style.backgroundImage = `url(${url})`
      } else {
        document.querySelector(
          '.testimonial-bg'
        ).style.backgroundImage = `linear-gradient(to right, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), url(${url})`
      }
    }
  }, [url])
  return (
    <div className='px-0 md:px-20'>
      <div
        className='min-h-[55vh] md:min-h-[70vh] ml-0 md:ml-20 lg:ml-60 xl:ml-80 flex items-center testimonial-bg'
        style={styles}
      >
        <div className='min-h-[55vh] -ml-0 md:-ml-20 lg:-ml-60 xl:-ml-80 w-full md:w-3/4 bg-opacity-0 md:bg-opacity-100 bg-white p-8 lg:p-14 pl-20 lg:pl-40 shadow-none md:shadow-xl flex flex-col justify-center'>
          <div className='dark-line'></div>
          <h1 className='text-4xl lg:text-5xl font-normal md:font-thin mt-6 lg:mt-10 mb-10 lg:mb-16'>Testimonials</h1>
          {isLoading ? (
            <p className='italic font-light text-lg'>Loading...</p>
          ) : (
            <OwlCarousel className='owl-theme testimonial-slider' {...options}>
              {testimonialsArr?.map(({ id, attributes: { testimonial, name } }) => (
                <div key={id}>
                  <p className='italic font-normal md:font-light text-lg mb-5'>{testimonial}</p>
                  <h3 className='font-medium md:font-normal'>{name}</h3>
                </div>
              ))}
            </OwlCarousel>
          )}
        </div>
      </div>
    </div>
  )
}

Testimonials.propTypes = {
  bg: PropTypes.object,
  data: PropTypes.object,
  isLoading: PropTypes.bool
}

export default Testimonials
