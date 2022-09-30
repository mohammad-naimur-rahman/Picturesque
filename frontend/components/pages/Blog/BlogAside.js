import React from 'react'
import PropTypes from 'prop-types'
import { BsSearch } from 'react-icons/bs'
import { AsideElement, AsideHeading } from './AsideComponents'
import getDate, { months, prevMonth } from 'utils/getDate'
import Img from 'components/common/Img'
import { AnimationOnScroll } from 'react-animation-on-scroll'

const BlogAside = ({ categories, latestPosts }) => {
  const { data: catsArr } = { ...categories }
  const { data: posts } = { ...latestPosts }
  return (
    <aside className='w-full sm:w-96'>
      <div className='flex-all'>
        <input
          type='text'
          placeholder='Search'
          className='p-[14px] text-sm italic placeholder:italic outline-[1px] bg-transparent'
        />
        <div className='bg-black flex-all p-4 cursor-pointer'>
          <BsSearch className='text-gray text-lg' />
        </div>
      </div>
      <AsideHeading>Archive</AsideHeading>
      <AsideElement>
        {months[prevMonth().getMonth()]} {prevMonth().getFullYear()}
      </AsideElement>
      <AsideElement delay={150}>
        {months[prevMonth(2).getMonth()]} {prevMonth().getFullYear()}
      </AsideElement>
      <AsideElement delay={300}>
        {months[prevMonth(3).getMonth()]} {prevMonth().getFullYear()}
      </AsideElement>
      <AsideElement delay={450}>
        {months[prevMonth(4).getMonth()]} {prevMonth().getFullYear()}
      </AsideElement>
      <AsideHeading>Categories</AsideHeading>
      {catsArr?.map(({ id, attributes: { category } }, i) => (
        <AsideElement key={id} delay={i * 150}>
          {category}
        </AsideElement>
      ))}
      <AsideHeading>Latest Blogs</AsideHeading>
      {posts?.map(
        (
          {
            id,
            attributes: {
              title,
              createdAt,
              cover_image: {
                data: {
                  attributes: {
                    formats: {
                      thumbnail: { url, name }
                    }
                  }
                }
              },
              blog_categories: { data: cats }
            }
          },
          i
        ) => (
          <AnimationOnScroll
            key={id}
            className='flex items-center my-6 cursor-pointer'
            animateIn='animate__fadeInRight'
            delay={i * 200}
          >
            <Img src={url} alt={name} sizes='10vw' className='!w-16 !h-16 aspect-square object-cover' />
            <div className='ml-3'>
              <p className='font-light text-sm'>{title}</p>
              <p className='font-light text-[12px] mt-2'>
                {cats[0].attributes.category} / {getDate(createdAt)}
              </p>
            </div>
          </AnimationOnScroll>
        )
      )}
    </aside>
  )
}

BlogAside.propTypes = {
  categories: PropTypes.object,
  latestPosts: PropTypes.object
}

export default BlogAside
