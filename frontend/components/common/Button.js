import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'

const Button = ({ children, white = false, edge = false, solid = false, inverted = false, ...rest }) => {
  const [btnClassName, setbtnClassName] = useState('')

  useEffect(() => {
    switch (true) {
      case white && solid && edge && inverted:
        setbtnClassName('btn-white-solid-edge-inverted')
        break
      case !white && solid && edge && inverted:
        setbtnClassName('btn-black-solid-edge-inverted')
        break
      case white && solid && inverted:
        setbtnClassName('btn-white-solid-inverted')
        break
      case !white && solid && inverted:
        setbtnClassName('btn-black-solid-inverted')
        break
      case white && solid:
        setbtnClassName('btn-white-solid')
        break
      case !white && solid:
        setbtnClassName('btn-black-solid')
        break
      case white && inverted:
        setbtnClassName('btn-white-inverted')
        break
      case !white && inverted:
        setbtnClassName('btn-black-inverted')
        break
      case white:
        setbtnClassName('btn-white')
        break
      case !white:
        setbtnClassName('btn-black')
        break
      default:
        setbtnClassName('btn-black')
    }
  }, [white, solid, edge, inverted])

  return (
    <button {...rest} className={`btn ${btnClassName}`}>
      {children}
    </button>
  )
}

export default Button

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  white: PropTypes.bool,
  edge: PropTypes.bool,
  solid: PropTypes.bool,
  inverted: PropTypes.bool
}
