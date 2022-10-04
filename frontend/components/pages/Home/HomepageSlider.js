import React from 'react'
import PropTypes from 'prop-types'
import Swiper from 'react-id-swiper'
import classNames from 'classnames'
import styles from 'styles/pages/home.module.scss'
import Div100vh from 'react-div-100vh'
import Img from 'components/common/Img'

const HomepageSlider = ({ sliders }) => {
  const { data: slidesArr } = { ...sliders }
  const params = {
    slidesPerView: 4,
    breakpoints: {
      1400: {
        slidesPerView: 4
      },
      1100: {
        slidesPerView: 3
      },
      700: {
        slidesPerView: 2
      },
      0: {
        slidesPerView: 1
      }
    },
    loop: true,
    containerClass: 'swiper-container home-slider h-full',
    slidesPerGroup: 1,
    loopFillGroupWithBlank: true,
    autoplay: {
      delay: 2500,
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
  return (
    <Div100vh>
      <Swiper {...params}>
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
            <div key={id} className={classNames(styles['slider-card'], 'relative min-h-screen flex items-end')}>
              <Img src={url} alt={name} className='absolute inset-0 !w-full !h-full object-cover -z-10' />
              <div className='absolute inset-0 -z-10 bg-primary bg-opacity-20'></div>
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
          )
        )}
      </Swiper>
    </Div100vh>
  )
}

HomepageSlider.propTypes = {
  sliders: PropTypes.object
}

export default HomepageSlider
