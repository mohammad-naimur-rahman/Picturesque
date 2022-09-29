import React from 'react'
import PropTypes from 'prop-types'
import { BsSearch } from 'react-icons/bs'
import { AsideElement, AsideHeading } from './AsideComponents'

const BlogAside = ({}) => {
  return (
    <aside className='w-96'>
      <div className='flex-all'>
        <input
          type='text'
          placeholder='Search'
          className='p-3 text-sm italic placeholder:italic outline-[1px] bg-transparent'
        />
        <div className='bg-black flex-all p-4 cursor-pointer'>
          <BsSearch className='text-gray text-lg' />
        </div>
      </div>
      <AsideHeading>Archive</AsideHeading>
      <AsideElement>
        {new Date().getMonth()}
        {new Date().getFullYear()}
      </AsideElement>
    </aside>
  )
}

BlogAside.propTypes = {}

export default BlogAside
