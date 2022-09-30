import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Masonry from 'react-masonry-css'
import getDate from 'utils/getDate'
import LightBox from 'components/common/LightBox'

const PortfollioGrid = ({ cards }) => {
  const [lightboxSrc, setlightboxSrc] = useState('')
  const [toggleLightbox, settoggleLightbox] = useState(false)

  const handleLightbox = src => {
    setlightboxSrc(src)
    settoggleLightbox(true)
  }

  //TODO: Make intereractive animation for cards isotope and masonry layout
  return (
    <>
      <LightBox type='image' toggler={toggleLightbox} src={lightboxSrc} onClose={() => settoggleLightbox(false)} />
      <div className='px-2 sm:px-3 md:px-5 lg:px-8 xl:px-12 xxl:px-16 pt-10'>
        <Masonry
          breakpointCols={{
            default: 4,
            1400: 3,
            1200: 2,
            900: 1
          }}
          className='my-masonry-grid flex'
          columnClassName='my-masonry-grid_column'
        >
          {cards.map(
            ({
              id,
              attributes: {
                title,
                publishedAt,
                image: {
                  data: {
                    attributes: { url, name }
                  }
                }
              }
            }) => (
              <div className='p-3 animate__animated animate__fadeInUp' key={id}>
                <img
                  src={url}
                  alt={name}
                  className='w-full h-auto cursor-pointer'
                  onClick={() => handleLightbox(url)}
                />
                <p className='mt-6 mb-4 text-xl font-light'>{title}</p>
                <p className='font-light mb-6 text-primary'>{getDate(publishedAt)}</p>
              </div>
            )
          )}
        </Masonry>
      </div>
    </>
  )
}

PortfollioGrid.propTypes = {
  cards: PropTypes.array
}

export default PortfollioGrid
