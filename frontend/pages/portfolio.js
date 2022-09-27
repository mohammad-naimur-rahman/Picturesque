import React, { useState } from 'react'
import Layout from 'components/common/Layout'
import GridLines from 'components/common/GridLines'
import { useQuery } from '@tanstack/react-query'
import PageHeader from 'components/common/PageHeader'
import PortfollioGrid from 'components/pages/Portfolio/PortfollioGrid'
import classNames from 'classnames'

const PortfolioPage = () => {
  const { data: introData } = useQuery(['portfolio-intro'])
  const { data: cardsData } = useQuery(['portfolio-cards'])
  const { data: types } = useQuery(['portfolio-types'])
  const {
    data: {
      attributes: {
        title: introTitle,
        description: introDesc,
        image: {
          data: { attributes: introImg }
        }
      }
    }
  } = { ...introData }

  const { data: cardsArr } = { ...cardsData }
  const { data: typesArr } = { ...types }

  const [cards, setcards] = useState(cardsArr)
  const [activeItem, setactiveItem] = useState('All')

  const handleCards = cardType => {
    const newCards = cardsArr.filter(el => el.attributes.portfolio_types.data[0].attributes.title === cardType)
    setcards(newCards)
    setactiveItem(cardType)
  }

  return (
    <Layout title='Portfolio'>
      <GridLines />
      <PageHeader
        introTitle={introTitle}
        introDesc={introDesc}
        introImg={introImg}
        extra={
          <ul className='flex flex-wrap self-center'>
            <li
              className={classNames(
                { 'border-b-2': activeItem === 'All' },
                'mx-2 sm:mx-4 text-center cursor-pointer py-1 text-gray'
              )}
              onClick={() => {
                setcards(cardsArr)
                setactiveItem('All')
              }}
            >
              All
            </li>
            {typesArr.map(({ id, attributes }) => (
              <li
                key={id}
                className={classNames(
                  { 'border-b-2': activeItem === attributes.title },
                  'mx-2 sm:mx-4 text-center text-gray cursor-pointer py-1'
                )}
                onClick={() => handleCards(attributes.title)}
              >
                {attributes.title}
              </li>
            ))}
          </ul>
        }
      />
      <PortfollioGrid cards={cards} />
    </Layout>
  )
}

export default PortfolioPage
