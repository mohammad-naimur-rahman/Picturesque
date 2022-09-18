import classNames from 'classnames'
import Image from 'next/image'
import PropTypes from 'prop-types'
import React from 'react'

const Img = ({ src, alt, className }) => {
  return (
    <div className='image-container'>
      <Image src={src} alt={alt} layout='fill' className={classNames('image', className)} />
    </div>
  )
}

export default Img

Img.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string
}
