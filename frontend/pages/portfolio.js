import React, { useState } from 'react'
import Layout from 'components/common/Layout'
import GridLines from 'components/common/GridLines'
import PageHeader from 'components/common/PageHeader'
import PortfollioGrid from 'components/pages/Portfolio/PortfollioGrid'
import classNames from 'classnames'
import { axiosQGetter } from 'utils/queryUtils'
import PropTypes from 'prop-types'

const PortfolioPage = ({ socials, introData, cardsData, types }) => {
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
    <Layout title='Portfolio' socials={socials}>
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
PortfolioPage.propTypes = {
  socials: PropTypes.object,
  introData: PropTypes.object,
  cardsData: PropTypes.object,
  types: PropTypes.object
}

export async function getStaticProps() {
  const { data: socials } = await axiosQGetter('social-medias')
  const { data: introData } = await axiosQGetter('portfolio-intro')
  const { data: cardsData } = await axiosQGetter('portfolio-cards')
  const { data: types } = await axiosQGetter('portfolio-types')
  return {
    props: {
      socials,
      introData,
      cardsData,
      types
    },
    revalidate: 10
  }
}
