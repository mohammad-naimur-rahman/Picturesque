import Button from 'components/common/Button'
import GridLines from 'components/common/GridLines'
import Layout from 'components/common/Layout'
import PageHeader from 'components/common/PageHeader'
import BlogPosts from 'components/pages/Blog/BlogPosts'
import React, { useState } from 'react'
import { axiosQGetter } from 'utils/queryUtils'
import blogIntroImg from '../public/images/blog-intro.jpg'
import PropTypes from 'prop-types'
import { axiosGetter } from 'utils/axiosUtils'
import { PAGE_SIZE } from 'config/index'
import toast, { Toaster } from 'react-hot-toast'
import classNames from 'classnames'

const BlogPage = ({ socials, introData, posts, latestPosts, categories }) => {
  const [blogs, setblogs] = useState(posts?.data)
  const [currPage, setcurrPage] = useState(1)
  const [currMeta, setcurrMeta] = useState(posts?.meta?.pagination)
  const [isLoading, setisLoading] = useState(false)

  const fetchMore = async () => {
    setcurrPage(prev => prev + 1)
    setisLoading(true)
    try {
      const res = await axiosGetter(
        `blog-posts?populate=*&sort[0]=createdAt%3Adesc&pagination[page]=${
          currPage + 1
        }&pagination[pageSize]=${PAGE_SIZE}`,
        false
      )
      setcurrMeta(res?.meta?.pagination)
      setblogs([...blogs, ...res.data])
      setisLoading(false)
    } catch (e) {
      setisLoading(false)
      toast.error('Something went wrong!')
      console.log(e.message)
    }
  }

  //BUG: Somehow the blog intro image is not populateing from the API, check it later if fixes...
  return (
    <Layout title='Blog' socials={socials}>
      <Toaster position='bottom-center' />
      <GridLines />
      <PageHeader
        introTitle={introData.data.attributes.title}
        introDesc={introData.data.attributes.description}
        introImg={{ url: blogIntroImg, name: 'blog-intro-image' }}
      />
      <BlogPosts
        blogs={blogs}
        categories={categories}
        latestPosts={latestPosts}
        isLoading={isLoading}
        fetchMore={fetchMore}
        currMeta={currMeta}
      />
      <div className='hidden lg:block w-full text-center'>
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
    </Layout>
  )
}

export default BlogPage

BlogPage.propTypes = {
  socials: PropTypes.object,
  introData: PropTypes.object,
  posts: PropTypes.object,
  latestPosts: PropTypes.object,
  categories: PropTypes.object
}

export async function getStaticProps() {
  const { data: socials } = await axiosQGetter('social-medias')
  const { data: introData } = await axiosQGetter('blog-intro')
  const { data: posts } = await axiosQGetter(
    'blog-posts?populate=*&sort[0]=createdAt%3Adesc&pagination[page]=1&pagination[pageSize]=2',
    false
  )
  const { data: latestPosts } = await axiosQGetter(
    'blog-posts?populate=*&sort[0]=createdAt%3Adesc&pagination[page]=1&pagination[pageSize]=4',
    false
  )
  const { data: categories } = await axiosQGetter('blog-categories')
  return {
    props: {
      socials,
      introData,
      posts,
      latestPosts,
      categories
    },
    revalidate: 10
  }
}
