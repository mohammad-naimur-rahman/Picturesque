import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import API_URL from 'config'
import Image from 'next/image'
import styles from 'styles/components/common/navbar.module.scss'
import axios from 'axios'
import { useRouter } from 'next/router'
import Tippy from '@tippyjs/react'
import { HiMenu } from 'react-icons/hi'
import navLinks from 'data/components/common/navLinks.json'

const Navbar = () => {
  const router = useRouter()

  const [menuOpen, setmenuOpen] = useState(false)
  const [navItems, setnavItems] = useState([])
  useEffect(() => {
    ;(async () => {
      const res = await axios.get(`${API_URL}/social-medias?populate=*`)
      setnavItems(res.data.data)
    })()
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const nav = document.querySelector('.nav')
      const rootContainer = document.getElementById('root-container')
      const toggleNavBg = () => {
        console.log(rootContainer.scrollY)
        rootContainer.scrollY === 0 ? nav.classList.remove('bg-bg') : nav.classList.add('bg-bg')
      }
      rootContainer.addEventListener('scroll', toggleNavBg)

      window.addEventListener('scroll', () => {
        console.log('CLIE')
      })
      return () => {
        rootContainer.removeEventListener('scroll', toggleNavBg)
      }
    }
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {
        console.log('CLIE')
      })
      console.log('ASFAS')
    }
  }, [])

  return (
    <>
      <nav className='nav px-7 py-4 h-[85px] flex align-middle justify-between text-white fixed top-0 left-0 w-full z-30 bg-bg'>
        <Image
          src='/logo.png'
          alt='Picturesque'
          height='53'
          width='84'
          className='h-full cursor-pointer'
          onClick={() => router.push('/')}
        />
        <div className='flex-all'>
          <ul className='flex-all'>
            {navItems.map(({ id, attributes }) => (
              <li key={id} className='mx-2.5'>
                <Tippy content={attributes.name}>
                  <a href={attributes.link} target='_blank' rel='noreferrer'>
                    <Image
                      src={attributes.icon.data.attributes.url}
                      alt={attributes.icon.data.attributes.name}
                      height='16'
                      width='16'
                      className='invert'
                    />
                  </a>
                </Tippy>
              </li>
            ))}
          </ul>
          <HiMenu className='text-white w-6 h-6 mb-1 ml-9 mr-4 cursor-pointer' onClick={() => setmenuOpen(true)} />
        </div>
      </nav>
      <div
        id='menu'
        className={classNames(
          menuOpen ? styles['menu-open'] : styles['menu-close'],
          styles['nav-menu'],
          'fixed h-[100vh] bg-bg top-0 z-40 px-5 py-12'
        )}
      >
        <div className='flex flex-col text-white text-center font-light justify-between align-center w-full h-full'>
          <div className='flex align-center justify-between'>
            <div className='w-10'></div>
            <Image
              src='/logo.png'
              alt='Picturesque'
              height='53'
              width='84'
              className='h-full'
              onClick={() => router.push('/')}
            />
            <Image
              src='/icons/close.svg'
              alt='close'
              height='28'
              width='28'
              className={classNames(styles['menu-close-btn'], 'cursor-pointer invert')}
              onClick={() => setmenuOpen(false)}
            />
          </div>
          <ul className='flex-col-all'>
            {navLinks?.map(({ id, name, link }) => (
              <li
                key={id}
                className={classNames(styles['nav-link'], 'text-lg p-3 inline-block cursor-pointer')}
                onClick={() => router.push(link)}
              >
                {name}
              </li>
            ))}
          </ul>
          <p>
            Copyright © {new Date().getFullYear()} All rights reserved to{' '}
            <a href='https://github.com/mohammad-naimur-rahman' target='_blank' rel='noreferrer' className='italic'>
              Mohammad Naimur Rahman
            </a>
          </p>
        </div>
      </div>
    </>
  )
}

export default Navbar
