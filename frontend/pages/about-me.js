import { useQuery } from '@tanstack/react-query'
import Layout from 'components/common/Layout'
import PageHeader from 'components/common/PageHeader'
import AboutMe1st from 'components/pages/AboutMe/AboutMe1st'
import AboutMe2nd from 'components/pages/AboutMe/AboutMe2'
import React from 'react'

const AboutMePage = () => {
  const { data: introData } = useQuery(['about-me-intro'])
  const { data: aboutMe1 } = useQuery(['about-me-part-1'])
  const { data: aboutMe2 } = useQuery(['about-me-part-2'])
  const { data: qualities } = useQuery(['about-me-qualities'])
  const { data: tags } = useQuery(['about-me-tags'])
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
    <Layout title='About Me'>
      <PageHeader introTitle={introTitle} introDesc={introDesc} introImg={introImg} />
      <AboutMe1st data={aboutMe1} qualities={qualities} />
      <AboutMe2nd data={aboutMe2} qualities={qualities} tags={tags} />
    </Layout>
  )
}

export default AboutMePage
