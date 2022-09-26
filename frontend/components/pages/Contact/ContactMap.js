import React from 'react'
import PropTypes from 'prop-types'

const ContactMap = ({ link }) => {
  return (
    <div>
      <iframe
        src={link}
        width='600'
        height='450'
        style='border:0;'
        allowfullscreen=''
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
      ></iframe>
    </div>
  )
}

ContactMap.propTypes = {
  link: PropTypes.string.isRequired
}

export default ContactMap
