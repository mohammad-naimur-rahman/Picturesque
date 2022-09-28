import { useQuery } from '@tanstack/react-query'
import GridLines from 'components/common/GridLines'
import Layout from 'components/common/Layout'
import PageHeader from 'components/common/PageHeader'
import React from 'react'
import blogIntroImg from '../public/images/blog-intro.jpg'

const BlogPage = () => {
  const { data: introData } = useQuery(['blog-intro'])
  //BUG: Somehow the blog intro image is not populateing from the API, check it later if fixes...
  return (
    <Layout title='Blog'>
      <GridLines />
      <PageHeader
        introTitle={introData.data.attributes.title}
        introDesc={introData.data.attributes.description}
        introImg={{ url: blogIntroImg, name: 'blog-intro-image' }}
      />
    </Layout>
  )
}

export default BlogPage
