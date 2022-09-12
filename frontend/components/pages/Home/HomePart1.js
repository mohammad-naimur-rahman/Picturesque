import propTypes from 'prop-types'
import React from 'react'
import styles from 'styles/pages/home.module.scss'

const HomePart1 = ({ title, bgText1, image1, image2 }) => {
  return (
    <main className={styles['home-1']}>
      <div className='container'>
        <h1 dangerouslySetInnerHTML={{ __html: title.data.attributes.title }} className={styles['home-title']} />
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
