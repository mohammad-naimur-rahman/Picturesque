import React from 'react'
import PropTypes from 'prop-types'
import Img from 'components/common/Img'
import { useRouter } from 'next/router'
import getDate from 'utils/getDate'
import { BLOG_SHORT_DESC_LENGTH } from 'config/index'
import { AnimationOnScroll } from 'react-animation-on-scroll'

const BlogCard = ({ data }) => {
  const router = useRouter()
  const {
    attributes: {
      createdAt,
      slug,
      title,
      short_description,
      blog_categories: { data: categoryArr },
      blog_comments: { data: commentArr },
      cover_image: {
        data: {
          attributes: { name, url }
        }
      }
    }
  } = { ...data }
  const { month, day, year } = getDate(createdAt, true)
  return (
    <AnimationOnScroll className='w-full px-0 lg:px-10 relative mt-5' animateIn='animate__fadeInUp'>
      <div className='absolute -top-5 left-6 lg:left-16 bg-black text-gray px-2 md:px-3 py-2 md:py-4 text-center'>
        <p className='text-gray py-1 font-extralight'>{month}</p>
        <p className='text-gray py-1 font-extralight'>{day}</p>
        <p className='text-gray py-1 font-extralight'>&apos;{year.toString().slice(2, 4)}</p>
      </div>
      <Img src={url} name={name} className='!w-full aspect-half object-cover shadow-lg' />
      <h2
        onClick={() => router.push(`/blogs/${slug}`)}
        className='cursor-pointer text-3xl font-light mt-14 hover:text-hover'
      >
        {title}
      </h2>
      <div className='flex mb-12'>
        {categoryArr?.map(({ id, attributes: { category } }) => (
          <p key={id} className='font-normal mt-2 mr-1'>
            {category}{' '}
          </p>
        ))}
        <p className='font-normal mt-2'>
          {' '}
          | {commentArr.length} {commentArr.length > 1 ? 'comments' : 'comment'}
        </p>
      </div>
      <p className='mb-20 font-light'>
        {short_description.length > BLOG_SHORT_DESC_LENGTH
          ? short_description.slice(0, BLOG_SHORT_DESC_LENGTH) + '...'
          : short_description}
      </p>
    </AnimationOnScroll>
  )
}

BlogCard.propTypes = {
  data: PropTypes.object
}

export default BlogCard
