import Layout from 'components/common/Layout'
import axiosClient from 'hooks/axaiosClient'
import dynamic from 'next/dynamic'
import PropTypes from 'prop-types'
//var $ = require('jquery')
if (typeof window !== 'undefined') {
  window.$ = window.jQuery = require('jquery')
}
const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
  ssr: false
})

const Home = ({ slides }) => {
  const { data: slidesData } = { ...slides }
  const options = {
    loop: true,
    dots: false,
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
      <OwlCarousel className='owl-theme' {...options}>
        {slidesData.map(({ id, attributes }) => (
          <div className='item border-2 h-[100vh]' key={id}>
            <h4>{id}</h4>
          </div>
        ))}
        {/* <div className='item border-2 h-[100vh]'>
          <h4>1</h4>
        </div>
        <div className='item border-2 h-[100vh]'>
          <h4>2</h4>
        </div>
        <div className='item border-2 h-[100vh]'>
          <h4>3</h4>
        </div>
        <div className='item border-2 h-[100vh]'>
          <h4>4</h4>
        </div>
        <div className='item border-2 h-[100vh]'>
          <h4>5</h4>
        </div>
        <div className='item border-2 h-[100vh]'>
          <h4>6</h4>
        </div>
        <div className='item border-2 h-[100vh]'>
          <h4>7</h4>
        </div>
        <div className='item border-2 h-[100vh]'>
          <h4>8</h4>
        </div>
        <div className='item border-2 h-[100vh]'>
          <h4>9</h4>
        </div>
        <div className='item border-2 h-[100vh]'>
          <h4>10</h4>
        </div>
        <div className='item border-2 h-[100vh]'>
          <h4>11</h4>
        </div>
        <div className='item border-2 h-[100vh]'>
          <h4>12</h4>
        </div> */}
      </OwlCarousel>
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
