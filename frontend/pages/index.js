import Layout from 'components/common/Layout'
import HomeContactIntro from 'components/pages/Home/HomeContactIntro'
import HomePart1 from 'components/pages/Home/HomePart1'
import HomePart2 from 'components/pages/Home/HomePart2'
import HomePart3 from 'components/pages/Home/HomePart3'
import HomePart4 from 'components/pages/Home/HomePart4'
import HomePart5 from 'components/pages/Home/HomePart5'
import styles from 'styles/pages/home.module.scss'
//import HomeSlider from 'components/pages/Home/HomeSlider'
import GridLines from 'components/common/GridLines'
import { axiosQGetter } from 'utils/queryUtils'
import PropTypes from 'prop-types'

const Home = ({
  socials,
  title,
  bgText1,
  bgText2,
  bgText3,
  bgText4,
  bgText5,
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  contactTitle
}) => {
  return (
    <Layout socials={socials}>
      <GridLines />
      {/* <HomeSlider /> */}
      <section className={styles['home']}>
        <HomePart1 title={title} bgText1={bgText1} image1={image1} image2={image2} />
        <HomePart2 bgText2={bgText2} image3={image3} />
        <HomePart3 bgText3={bgText3} image4={image4} />
        <HomePart4 bgText4={bgText4} image5={image5} />
        <HomePart5 image6={image6} image7={image7} />
        <HomeContactIntro bgText5={bgText5} contactTitle={contactTitle} />
      </section>
    </Layout>
  )
}

export default Home

Home.propTypes = {
  socials: PropTypes.object,
  title: PropTypes.object,
  bgText1: PropTypes.object,
  bgText2: PropTypes.object,
  bgText3: PropTypes.object,
  bgText4: PropTypes.object,
  bgText5: PropTypes.object,
  image1: PropTypes.object,
  image2: PropTypes.object,
  image3: PropTypes.object,
  image4: PropTypes.object,
  image5: PropTypes.object,
  image6: PropTypes.object,
  image7: PropTypes.object,
  contactTitle: PropTypes.object
}

export async function getStaticProps() {
  const { data: socials } = await axiosQGetter('social-medias')
  const { data: title } = await axiosQGetter('home-title')
  const { data: bgText1 } = await axiosQGetter('home-bg-text-1')
  const { data: bgText2 } = await axiosQGetter('home-bg-text-2')
  const { data: bgText3 } = await axiosQGetter('home-bg-text-3')
  const { data: bgText4 } = await axiosQGetter('home-bg-text-4')
  const { data: bgText5 } = await axiosQGetter('home-bg-text-5')
  const { data: image1 } = await axiosQGetter('home-image-1')
  const { data: image2 } = await axiosQGetter('home-image-2')
  const { data: image3 } = await axiosQGetter('home-image-3')
  const { data: image4 } = await axiosQGetter('home-image-4')
  const { data: image5 } = await axiosQGetter('home-image-5')
  const { data: image6 } = await axiosQGetter('home-image-6')
  const { data: image7 } = await axiosQGetter('home-image-7')
  const { data: contactTitle } = await axiosQGetter('home-contact-title')
  return {
    props: {
      socials,
      title,
      bgText1,
      bgText2,
      bgText3,
      bgText4,
      bgText5,
      image1,
      image2,
      image3,
      image4,
      image5,
      image6,
      image7,
      contactTitle
    },
    revalidate: 10
  }
}
