import Button from 'components/common/Button'
import GridLines from 'components/common/GridLines'
import Layout from 'components/common/Layout'
import PageHeader from 'components/common/PageHeader'
import BlogPosts from 'components/pages/Blog/BlogPosts'
import React from 'react'
import { axiosQGetter } from 'utils/queryUtils'
import blogIntroImg from '../public/images/blog-intro.jpg'
import PropTypes from 'prop-types'

const BlogPage = ({ socials, introData, posts, latestPosts, categories }) => {
  //BUG: Somehow the blog intro image is not populateing from the API, check it later if fixes...
  return (
    <Layout title='Blog' socials={socials}>
      <GridLines />
      <PageHeader
        introTitle={introData.data.attributes.title}
        introDesc={introData.data.attributes.description}
        introImg={{ url: blogIntroImg, name: 'blog-intro-image' }}
      />
      <BlogPosts posts={posts} categories={categories} latestPosts={latestPosts} />
      <div className='hidden lg:block w-full text-center'>
        <Button>Load More</Button>
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
  const { data: posts } = await axiosQGetter('blog-posts')
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
