import Button from 'components/common/Button'
import React from 'react'
import styles from 'styles/pages/contact.module.scss'

const ContactForm = () => {
  return (
    <div className='container'>
      <form>
        <div className='flex'>
          <div className='basis-1/3'>
            <div className='m-5'>
              <input type='text' placeholder='Your Name' className={styles.input} />
            </div>
          </div>
          <div className='basis-1/3'>
            <div className='m-5'>
              <input type='text' placeholder='Email' className={styles.input} />
            </div>
          </div>
          <div className='basis-1/3'>
            <div className='m-5'>
              <input type='text' placeholder='Subject' className={styles.input} />
            </div>
          </div>
        </div>
        <div className='m-5'>
          <textarea type='text' rows={8} placeholder='Your Message' className={styles.input} />
        </div>
        <div className='flex-all'>
          <Button className='mt-8'>Send Message</Button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm
