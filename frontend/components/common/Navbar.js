import classNames from 'classnames'
import React from 'react'
import styles from 'styles/components/common/navbar.module.scss'

const Navbar = () => {
  return (
    <div>
      <h1 className={classNames(styles.man, 'text-xl')}>This is navbar</h1>
      <p className='text-man'>THis text will be blue</p>
    </div>
  )
}

export default Navbar
