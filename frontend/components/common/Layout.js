import Head from 'next/head'
import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Navbar from './Navbar'
import PreLoader from './PreLoader'

const Layout = ({ title, meta, children }) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const preLoader = document.querySelector('#pre-loader')
      preLoader.classList.remove('flex-all')
      preLoader.classList.add('hidden')
    }
  }, [])
  return (
    <>
      <Head>
        <title>{title}</title>
        {meta}
      </Head>
      <main>
        <PreLoader />
        <Navbar />
        {children}
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
