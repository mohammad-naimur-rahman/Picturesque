import { useQuery } from '@tanstack/react-query'
import GridLines from 'components/common/GridLines'
import Layout from 'components/common/Layout'
import PageHeader from 'components/common/PageHeader'
import ContactForm from 'components/pages/Contact/ContactForm'
import ContactMap from 'components/pages/Contact/ContactMap'
import HomeContactIntro from 'components/pages/Home/HomeContactIntro'
import React from 'react'

const ContactPage = () => {
  const { data: introData } = useQuery(['contact-us-intro'])
  const { data: contactTitle } = useQuery(['contact-us-form-intro'])
  const { data: link } = useQuery(['contact-us-map-link'])
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
    <Layout title='Contact Me'>
      <GridLines />
      <PageHeader introTitle={introTitle} introDesc={introDesc} introImg={introImg} />
      <HomeContactIntro contactTitle={contactTitle} showLink={false} />
      <ContactForm />
      <ContactMap link={link} />
    </Layout>
  )
}

export default ContactPage
