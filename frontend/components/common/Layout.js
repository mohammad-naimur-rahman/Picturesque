import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Navbar from './Navbar'
import ScrollToTop from 'react-scroll-to-top'
import Footer from './Footer'
import dynamic from 'next/dynamic'
const PreLoader = dynamic(() => import('./PreLoader'), {
  ssr: false
})

const Layout = ({ title, meta, children }) => {
  const [loadState, setloadState] = useState(false)
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

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setloadState(true)
      if (loadState) {
        document.querySelector('body').classList.add('loaded')
      }
    }
  }, [loadState])
  return (
    <>
      <Head>
        <title>{title ? title + ' | Picturesque' : 'Picturesque'}</title>
        {meta}
      </Head>
      <main className='relative'>
        {!loadState ? <PreLoader /> : null}
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
