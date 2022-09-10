import classNames from 'classnames'
import API_URL from 'config'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import styles from 'styles/components/common/navbar.module.scss'
import axios from 'axios'
import { useRouter } from 'next/router'
import Tippy from '@tippyjs/react'
import { HiMenu } from 'react-icons/hi'
import { BiX } from 'react-icons/bi'

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
    <>
      <nav className='nav px-7 py-4 h-[85px] flex align-middle justify-between text-white fixed top-0 left-0 w-full'>
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
          menuOpen ? 'menu-open' : 'menu-close',
          'w-[440px] fixed h-[100vh] bg-bg top-0 z-30 px-5 py-12'
        )}
      >
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
          <BiX className='text-white w-10 h-10 cursor-pointer' onClick={() => setmenuOpen(false)} />
        </div>
      </div>
    </>
  )
}

export default Navbar
