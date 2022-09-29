import { useQuery } from '@tanstack/react-query'
import Button from 'components/common/Button'
import GridLines from 'components/common/GridLines'
import Layout from 'components/common/Layout'
import PageHeader from 'components/common/PageHeader'
import BlogPosts from 'components/pages/Blog/BlogPosts'
import React from 'react'
import blogIntroImg from '../public/images/blog-intro.jpg'

const BlogPage = () => {
  const { data: introData } = useQuery(['blog-intro'])
  const { data: posts } = useQuery(['blog-posts'])
  const { data: latestPosts } = useQuery([
    'blog-posts',
    'sort[0]=createdAt%3Adesc&pagination[page]=1&pagination[pageSize]=4'
  ])
  const { data: categories } = useQuery(['blog-categories'])
  //BUG: Somehow the blog intro image is not populateing from the API, check it later if fixes...
  return (
    <Layout title='Blog'>
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
