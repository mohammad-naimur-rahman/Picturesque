import classNames from 'classnames'
import Button from 'components/common/Button'
import Link from 'next/link'
import PropTypes from 'prop-types'
import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import styles from 'styles/pages/home.module.scss'

const HomeContactIntro = ({ bgText5, contactTitle, showLink = true }) => {
  return (
    <div className={(styles['home-container-fluid'], 'contact-intro')}>
      {bgText5 ? (
        <p className={classNames(styles['big-text'], styles['big-text-5'])}>{bgText5.data.attributes.title}</p>
      ) : null}
      <div className='container text-center py-8 md:py-14 z-10'>
        <AnimationOnScroll animateIn='animate__fadeInUp'>
          <h1 className='text-[30px] md:text-[45px] lg:text-[50px] xl:text-[55px] font-light md:font-extralight text-primary'>
            {contactTitle.data.attributes.title}
          </h1>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn='animate__fadeInUp' delay={200}>
          <h2 className='text-[30px] md:text-[45px] lg:text-[50px] xl:text-[55px] font-regular mt-4 md:mt-8 text-primary'>
            {contactTitle.data.attributes.description}
          </h2>
        </AnimationOnScroll>
        {showLink ? (
          <AnimationOnScroll animateIn='animate__fadeInUp' delay={400}>
            <Link href='/contact'>
              <Button className='my-8 md:my-10 lg:my-20'>Contact Us</Button>
            </Link>
          </AnimationOnScroll>
        ) : null}
      </div>
    </div>
  )
}

export default HomeContactIntro

HomeContactIntro.propTypes = {
  bgText5: PropTypes.object,
  contactTitle: PropTypes.object,
  showLink: PropTypes.bool
}
