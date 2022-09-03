import Head from 'next/head'
import React from 'react'
import PropTypes from 'prop-types'
import Navbar from './Navbar'

const Layout = ({ title, meta, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        {meta}
      </Head>
      <main>
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
