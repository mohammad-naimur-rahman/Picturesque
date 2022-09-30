import React from 'react'
import PropTypes from 'prop-types'
import { AnimationOnScroll } from 'react-animation-on-scroll'

export const AsideHeading = ({ children }) => {
  return <h3 className='font-light pt-12 pb-3 text-text'>{children}</h3>
}

AsideHeading.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
}

export const AsideElement = ({ children, delay = 0 }) => {
  return (
    <AnimationOnScroll animateIn='animate__fadeInRight' delay={delay}>
      <p className='font-light py-2 ml-8 text-[13px] text-text cursor-pointer'>{children}</p>
    </AnimationOnScroll>
  )
}

AsideElement.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  delay: PropTypes.number
}
