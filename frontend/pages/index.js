import classNames from 'classnames'
import Layout from 'components/common/Layout'
import axiosClient from 'hooks/axaiosClient'
import dynamic from 'next/dynamic'
import PropTypes from 'prop-types'
import { useEffect } from 'react'
const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
  ssr: false
})
import Div100vh from 'react-div-100vh'
import styles from 'styles/pages/home.module.scss'

const Home = ({ slides }) => {
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
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam numquam officiis pariatur voluptatibus rerum,
        aliquam sequi quisquam cupiditate explicabo saepe repellendus incidunt. Enim, asperiores nemo. Dolor similique
        eius mollitia laboriosam facilis vitae ea sapiente, nulla iste ratione laborum! Assumenda praesentium maiores
        itaque aliquam. Sit quasi, exercitationem reprehenderit et voluptates facilis, delectus vero hic consectetur
        numquam at esse saepe suscipit ad minima libero iure ipsa fugit consequatur consequuntur dicta laboriosam quae
        fuga facere? Dignissimos eos nostrum perferendis maiores veniam saepe iste voluptate ducimus impedit, quod
        nesciunt amet ullam labore adipisci dolorum fuga eligendi, earum quis assumenda iure? Officia repudiandae quam
        voluptatum, dolor itaque ratione non eum corrupti eligendi, iure aut totam cupiditate dicta temporibus nisi
        aliquam harum veritatis amet rerum dolorum fuga facilis tempore ut. Vitae quisquam perferendis eveniet dolorem
        mollitia nam, nesciunt magnam voluptas similique obcaecati sequi, voluptatibus, saepe dolores. Consequatur
        beatae quos tempora magni ab? Voluptatem totam velit porro repudiandae alias esse numquam, voluptate itaque,
        blanditiis vero accusamus, est tenetur quod consequuntur quae impedit assumenda rerum vel incidunt magnam
        tempore magni nemo sit dolores. Mollitia quasi, veniam molestiae saepe tenetur inventore nisi nostrum
        blanditiis, quis maiores quos voluptate alias amet nesciunt hic ullam quam sunt ratione. Ullam, cum adipisci!
      </h1>
    </Layout>
  )
}

export default Home

Home.propTypes = {
  slides: PropTypes.object
}

export async function getStaticProps() {
  const slides = await axiosClient('homepage-sliders')
  return {
    props: {
      slides
    },
    revalidate: 10
  }
}
