import { useQuery } from '@tanstack/react-query'
import classNames from 'classnames'
import SliderSkeleton from 'components/common/SliderSkeleton'
import dynamic from 'next/dynamic'
import React from 'react'
import Div100vh from 'react-div-100vh'
import { axiosQGetter } from 'utils/queryUtils'
const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
  ssr: false
})
import styles from 'styles/pages/home.module.scss'
import PreLoader from 'components/common/PreLoader'

const HomeSlider = () => {
  const { data: slides, isLoading } = useQuery(
    ['homepage-sliders'],
    async () => await axiosQGetter('homepage-sliders'),
    {
      suspense: false
    }
  )
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
      600: {
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
    <>
      {isLoading ? (
        <PreLoader />
      ) : (
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
                    <h3 className='text-2xl sm:text-3xl text-left mt-6 text-gray'>{attributes?.title}</h3>
                    <h5 className='text-lg sm:text-xl mt-10 h-[20vh] text-gray'>{attributes?.description}</h5>
                  </div>
                </div>
              </div>
            </Div100vh>
          ))}
        </OwlCarousel>
      )}
    </>
  )
}

export default HomeSlider
