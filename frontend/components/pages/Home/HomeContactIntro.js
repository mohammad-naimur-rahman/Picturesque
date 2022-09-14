import classNames from 'classnames'
import Button from 'components/common/Button'
import Link from 'next/link'
import PropTypes from 'prop-types'
import React from 'react'
import styles from 'styles/pages/home.module.scss'

const HomeContactIntro = ({ bgText5, contactTitle }) => {
  return (
    <div className={styles['home-container-fluid']}>
      <p className={classNames(styles['big-text'], styles['big-text-5'])}>{bgText5.data.attributes.title}</p>
      <div className='container text-center py-8 md:py-14 z-10'>
        <h1 className='text-[30px] md:text-[45px] lg:text-[50px] xl:text-[55px] font-extralight'>
          {contactTitle.data.attributes.title}
        </h1>
        <h2 className='text-[30px] md:text-[45px] lg:text-[50px] xl:text-[55px] font-light mt-4 md:mt-8'>
          {contactTitle.data.attributes.description}
        </h2>
        <Link href='/contact'>
          <Button className='my-8 md:my-10 lg:my-20'>Contact Us</Button>
        </Link>
      </div>
    </div>
  )
}

export default HomeContactIntro

HomeContactIntro.propTypes = {
  bgText5: PropTypes.object,
  contactTitle: PropTypes.object
}
