import React from 'react'
import PropTypes from 'prop-types'

export const AsideHeading = ({ children }) => {
  return <h3 className='text-xl font-light py-10'>{children}</h3>
}

AsideHeading.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
}

export const AsideElement = ({ children }) => {
  return <p className='font-light py-3 ml-6'>{children}</p>
}

AsideElement.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
}
