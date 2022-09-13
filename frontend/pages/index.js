import classNames from 'classnames'
import Layout from 'components/common/Layout'
import HomePart1 from 'components/pages/Home/HomePart1'
import HomePart2 from 'components/pages/Home/HomePart2'
import HomePart3 from 'components/pages/Home/HomePart3'
import HomePart4 from 'components/pages/Home/HomePart4'
import axiosClient from 'hooks/axaiosClient'
import dynamic from 'next/dynamic'
import PropTypes from 'prop-types'
import { useEffect } from 'react'
const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
  ssr: false
})
import Div100vh from 'react-div-100vh'
import styles from 'styles/pages/home.module.scss'

const Home = ({
  slides,
  title,
  bgText1,
  bgText2,
  bgText3,
  bgText4,
  bgText5,
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7
}) => {
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
      <main className={styles['home']}>
        <HomePart1 title={title} bgText1={bgText1} image1={image1} image2={image2} />
        <HomePart2 bgText2={bgText2} image3={image3} />
        <HomePart3 bgText3={bgText3} image4={image4} />
        <HomePart4 bgText4={bgText4} image5={image5} />
      </main>
    </Layout>
  )
}

export default Home

Home.propTypes = {
  slides: PropTypes.object,
  title: PropTypes.object,
  bgText1: PropTypes.object,
  bgText2: PropTypes.object,
  bgText3: PropTypes.object,
  bgText4: PropTypes.object,
  bgText5: PropTypes.object,
  image1: PropTypes.object,
  image2: PropTypes.object,
  image3: PropTypes.object,
  image4: PropTypes.object,
  image5: PropTypes.object,
  image6: PropTypes.object,
  image7: PropTypes.object
}

export async function getStaticProps() {
  const slides = await axiosClient('homepage-sliders')
  const title = await axiosClient('home-title')
  const bgText1 = await axiosClient('home-bg-text-1')
  const bgText2 = await axiosClient('home-bg-text-2')
  const bgText3 = await axiosClient('home-bg-text-3')
  const bgText4 = await axiosClient('home-bg-text-4')
  const bgText5 = await axiosClient('home-bg-text-5')
  const image1 = await axiosClient('home-image-1')
  const image2 = await axiosClient('home-image-2')
  const image3 = await axiosClient('home-image-3')
  const image4 = await axiosClient('home-image-4')
  const image5 = await axiosClient('home-image-5')
  const image6 = await axiosClient('home-image-6')
  const image7 = await axiosClient('home-image-7')
  return {
    props: {
      slides,
      title,
      bgText1,
      bgText2,
      bgText3,
      bgText4,
      bgText5,
      image1,
      image2,
      image3,
      image4,
      image5,
      image6,
      image7
    },
    revalidate: 10
  }
}
