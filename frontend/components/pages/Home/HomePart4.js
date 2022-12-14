import React from 'react'
import PropTypes from 'prop-types'
import styles from 'styles/pages/home.module.scss'
import getDate from 'utils/getDate'
import classNames from 'classnames'
import Img from 'components/common/Img'
import { AnimationOnScroll } from 'react-animation-on-scroll'

const HomePart4 = ({ bgText4, image5 }) => {
  return (
    <AnimationOnScroll animateIn='animate__fadeIn z-10'>
      <div className={classNames(styles['home-container-fluid'], styles['home-container-fluid-4'])}>
        <p className={classNames(styles['big-text'], styles['big-text-4'])}>{bgText4.data.attributes.title}</p>
        <div className={styles['home-container']}>
          <Img src='/backgrounds/dots.png' alt='dot-image' className={styles['home-dot-img-5']} />
          <div className='flex justify-start'>
            <div className={classNames(styles['home-img-card'], styles['home-img-card-5'])}>
              <Img
                src={image5.data.attributes.image.data.attributes.url}
                alt={image5.data.attributes.image.data.attributes.name}
              />
              <h5>{getDate(image5.data.attributes.date)}</h5>
              <h3>{image5.data.attributes.title}</h3>
            </div>
          </div>
        </div>
      </div>
    </AnimationOnScroll>
  )
}

export default HomePart4

HomePart4.propTypes = {
  bgText4: PropTypes.object,
  image5: PropTypes.object
}
