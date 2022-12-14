import { AUTHOR_URL } from 'config/index'
import React from 'react'

const Footer = () => {
  return (
    <footer className='text-center pb-6 pt-10 px-5'>
      <p className='font-light text-base md:text-xl'>
        Copyright © {new Date().getFullYear()} All rights reserved to{' '}
        <a href={AUTHOR_URL} target='_blank' rel='noreferrer' className='italic'>
          Mohammad Naimur Rahman
        </a>
      </p>
    </footer>
  )
}

export default Footer
