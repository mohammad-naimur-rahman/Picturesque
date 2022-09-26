import { useQuery } from '@tanstack/react-query'
import GridLines from 'components/common/GridLines'
import Layout from 'components/common/Layout'
import PageHeader from 'components/common/PageHeader'
import ServicesCardsContainer from 'components/pages/Services/ServicesCardsContainer'
import Testimonials from 'components/pages/Services/Testimonials'
import React from 'react'

const ServicesPage = () => {
  const { data: introData } = useQuery(['services-intro'])
  const { data: cards } = useQuery(['services-cards'])
  const { data: bg } = useQuery(['testimonail-background'])
  const { data: testimonials, isLoading } = useQuery(['testimonials'])
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
    <Layout title='Services'>
      <GridLines />
      <PageHeader introTitle={introTitle} introDesc={introDesc} introImg={introImg} />
      <ServicesCardsContainer data={cards} />
      <Testimonials bg={bg} data={testimonials} isLoading={isLoading} />
    </Layout>
  )
}

export default ServicesPage
