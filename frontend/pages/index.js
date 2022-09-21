import Layout from 'components/common/Layout'
import HomeContactIntro from 'components/pages/Home/HomeContactIntro'
import HomePart1 from 'components/pages/Home/HomePart1'
import HomePart2 from 'components/pages/Home/HomePart2'
import HomePart3 from 'components/pages/Home/HomePart3'
import HomePart4 from 'components/pages/Home/HomePart4'
import HomePart5 from 'components/pages/Home/HomePart5'
import styles from 'styles/pages/home.module.scss'
import { useQuery } from '@tanstack/react-query'
import HomeSlider from 'components/pages/Home/HomeSlider'

const Home = () => {
  const { data: title } = useQuery(['home-title'])
  const { data: bgText1 } = useQuery(['home-bg-text-1'])
  const { data: bgText2 } = useQuery(['home-bg-text-2'])
  const { data: bgText3 } = useQuery(['home-bg-text-3'])
  const { data: bgText4 } = useQuery(['home-bg-text-4'])
  const { data: bgText5 } = useQuery(['home-bg-text-5'])
  const { data: image1 } = useQuery(['home-image-1'])
  const { data: image2 } = useQuery(['home-image-2'])
  const { data: image3 } = useQuery(['home-image-3'])
  const { data: image4 } = useQuery(['home-image-4'])
  const { data: image5 } = useQuery(['home-image-5'])
  const { data: image6 } = useQuery(['home-image-6'])
  const { data: image7 } = useQuery(['home-image-7'])
  const { data: contactTitle } = useQuery(['home-contact-title'])
  return (
    <Layout>
      <HomeSlider />
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
