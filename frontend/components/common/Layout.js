import Head from 'next/head'
import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Navbar from './Navbar'
import PreLoader from './PreLoader'
import { ScrollContainer } from 'react-nice-scroll'

const Layout = ({ title, meta, children }) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {
        console.log('CLIE')
      })
      console.log('ASFAS')
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
        <ScrollContainer>
          <div id='root-container'>{children}</div>
        </ScrollContainer>
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
