import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Swiper from 'react-id-swiper'

const Testimonials = ({ bg, testimonials }) => {
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
  const { data: testimonialsArr } = { ...testimonials }
  const styles = {
    backgroundImage: `url(${url})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed'
  }
  const options = {
    containerClass: 'swiper-container testimonial-slider h-full',
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: (i, className) => {
        return `<span class="${className}"><p>${i}</p></span>`
      }
    }
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
        <div className='min-h-[55vh] -ml-0 md:-ml-20 lg:-ml-60 xl:-ml-80 w-full md:w-3/4 bg-opacity-0 md:bg-opacity-100 bg-white p-8 lg:p-14 pl-10 md:pl-20 shadow-none md:shadow-xl flex flex-col justify-center'>
          <div className='dark-line ml-10'></div>
          <h1 className='text-4xl lg:text-5xl font-normal md:font-thin mt-6 lg:mt-10 mb-10 lg:mb-16 pl-10'>
            Testimonials
          </h1>
          <Swiper className='owl-theme testimonial-slider' {...options}>
            {testimonialsArr?.map(({ id, attributes: { testimonial, name } }) => (
              <div key={id}>
                <p className='italic font-normal md:font-light text-lg mb-5 pl-10'>{testimonial}</p>
                <h3 className='font-medium md:font-normal pl-10'>{name}</h3>
              </div>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

Testimonials.propTypes = {
  bg: PropTypes.object,
  testimonials: PropTypes.object
}

export default Testimonials
