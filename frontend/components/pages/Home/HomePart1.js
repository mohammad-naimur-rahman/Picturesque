import classNames from 'classnames'
import propTypes from 'prop-types'
import React from 'react'
import styles from 'styles/pages/home.module.scss'
import getDate from 'utils/getDate'

const HomePart1 = ({ title, bgText1, image1, image2 }) => {
  return (
    <>
      <div className='container'>
        <h1 dangerouslySetInnerHTML={{ __html: title.data.attributes.title }} className={styles['home-title']} />
      </div>
      <div className={classNames(styles['home-container-fluid'], styles['home-container-fluid-1'])}>
        <p className={classNames(styles['big-text'], styles['big-text-1'])}>{bgText1.data.attributes.title}</p>
        <div className={styles['home-container']}>
          <img src='/backgrounds/dots.png' alt='dot-image' className={styles['home-dot-img-1']} />
          <img src='/backgrounds/dots.png' alt='dot-image' className={styles['home-dot-img-2']} />
          <div className='flex flex-col md:flex-row justify-between'>
            <div className={classNames(styles['home-img-card'], styles['home-img-card-1'])}>
              <img
                src={image1.data.attributes.image.data.attributes.url}
                alt={image1.data.attributes.image.data.attributes.name}
              />
              <h5>{getDate(image1.data.attributes.date)}</h5>
              <h3>{image1.data.attributes.title}</h3>
            </div>
            <div className={classNames(styles['home-img-card'], styles['home-img-card-2'])}>
              <img
                src={image2.data.attributes.image.data.attributes.url}
                alt={image2.data.attributes.image.data.attributes.name}
              />
              <h5>{getDate(image2.data.attributes.date)}</h5>
              <h3>{image2.data.attributes.title}</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePart1

HomePart1.propTypes = {
  title: propTypes.object,
  bgText1: propTypes.object,
  image1: propTypes.object,
  image2: propTypes.object
}
