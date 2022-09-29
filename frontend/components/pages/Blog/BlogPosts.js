import React from 'react'
import PropTypes from 'prop-types'
import BlogCard from './BlogCard'

const BlogPosts = ({ posts }) => {
  const { data: blogs } = { ...posts }
  return (
    <section className='container'>
      <div className='flex flex-col lg:flex-row'>
        <div className='w-full'>
          {blogs.map(blog => (
            <BlogCard key={blog} data={blog} />
          ))}
        </div>
        <div className='w-64 border-2'>bla bla bla</div>
      </div>
    </section>
  )
}

BlogPosts.propTypes = {
  posts: PropTypes.object
}

export default BlogPosts
