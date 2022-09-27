import React from 'react'
import Layout from 'components/common/Layout'
import GridLines from 'components/common/GridLines'
import { useQuery } from '@tanstack/react-query'
import PageHeader from 'components/common/PageHeader'
import PortfollioGrid from 'components/pages/Portfolio/PortfollioGrid'

const PortfolioPage = () => {
  const { data: introData } = useQuery(['portfolio-intro'])
  const { data: cards } = useQuery(['portfolio-cards'])
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
  return (
    <Layout title='Portfolio'>
      <GridLines />
      <PageHeader introTitle={introTitle} introDesc={introDesc} introImg={introImg} />
      <PortfollioGrid cards={cards} types={types} />
    </Layout>
  )
}

export default PortfolioPage
