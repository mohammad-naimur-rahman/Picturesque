import GridLines from 'components/common/GridLines'
import Layout from 'components/common/Layout'
import PageHeader from 'components/common/PageHeader'
import HomeContactIntro from 'components/pages/Home/HomeContactIntro'
import ServicesCardsContainer from 'components/pages/Services/ServicesCardsContainer'
import Statistics from 'components/pages/Services/Statistics'
//import Testimonials from 'components/pages/Services/Testimonials'
import React from 'react'
import { axiosQGetter } from 'utils/queryUtils'
import PropTypes from 'prop-types'
import Testimonials from 'components/pages/Services/Testimonials'

const ServicesPage = ({ socials, introData, cards, bg, testimonials, statistics, contactTitle }) => {
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
    <Layout title='Services' socials={socials}>
      <GridLines />
      <PageHeader introTitle={introTitle} introDesc={introDesc} introImg={introImg} />
      <ServicesCardsContainer data={cards} />
      <Testimonials bg={bg} testimonials={testimonials} />
      <Statistics data={statistics} />
      <HomeContactIntro contactTitle={contactTitle} />
    </Layout>
  )
}

export default ServicesPage

ServicesPage.propTypes = {
  socials: PropTypes.object,
  introData: PropTypes.object,
  bg: PropTypes.object,
  testimonials: PropTypes.object,
  cards: PropTypes.object,
  statistics: PropTypes.object,
  contactTitle: PropTypes.object
}

export async function getStaticProps() {
  const { data: socials } = await axiosQGetter('social-medias')
  const { data: introData } = await axiosQGetter('services-intro')
  const { data: cards } = await axiosQGetter('services-cards')
  const { data: bg } = await axiosQGetter('testimonail-background')
  const { data: testimonials } = await axiosQGetter('testimonials')
  const { data: statistics } = await axiosQGetter('statistics')
  const { data: contactTitle } = await axiosQGetter('home-contact-title')
  return {
    props: {
      socials,
      introData,
      cards,
      bg,
      testimonials,
      statistics,
      contactTitle
    },
    revalidate: 10
  }
}
