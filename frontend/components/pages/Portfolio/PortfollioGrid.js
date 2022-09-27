import React from 'react'
import PropTypes from 'prop-types'
import Masonry from 'react-masonry-css'

const PortfollioGrid = ({ cards }) => {
  //TODO: Make intereractive animation for cards isotope and masonry layout
  return (
    <div className='px-2 sm:px-3 md:px-5 lg:px-8 xl:px-12 xxl:px-16 pt-10'>
      <Masonry
        breakpointCols={{
          default: 4,
          1400: 3,
          1000: 2,
          700: 1
        }}
        className='my-masonry-grid flex'
        columnClassName='my-masonry-grid_column'
      >
        {cards.map(
          ({
            id,
            attributes: {
              title,
              image: {
                data: {
                  attributes: { url, name }
                }
              }
            }
          }) => (
            <div className='m-1 p-1 show-on-mount' key={id}>
              <img src={url} alt={name} className='w-full h-auto' />
              <p className='mt-5 mb-10 text-xl font-light'>{title}</p>
            </div>
          )
        )}
      </Masonry>
    </div>
  )
}

PortfollioGrid.propTypes = {
  cards: PropTypes.array
}

export default PortfollioGrid
