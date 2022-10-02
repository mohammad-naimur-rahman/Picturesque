import Button from 'components/common/Button'
import API_URL from 'config/index'
import PropTypes from 'prop-types'
import React from 'react'
import { useForm } from 'react-hook-form'
import toast, { Toaster } from 'react-hot-toast'
import styles from 'styles/pages/contact.module.scss'

const CommentForm = ({ post }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm()
  const onSubmit = async formData => {
    reset()
    try {
      const res = await fetch(`${API_URL}/blog-comments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: { ...formData, blog_post: post } })
      })
      if (res.status === 200) {
        toast.success('Comment Posted Successfully!')
      }
    } catch (err) {
      console.log(err)
      toast.error('Something Went Wrong!')
    }
  }
  return (
    <section>
      <Toaster position='bottom-center' />
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className='text-4xl text-center py-10'>Post a comment</h2>
        <div className='m-5'>
          <input
            type='text'
            placeholder='Your Name'
            className={styles.input}
            {...register('name', { required: true })}
          />
          {errors.name && <p className='text-red italic text-sm mt-2'>Name is required</p>}
        </div>
        <div className='m-5'>
          <input type='email' placeholder='Email' className={styles.input} {...register('email', { required: true })} />
          {errors.email && <p className='text-red italic text-sm mt-2'>Email is required</p>}
        </div>
        <div className='m-5'>
          <textarea
            type='text'
            rows={8}
            placeholder='Your Comment'
            className={styles.input}
            {...register('comment', { required: true })}
          />
          {errors.comment && <p className='text-red italic text-sm mt-2'>Message is required</p>}
        </div>
        <div className='flex-all'>
          <Button type='submit' className='mt-8'>
            Post Comment
          </Button>
        </div>
      </form>
    </section>
  )
}

export default CommentForm

CommentForm.propTypes = {
  post: PropTypes.object
}
