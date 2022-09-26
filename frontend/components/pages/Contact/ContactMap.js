import React from 'react'
import PropTypes from 'prop-types'

const ContactMap = ({ link }) => {
  const {
    data: {
      attributes: { link: linkAttr }
    }
  } = { ...link }
  return (
    <div className='container my-5 lg:my-10'>
      <iframe
        src={linkAttr}
        height='450'
        style={{ border: 'none', width: '100%' }}
        allowFullScreen={true}
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
      ></iframe>
    </div>
  )
}

ContactMap.propTypes = {
  link: PropTypes.object.isRequired
}

export default ContactMap
