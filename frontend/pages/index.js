import classNames from 'classnames'
import Layout from 'components/common/Layout'
import HomePart1 from 'components/pages/Home/HomePart1'
import axiosClient from 'hooks/axaiosClient'
import dynamic from 'next/dynamic'
import PropTypes from 'prop-types'
import { useEffect } from 'react'
const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
  ssr: false
})
import Div100vh from 'react-div-100vh'
import styles from 'styles/pages/home.module.scss'

const Home = ({ slides, title, bgText1, image1, image2 }) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.$ = window.jQuery = require('jquery')
    }
  }, [])

  const { data: slidesData } = { ...slides }
  const options = {
    loop: true,
    dots: true,
    autoplay: true,
    items: 4,
    margin: 0,
    autoplayTimeout: 5000,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 2
      },
      992: {
        items: 3
      },
      1600: {
        items: 4
      }
    }
  }
  return (
    <Layout>
      <OwlCarousel className='owl-theme home-slider' {...options}>
        {slidesData?.map(({ id, attributes }) => (
          <Div100vh key={id}>
            <div
              className={classNames(styles['slider-card'], 'slider-card')}
              style={{
                backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,.1), rgba(0,0,0,.35)), url(${attributes?.image?.data.attributes.url})`
              }}
            >
              <div className='flex items-end justify-center h-full'>
                <div
                  className={classNames(
                    styles['text-card'],
                    'flex flex-col align-center justify-start text-center text-white font-light px-3 sm:px-10'
                  )}
                >
                  <div className={styles['slider-card_border-line']} />
                  <h3 className='text-2xl sm:text-3xl text-left mt-6'>{attributes?.title}</h3>
                  <h5 className='text-lg sm:text-xl mt-10 h-[20vh]'>{attributes?.description}</h5>
                </div>
              </div>
            </div>
          </Div100vh>
        ))}
      </OwlCarousel>
      <HomePart1 title={title} bgText1={bgText1} image1={image1} image2={image2} />
    </Layout>
  )
}

export default Home

Home.propTypes = {
  slides: PropTypes.object,
  title: PropTypes.object,
  bgText1: PropTypes.object,
  image1: PropTypes.object,
  image2: PropTypes.object
}

export async function getStaticProps() {
  const slides = await axiosClient('homepage-sliders')
  const title = await axiosClient('home-title')
  const bgText1 = await axiosClient('home-bg-text-1')
  const image1 = await axiosClient('home-image-1')
  const image2 = await axiosClient('home-image-2')
  return {
    props: {
      slides,
      title,
      bgText1,
      image1,
      image2
    },
    revalidate: 10
  }
}
