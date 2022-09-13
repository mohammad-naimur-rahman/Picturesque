import propTypes from 'prop-types'
import React from 'react'
import styles from 'styles/pages/home.module.scss'
import getDate from 'utils/getDate'

const HomePart1 = ({ title, bgText1, image1, image2 }) => {
  return (
    <main className={styles['home']}>
      <div className='container'>
        <h1 dangerouslySetInnerHTML={{ __html: title.data.attributes.title }} className={styles['home-title']} />
      </div>
      <div className={styles['home-container-fluid']}>
        <p className={styles['big-text']}>{bgText1.data.attributes.title}</p>
        <div className={styles['home-container']}>
          <img src='/backgrounds/dots.png' alt='dot-image' className={styles['home-dot-img']} />
          <div className='flex justify-between'>
            <div className={styles['home-img-card']}>
              <img
                src={image1.data.attributes.image.data.attributes.url}
                alt={image1.data.attributes.image.data.attributes.name}
              />
              <h5>{getDate(image1.data.attributes.date)}</h5>
              <h3>{image1.data.attributes.title}</h3>
            </div>
            <div className={styles['home-img-card']}>
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
    </main>
  )
}

export default HomePart1

HomePart1.propTypes = {
  title: propTypes.object,
  bgText1: propTypes.object,
  image1: propTypes.object,
  image2: propTypes.object
}
