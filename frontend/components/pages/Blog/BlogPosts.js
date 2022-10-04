import React from 'react'
import PropTypes from 'prop-types'
import BlogCard from './BlogCard'
import Img from 'components/common/Img'
import BlogAside from './BlogAside'
import Button from 'components/common/Button'
import classNames from 'classnames'

const BlogPosts = ({ blogs, categories, latestPosts, isLoading, fetchMore, currMeta }) => {
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
            {currMeta.page !== currMeta.pageCount ? (
              <Button onClick={fetchMore} className={classNames({ 'cursor-wait': isLoading })}>
                {isLoading ? 'Loading...' : 'Load More'}
              </Button>
            ) : (
              <Button solid inverted className='cursor-not-allowed'>
                No more blogs
              </Button>
            )}
          </div>
          <BlogAside categories={categories} latestPosts={latestPosts} />
        </div>
      </section>
    </div>
  )
}

BlogPosts.propTypes = {
  blogs: PropTypes.array,
  categories: PropTypes.object,
  latestPosts: PropTypes.object,
  isLoading: PropTypes.bool,
  fetchMore: PropTypes.func,
  currMeta: PropTypes.object
}

export default BlogPosts
