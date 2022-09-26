import Button from 'components/common/Button'
import Link from 'next/link'
import PropTypes from 'prop-types'
import React from 'react'
import styles from 'styles/pages/home.module.scss'

const HomeContactIntro = ({ contactTitle }) => {
  return (
    <div className={styles['home-container-fluid']}>
      <div className='container text-center py-8 md:py-14 z-10'>
        <h1 className='text-[30px] md:text-[45px] lg:text-[50px] xl:text-[55px] font-light md:font-extralight text-primary'>
          {contactTitle.data.attributes.title}
        </h1>
        <h2 className='text-[30px] md:text-[45px] lg:text-[50px] xl:text-[55px] font-light mt-4 md:mt-8 text-primary'>
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
  contactTitle: PropTypes.object
}
