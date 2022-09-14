import Head from 'next/head'
import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Navbar from './Navbar'
import PreLoader from './PreLoader'
import GridLines from './GridLines'
import ScrollToTop from 'react-scroll-to-top'
import Footer from './Footer'

const Layout = ({ title, meta, children }) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      let timer = null
      window.onscroll = () => {
        document.body.classList.remove('hidden-scrollbar')
        if (timer !== null) {
          clearTimeout(timer)
        }
        timer = setTimeout(function () {
          document.body.classList.add('hidden-scrollbar')
        }, 1000)
      }
    }
  }, [])
  return (
    <>
      <Head>
        <title>{title ? title + ' | Picturesque' : 'Picturesque'}</title>
        {meta}
      </Head>
      <main className='relative'>
        <GridLines />
        <PreLoader />
        <ScrollToTop smooth />
        <Navbar />
        <div id='root-container'>{children}</div>
        <Footer />
      </main>
    </>
  )
}

export default Layout

Layout.defaultProps = {
  title: 'Picturesque | A street Photographer'
}

Layout.propTypes = {
  title: PropTypes.string,
  meta: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
}
