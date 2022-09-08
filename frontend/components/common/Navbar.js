import classNames from 'classnames'
import Image from 'next/image'
import React, { useEffect } from 'react'
import styles from 'styles/components/common/navbar.module.scss'

const Navbar = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('DOMContentLoaded', () => {
        console.log('DOM IS READY')
      })
    }
  }, [])
  return (
    <nav className='px-7 py-4 bg-primary h-[85px] flex align-middle justify-between text-white'>
      <img src='/logo.png' alt='Picturesque' className='h-full' />
      <ul>
        <li>fb</li>
        <li>pinterest</li>
      </ul>
    </nav>
  )
}

export default Navbar
