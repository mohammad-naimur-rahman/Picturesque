import React from 'react'
import PropTypes from 'prop-types'
import styles from 'styles/pages/home.module.scss'
import getDate from 'utils/getDate'
import classNames from 'classnames'
import Img from 'components/common/Img'

const HomePart3 = ({ bgText3, image4 }) => {
  return (
    <div className={classNames(styles['home-container-fluid'], styles['home-container-fluid-3'])}>
      <p className={classNames(styles['big-text'], styles['big-text-3'])}>{bgText3.data.attributes.title}</p>
      <div className={styles['home-container']}>
        <Img src='/backgrounds/dots.png' alt='dot-image' className={styles['home-dot-img-4']} />
        <div className='flex justify-end'>
          <div className={classNames(styles['home-img-card'], styles['home-img-card-4'])}>
            <Img
              src={image4.data.attributes.image.data.attributes.url}
              alt={image4.data.attributes.image.data.attributes.name}
            />
            <h5>{getDate(image4.data.attributes.date)}</h5>
            <h3>{image4.data.attributes.title}</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePart3

HomePart3.propTypes = {
  bgText3: PropTypes.object,
  image4: PropTypes.object
}
