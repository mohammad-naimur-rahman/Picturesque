import React from 'react'
import PropTypes from 'prop-types'
import BlogCard from './BlogCard'
import Img from 'components/common/Img'
import BlogAside from './BlogAside'
import Button from 'components/common/Button'

const BlogPosts = ({ posts, categories, latestPosts }) => {
  const { data: blogs } = { ...posts }
  return (
    <div className='relative overflow-hidden'>
      <Img src='/backgrounds/dots.png' alt='dots' className='absolute top-10 -right-32 -z-10' />
      <section className='container py-20'>
        <div className='flex flex-col lg:flex-row'>
          <div className='w-full'>
            {blogs.map(blog => (
              <BlogCard key={blog.id} data={blog} />
            ))}
          </div>
          <div className='block lg:hidden w-full text-center mb-12'>
            <Button>Load More</Button>
          </div>
          <BlogAside categories={categories} latestPosts={latestPosts} />
        </div>
      </section>
    </div>
  )
}

BlogPosts.propTypes = {
  posts: PropTypes.object,
  categories: PropTypes.object,
  latestPosts: PropTypes.object
}

export default BlogPosts
