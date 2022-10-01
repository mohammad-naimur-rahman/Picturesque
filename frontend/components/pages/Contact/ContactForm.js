import Button from 'components/common/Button'
import API_URL from 'config/index'
import { useForm } from 'react-hook-form'
import toast, { Toaster } from 'react-hot-toast'
import styles from 'styles/pages/contact.module.scss'

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm()
  const onSubmit = async data => {
    reset()
    try {
      const res = await fetch(`${API_URL}/contact-uses`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data })
      })
      if (res.status === 200) {
        toast.success('Message Sent Successfully!')
      }
    } catch (err) {
      console.log(err)
      toast.error('Something went wrong!')
    }
  }
  return (
    <div className='container'>
      <Toaster position='top-center' />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-col md:flex-row'>
          <div className='basis-1/3'>
            <div className='m-5'>
              <input
                type='text'
                placeholder='Your Name'
                className={styles.input}
                {...register('name', { required: true })}
              />
              {errors.name && <p className='text-red italic text-sm mt-2'>Name is required</p>}
            </div>
          </div>
          <div className='basis-1/3'>
            <div className='m-5'>
              <input
                type='email'
                placeholder='Email'
                className={styles.input}
                {...register('email', { required: true })}
              />
              {errors.email && <p className='text-red italic text-sm mt-2'>Email is required</p>}
            </div>
          </div>
          <div className='basis-1/3'>
            <div className='m-5'>
              <input
                type='text'
                placeholder='Subject'
                className={styles.input}
                {...register('subject', { required: true })}
              />
              {errors.subject && <p className='text-red italic text-sm mt-2'>Subject is required</p>}
            </div>
          </div>
        </div>
        <div className='m-5'>
          <textarea
            type='text'
            rows={8}
            placeholder='Your Message'
            className={styles.input}
            {...register('message', { required: true })}
          />
          {errors.message && <p className='text-red italic text-sm mt-2'>Message is required</p>}
        </div>
        <div className='flex-all'>
          <Button solid inverted edge type='submit' className='mt-8'>
            Send Message
          </Button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm
