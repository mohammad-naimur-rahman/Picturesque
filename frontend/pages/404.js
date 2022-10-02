import { useRouter } from 'next/router'
import React from 'react'
import styles from 'styles/pages/error-page.module.scss'

const Page404 = () => {
  const router = useRouter()
  return (
    <div className={styles['error-page']}>
      <section className={styles['wrapper']}>
        <div className={styles['container']}>
          <div id='scene' className={styles['scene']} data-hover-only='false'>
            <div className={styles['circle']} data-depth='1.2'></div>

            <div className={styles['one']} data-depth='0.9'>
              <div className={styles['content']}>
                <span className={styles['piece']}></span>
                <span className={styles['piece']}></span>
                <span className={styles['piece']}></span>
              </div>
            </div>

            <div className={styles['two']} data-depth='0.60'>
              <div className={styles['content']}>
                <span className={styles['piece']}></span>
                <span className={styles['piece']}></span>
                <span className={styles['piece']}></span>
              </div>
            </div>

            <div className={styles['three']} data-depth='0.40'>
              <div className={styles['content']}>
                <span className={styles['piece']}></span>
                <span className={styles['piece']}></span>
                <span className={styles['piece']}></span>
              </div>
            </div>

            <p className={styles['p404']} data-depth='0.50'>
              404
            </p>
            <p className={styles['p404']} data-depth='0.10'>
              404
            </p>
          </div>

          <div className={styles['text']}>
            <article>
              <p>
                Uh oh! Looks like you got lost. <br />
                Go back to the homepage if you dare!
              </p>
              <button onClick={() => router.push('/')}>Go Home</button>
            </article>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Page404
