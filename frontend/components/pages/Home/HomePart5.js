import React from 'react'
import PropTypes from 'prop-types'
import styles from 'styles/pages/home.module.scss'
import getDate from 'utils/getDate'
import classNames from 'classnames'
import Img from 'components/common/Img'

const HomePart5 = ({ image6, image7 }) => {
  return (
    <div className={classNames(styles['home-container-fluid'], styles['home-container-fluid-5'])}>
      <div className={styles['home-container']}>
        <Img src='/backgrounds/dots.png' alt='dot-image' className={styles['home-dot-img-6']} />
        <div className='flex flex-col md:flex-row justify-center md:justify-end'>
          <div className={classNames(styles['home-img-card'], styles['home-img-card-6'])}>
            <Img
              src={image6.data.attributes.image.data.attributes.url}
              alt={image6.data.attributes.image.data.attributes.name}
            />
            <h5>{getDate(image6.data.attributes.date)}</h5>
            <h3>{image6.data.attributes.title}</h3>
          </div>
          <div className={classNames(styles['home-img-card'], styles['home-img-card-7'])}>
            <Img
              src={image7.data.attributes.image.data.attributes.url}
              alt={image7.data.attributes.image.data.attributes.name}
            />
            <h5>{getDate(image7.data.attributes.date)}</h5>
            <h3>{image7.data.attributes.title}</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePart5

HomePart5.propTypes = {
  image6: PropTypes.object,
  image7: PropTypes.object
}
