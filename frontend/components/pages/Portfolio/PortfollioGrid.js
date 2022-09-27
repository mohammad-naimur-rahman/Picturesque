import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const PortfollioGrid = ({ cards: cardsData, types }) => {
  const { data: cardsArr } = { ...cardsData }
  const { data: typesArr } = { ...types }

  const [cards, setcards] = useState(cardsArr)

  const handleCards = cardType => {
    const newCards = cardsArr.filter(el => el.attributes.portfolio_types.data[0].attributes.title === cardType)
    setcards(newCards)
  }

  //TODO: Make intereractive animation for cards isotope and masonry layout
  return (
    <div className='px-2 sm:px-3 md:px-5 lg:px-8 xl:px-12 xxl:px-16'>
      <ul className='flex'>
        <li className='mx-4 text-center my-5 cursor-pointer' onClick={() => setcards(cardsArr)}>
          All
        </li>
        {typesArr.map(({ id, attributes }) => (
          <li key={id} className='mx-4 text-center my-5 cursor-pointer' onClick={() => handleCards(attributes.title)}>
            {attributes.title}
          </li>
        ))}
      </ul>
      <div className='column-1 md:columns-2 lg:columns-2 xl:columns-3 xxl:columns-4 block'>
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
      </div>
    </div>
  )
}

PortfollioGrid.propTypes = {
  cards: PropTypes.object,
  types: PropTypes.object
}

export default PortfollioGrid
