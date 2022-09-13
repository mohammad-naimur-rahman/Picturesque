import PropTypes from 'prop-types'
import React from 'react'

const Button = ({ children, white = false, edge = false, solid = false, ...rest }) => {
  return (
    <button
      {...rest}
      className={`btn ${white ? 'btn-white' : 'btn-black'} ${edge ? 'btn-edge' : ''} ${solid ? 'btn-solid' : ''}`}
    >
      {children}
    </button>
  )
}

export default Button

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  white: PropTypes.bool,
  edge: PropTypes.bool,
  solid: PropTypes.bool
}
