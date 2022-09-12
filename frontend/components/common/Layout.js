import Head from 'next/head'
import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Navbar from './Navbar'
import PreLoader from './PreLoader'
import GridLines from './GridLines'
import ScrollToTop from 'react-scroll-to-top'

const Layout = ({ title, meta, children }) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      var timer = null
      window.onscroll = () => {
        if (timer !== null) {
          clearTimeout(timer)
        }
        timer = setTimeout(function () {
          console.log('STOPPED SCROLLING')
        }, 500)
      }
    }
  }, [])
  return (
    <>
      <Head>
        <title>{title}</title>
        {meta}
      </Head>
      <main className='relative'>
        <GridLines />
        <PreLoader />
        <ScrollToTop smooth />
        <Navbar />
        <div id='root-container'>{children}</div>
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
