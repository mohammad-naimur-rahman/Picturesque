import React from 'react'
import PropTypes from 'prop-types'
import { axiosQGetter } from 'utils/queryUtils'
import Swiper from 'react-id-swiper'
import classNames from 'classnames'
import styles from 'styles/pages/home.module.scss'
import Div100vh from 'react-div-100vh'

const SliderPage = ({ slides }) => {
  const { data: slidesArr } = { ...slides }
  const params = {
    slidesPerView: 4,
    breakpoints: {
      1600: {
        slidesPerView: 4
      },
      992: {
        slidesPerView: 3
      },
      600: {
        slidesPerView: 2
      },
      0: {
        slidesPerView: 1
      }
    },
    loop: true,
    slidesPerGroup: 1,
    loopFillGroupWithBlank: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: (index, className) => {
        return `<span class="${className}">${index + 1}</span>`
      }
    }
  }
  return (
    <Swiper {...params} className='home-slider'>
      {slidesArr.map(
        ({
          id,
          attributes: {
            title,
            description,
            image: {
              data: {
                attributes: { name, url }
              }
            }
          }
        }) => (
          <Div100vh key={id}>
            <div key={id} className='relative min-h-screen flex items-end'>
              <img src={url} alt={name} className='absolute inset-0 w-full h-full object-cover -z-10' />
              <div
                className={classNames(
                  styles['text-card'],
                  'flex flex-col align-center justify-start text-center text-white font-light px-3 sm:px-10'
                )}
              >
                <div className={styles['slider-card_border-line']} />
                <h3 className='text-2xl sm:text-3xl text-left mt-6 text-gray'>{title}</h3>
                <h5 className='text-lg sm:text-xl mt-10 h-[20vh] text-gray'>{description}</h5>
              </div>
            </div>
          </Div100vh>
        )
      )}
    </Swiper>
  )
}

SliderPage.propTypes = {
  slides: PropTypes.object
}

export default SliderPage

export async function getStaticProps() {
  const { data } = await axiosQGetter('homepage-sliders')
  return {
    props: {
      slides: data
    },
    revalidate: 10
  }
}
