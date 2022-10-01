import { useQuery } from '@tanstack/react-query'
import classNames from 'classnames'
import Button from 'components/common/Button'
import GridLines from 'components/common/GridLines'
import Layout from 'components/common/Layout'
import PageHeader from 'components/common/PageHeader'
import PreLoader from 'components/common/PreLoader'
import { useRouter } from 'next/router'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import styles from 'styles/pages/blog-details.module.scss'

const BlogDetailsPage = () => {
  const {
    push,
    query: { slug }
  } = useRouter()
  const {
    data: { data: blogArr }
  } = useQuery(['blog-posts', `filters[slug]=${slug}`])
  if (blogArr.length === 0) {
    return (
      <Layout title='The blog you searched for not found!'>
        <GridLines />
        <div className='w-full h-screen flex-col-all'>
          <h2 className='text-4xl mb-10'>The Blog you searched for not found!</h2>
          <div className='flex-all gap-5'>
            <Button inverted onClick={() => push('/blog')}>
              Read More Blogs
            </Button>
            <Button onClick={() => push('/')}>Go Home</Button>
          </div>
        </div>
      </Layout>
    )
  }
  return (
    <Layout title={blogArr[0]?.attributes?.title || 'Loading...'}>
      <GridLines />
      {blogArr.length === 0 ? (
        <PreLoader />
      ) : (
        <>
          <PageHeader
            introTitle={blogArr[0]?.attributes?.title}
            introDesc={blogArr[0]?.attributes?.short_description}
            introImg={blogArr[0]?.attributes?.cover_image?.data?.attributes}
            showButton={false}
          />
          <div className='px-2 md:px-5 lg:px-8'>
            <div className={classNames(styles['blog-details'], 'max-w-[900px] mx-auto py-16')}>
              <ReactMarkdown>{blogArr[0]?.attributes?.post}</ReactMarkdown>
            </div>
            <div className='w-full flex-all my-5'>
              <Button solid inverted edge onClick={() => push('/blog')}>
                Read More Blogs
              </Button>
            </div>
          </div>
        </>
      )}
    </Layout>
  )
}

export default BlogDetailsPage
