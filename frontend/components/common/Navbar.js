import classNames from 'classnames'
import API_URL from 'config'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import styles from 'styles/components/common/navbar.module.scss'
import axios from 'axios'
import { useRouter } from 'next/router'
import Tippy from '@tippyjs/react'

const Navbar = () => {
  const router = useRouter()

  const [navItems, setnavItems] = useState([])
  useEffect(() => {
    ;(async () => {
      const res = await axios.get(`${API_URL}/social-medias?populate=*`)
      setnavItems(res.data.data)
    })()
  }, [])

  return (
    <nav className='px-7 py-4 bg-primary h-[85px] flex align-middle justify-between text-white'>
      <Image
        src='/logo.png'
        alt='Picturesque'
        height='53'
        width='84'
        className='h-full cursor-pointer'
        onClick={() => router.push('/')}
      />
      <ul className='flex-all'>
        {navItems.map(({ id, attributes }) => (
          <li key={id} className='mx-2'>
            <Tippy content={attributes.name}>
              <a href={attributes.link} target='_blank' rel='noreferrer'>
                <Image
                  src={attributes.icon.data.attributes.url}
                  alt={attributes.icon.data.attributes.name}
                  height='18'
                  width='18'
                  className='invert'
                />
              </a>
            </Tippy>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
