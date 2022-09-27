import React from 'react'
import PropTypes from 'prop-types'
import Layout from 'components/common/Layout'
import GridLines from 'components/common/GridLines'
import { useQuery } from '@tanstack/react-query'
import PageHeader from 'components/common/PageHeader'

const PortfolioPage = ({}) => {
  const { data: introData } = useQuery(['portfolio-intro'])
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
    </Layout>
  )
}

PortfolioPage.propTypes = {}

export default PortfolioPage
