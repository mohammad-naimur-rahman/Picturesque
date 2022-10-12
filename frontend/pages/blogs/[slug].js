import classNames from 'classnames'
import Button from 'components/common/Button'
import Layout from 'components/common/Layout'
import PageHeader from 'components/common/PageHeader'
import CommentForm from 'components/pages/BlogDetails/CommentForm'
import Comments from 'components/pages/BlogDetails/Comments'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import styles from 'styles/pages/blog-details.module.scss'
import { axiosQGetter } from 'utils/queryUtils'
import PropTypes from 'prop-types'

const BlogDetailsPage = ({ socials, posts }) => {
  const { data: blogArr } = { ...posts }
  const [comments, setcomments] = useState(blogArr[0]?.attributes?.blog_comments.data)
  const { push } = useRouter()
  return (
    <Layout title={blogArr[0]?.attributes?.title || 'Loading...'} socials={socials}>
      <PageHeader
        introTitle={blogArr[0]?.attributes?.title}
        introDesc={blogArr[0]?.attributes?.short_description}
        introImg={blogArr[0]?.attributes?.cover_image?.data?.attributes}
        showButton={false}
      />
      <div className='px-3 md:px-5 lg:px-8 max-w-[900px] mx-auto'>
        <div className={classNames(styles['blog-details'], 'py-16')}>
          <ReactMarkdown>{blogArr[0]?.attributes?.post}</ReactMarkdown>
        </div>
        <Comments data={comments} />
        <CommentForm post={blogArr[0]} comments={comments} setcomments={setcomments} />
        <div className='w-full flex-col-all mt-16 mb-8'>
          <h2 className='text-4xl pb-5'>Liked this blog?</h2>
          <Button solid inverted edge onClick={() => push('/blog')}>
            Read More
          </Button>
        </div>
      </div>
    </Layout>
  )
}

export default BlogDetailsPage

BlogDetailsPage.propTypes = {
  socials: PropTypes.object,
  posts: PropTypes.object
}

export async function getStaticPaths() {
  const { data: posts } = await axiosQGetter('blog-posts')
  const paths = posts.data.map(post => {
    return { params: { slug: post.attributes.slug } }
  })
  return {
    paths,
    fallback: false,
    revalidate: 10
  }
}

export async function getStaticProps({ params: { slug } }) {
  const { data: socials } = await axiosQGetter('social-medias')
  const { data: posts } = await axiosQGetter(`blog-posts?populate=*&filters[slug]=${slug}`, false)
  return {
    props: {
      socials,
      posts
    },
    revalidate: 10
  }
}
