import React from 'react'
import PropTypes from 'prop-types'
import BlogCard from './BlogCard'
import Img from 'components/common/Img'
import BlogAside from './BlogAside'

const BlogPosts = ({ posts }) => {
  const { data: blogs } = { ...posts }
  return (
    <div className='relative overflow-hidden'>
      <Img src='/backgrounds/dots.png' alt='dots' className='absolute top-10 -right-32' />
      <section className='container py-20'>
        <div className='flex flex-col lg:flex-row'>
          <div className='w-full'>
            {blogs.map(blog => (
              <BlogCard key={blog.id} data={blog} />
            ))}
          </div>
          <BlogAside />
        </div>
      </section>
    </div>
  )
}

BlogPosts.propTypes = {
  posts: PropTypes.object
}

export default BlogPosts
