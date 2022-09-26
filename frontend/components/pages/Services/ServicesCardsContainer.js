import React from 'react'
import PropTypes from 'prop-types'

const ServicesCardsContainer = ({ data }) => {
  const { data: cardsArr } = { ...data }
  return (
    <div className='container my-10 lg:my-16 xl:my-20'>
      <div className='flex flex-wrap'>
        {cardsArr?.map(
          ({
            id,
            attributes: {
              icon: {
                data: {
                  attributes: { name, url }
                }
              },
              title,
              description
            }
          }) => (
            <div key={id} className='basis-full md:basis-1/2 xl:basis-1/3 p-5'>
              <img src={url} alt={name} className='w-12 h-auto' />
              <h2 className='text-3xl font-light mt-5 mb-8'>{title}</h2>
              <p className='font-light'>{description}</p>
            </div>
          )
        )}
      </div>
    </div>
  )
}

ServicesCardsContainer.propTypes = {
  data: PropTypes.object
}

export default ServicesCardsContainer
