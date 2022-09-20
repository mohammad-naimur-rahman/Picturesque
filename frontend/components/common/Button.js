import classNames from 'classnames'
import PropTypes from 'prop-types'
import React, { forwardRef, useEffect, useState } from 'react'
import styles from 'styles/components/common/buttons.module.scss'

const Button = forwardRef(
  ({ children, white = false, edge = false, solid = false, inverted = false, className, ...rest }, ref) => {
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
      <button ref={ref} className={classNames(styles.btn, styles[btnClassName], className)} {...rest}>
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  ref: PropTypes.func,
  white: PropTypes.bool,
  edge: PropTypes.bool,
  solid: PropTypes.bool,
  inverted: PropTypes.bool,
  className: PropTypes.string
}
