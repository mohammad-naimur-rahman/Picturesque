import React from 'react'
import PropTypes from 'prop-types'

const PortfollioGrid = ({ cards: cardsData, types }) => {
  const [cards, setcards] = useState(cardsData.data)

  const handleCards = cardType => {
    const newCards = cards.data.filter(el => el.attributes.portfolio_types.data[0].attributes.title === cardType)
    setcards(newCards)
  }
  return (
    <div className='container'>
      <ul className='flex'>
        <li className='mx-4 text-center my-5 cursor-pointer' onClick={() => setcards(data)}>
          All
        </li>
        {types.data.map(({ id, attributes }) => (
          <li key={id} className='mx-4 text-center my-5 cursor-pointer' onClick={() => handleCards(attributes.title)}>
            {attributes.title}
          </li>
        ))}
      </ul>
      <div className='columns-3'>
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
            <div className={`m-1 p-1 w-full show-on-mount`} key={id}>
              <img src={url} alt={name} className='w-full h-auto' />
              <p className='my-3 text-lg font-light'>{title}</p>
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
