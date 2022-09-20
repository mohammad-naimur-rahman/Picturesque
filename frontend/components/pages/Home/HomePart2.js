import React from 'react'
import PropTypes from 'prop-types'
import styles from 'styles/pages/home.module.scss'
import getDate from 'utils/getDate'
import classNames from 'classnames'
import Img from 'components/common/Img'

const HomePart2 = ({ bgText2, image3 }) => {
  return (
    <div className={classNames(styles['home-container-fluid'], styles['home-container-fluid-2'])}>
      <p className={classNames(styles['big-text'], styles['big-text-2'])}>{bgText2.data.attributes.title}</p>
      <div className={styles['home-container']}>
        <Img src='/backgrounds/dots.png' alt='dot-image' className={styles['home-dot-img-3']} />
        <div className='flex justify-between'>
          <div className={classNames(styles['home-img-card'], styles['home-img-card-3'])}>
            <Img
              src={image3.data.attributes.image.data.attributes.url}
              alt={image3.data.attributes.image.data.attributes.name}
            />
            <h5>{getDate(image3.data.attributes.date)}</h5>
            <h3>{image3.data.attributes.title}</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePart2

HomePart2.propTypes = {
  bgText2: PropTypes.object,
  image3: PropTypes.object
}
