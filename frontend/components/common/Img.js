import classNames from 'classnames'
import Image from 'next/future/image'
import PropTypes from 'prop-types'
import React from 'react'
import styles from 'styles/components/common/img.module.scss'

const Img = ({ src, alt, width = '500', height = '500', sizes = '50vw', className, ...rest }) => {
  return (
    <Image
      src={src}
      alt={alt}
      sizes={sizes}
      width={width}
      height={height}
      className={classNames(styles['img-content'], className)}
      {...rest}
    />
  )
}

export default Img

Img.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  sizes: PropTypes.string,
  className: PropTypes.string
}
