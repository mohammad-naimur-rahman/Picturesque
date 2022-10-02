import Layout from 'components/common/Layout'
import PageHeader from 'components/common/PageHeader'
import AboutMe1st from 'components/pages/AboutMe/AboutMe1st'
import AboutMe2nd from 'components/pages/AboutMe/AboutMe2'
import PropTypes from 'prop-types'
import React from 'react'
import { axiosQGetter } from 'utils/queryUtils'

const AboutMePage = ({ introData, socials, aboutMe1, aboutMe2, qualities, tags }) => {
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
    <Layout title='About Me' socials={socials}>
      <PageHeader introTitle={introTitle} introDesc={introDesc} introImg={introImg} />
      <AboutMe1st data={aboutMe1} qualities={qualities} />
      <AboutMe2nd data={aboutMe2} tags={tags} />
    </Layout>
  )
}

export default AboutMePage

AboutMePage.propTypes = {
  introData: PropTypes.object,
  socials: PropTypes.object,
  aboutMe1: PropTypes.object,
  aboutMe2: PropTypes.object,
  qualities: PropTypes.object,
  tags: PropTypes.object
}

export async function getStaticProps() {
  const { data: socials } = await axiosQGetter('social-medias')
  const { data: introData } = await axiosQGetter('about-me-intro')
  const { data: aboutMe1 } = await axiosQGetter('about-me-part-1')
  const { data: aboutMe2 } = await axiosQGetter('about-me-part-2')
  const { data: qualities } = await axiosQGetter('about-me-qualities')
  const { data: tags } = await axiosQGetter('about-me-tags')
  return {
    props: {
      introData,
      socials,
      aboutMe1,
      aboutMe2,
      qualities,
      tags
    },
    revalidate: 10
  }
}
