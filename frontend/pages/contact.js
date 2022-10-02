import GridLines from 'components/common/GridLines'
import Layout from 'components/common/Layout'
import PageHeader from 'components/common/PageHeader'
import ContactForm from 'components/pages/Contact/ContactForm'
import ContactMap from 'components/pages/Contact/ContactMap'
import HomeContactIntro from 'components/pages/Home/HomeContactIntro'
import React from 'react'
import { axiosQGetter } from 'utils/queryUtils'
import PropTypes from 'prop-types'

const ContactPage = ({ socials, introData, contactTitle, link }) => {
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
    <Layout title='Contact Me' socials={socials}>
      <GridLines />
      <PageHeader introTitle={introTitle} introDesc={introDesc} introImg={introImg} />
      <HomeContactIntro contactTitle={contactTitle} showLink={false} />
      <ContactForm />
      <ContactMap link={link} />
    </Layout>
  )
}

export default ContactPage

ContactPage.propTypes = {
  socials: PropTypes.object,
  introData: PropTypes.object,
  contactTitle: PropTypes.object,
  link: PropTypes.object
}

export async function getStaticProps() {
  const { data: socials } = await axiosQGetter('social-medias')
  const { data: introData } = await axiosQGetter('contact-us-intro')
  const { data: contactTitle } = await axiosQGetter('contact-us-form-intro')
  const { data: link } = await axiosQGetter('contact-us-map-link')
  return {
    props: {
      socials,
      introData,
      contactTitle,
      link
    },
    revalidate: 10
  }
}
