import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import Image from 'next/image'
import styles from 'styles/components/common/navbar.module.scss'
import { useRouter } from 'next/router'
import Tippy from '@tippyjs/react'
import navLinks from 'data/components/common/navLinks.json'
import PropTypes from 'prop-types'
import { AUTHOR_URL } from 'config/index'
import Img from './Img'

const NavSocialItems = ({ navItems, newClasses }) => {
  return (
    <ul className={`items-center justify-center ${newClasses}`}>
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
  )
}

NavSocialItems.propTypes = {
  newClasses: PropTypes.string,
  navItems: PropTypes.array
}

const Navbar = ({ socials }) => {
  const router = useRouter()

  const [menuOpen, setmenuOpen] = useState(false)
  //const [navItems, setnavItems] = useState([])
  // useEffect(() => {
  //   ;(async () => {
  //     setshowPreLoader(true)
  //     try {
  //       const res = await axios.get(`${API_URL}/social-medias?populate=*`)
  //       setnavItems(res.data.data)
  //       setshowPreLoader(false)
  //     } catch (e) {
  //       setshowPreLoader(false)
  //     }
  //   })()
  // }, [setshowPreLoader])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const nav = document.querySelector('.nav')
      const toggleNavBg = () => {
        window.scrollY === 0 ? nav.classList.remove('bg-bg') : nav.classList.add('bg-bg')
      }
      window.addEventListener('scroll', toggleNavBg)
      return () => {
        window.removeEventListener('scroll', toggleNavBg)
      }
    }
  }, [])

  return (
    <header>
      <nav
        className={classNames(
          styles['home-nav'],
          'nav px-7 py-4 h-[60px] md:h-[75px] lg:h-[85px] flex align-middle justify-between text-white fixed top-0 left-0 w-full z-30'
        )}
      >
        <Img src='/logo.png' alt='Picturesque' className='h-full cursor-pointer' onClick={() => router.push('/')} />
        <div className='flex-all'>
          <NavSocialItems navItems={socials.data} newClasses='hidden sm:flex' />
          <Img
            width='24'
            height='24'
            src='/icons/bars.svg'
            alt='bars'
            className='!w-6 !h-6 cursor-pointer mb-1 ml-9 mr-0 md:mr-4'
            onClick={() => setmenuOpen(true)}
          />
        </div>
      </nav>
      <div
        id='menu'
        className={classNames(
          menuOpen ? styles['menu-open'] : styles['menu-close'],
          styles['nav-menu'],
          'fixed bg-bg top-0 z-40 px-5 py-12'
        )}
      >
        <div className='flex flex-col text-white text-center font-light justify-between align-center w-full h-full'>
          <div className='flex flex-col justify-center'>
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
            <NavSocialItems navItems={socials.data} newClasses='flex sm:hidden mt-5' />
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
            <a href={AUTHOR_URL} target='_blank' rel='noreferrer' className='italic'>
              Mohammad Naimur Rahman
            </a>
          </p>
        </div>
      </div>
    </header>
  )
}

export default Navbar

Navbar.propTypes = {
  socials: PropTypes.object
}
