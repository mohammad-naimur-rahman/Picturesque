import Img from 'components/common/Img'
import React from 'react'
import PropTypes from 'prop-types'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel
} from 'react-accessible-accordion'
import { AnimationOnScroll } from 'react-animation-on-scroll'

const AboutMe1st = ({ data: datas, qualities }) => {
  const {
    data: {
      attributes: {
        title,
        description,
        bg_text,
        image: {
          data: {
            attributes: { name, url }
          }
        }
      }
    }
  } = { ...datas }
  const { data: qualityArr } = { ...qualities }
  return (
    <section className='flex flex-col md:flex-row min-h-screen'>
      <div className='basis-1/2 relative h-full flex-all min-h-auto md:min-h-screen md:order-0 order-1'>
        <span className='big-text top-10 left-0'>{bg_text}</span>
        <div className='bg-white p-5 lg:p-10 xl:p-16 translate-x-0 md:translate-x-12 lg:translate-x-20 xl:translate-x-32 about-me shadow-lg'>
          <AnimationOnScroll animateIn='animate__fadeInUp'>
            <div className='dark-line'></div>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn='animate__fadeInUp' delay={200}>
            <h1 className='text-2xl lg:text-3xl xl:text-4xl xxl:text-5xl my-4 lg:my-8 font-light leading-normal'>
              {title}
            </h1>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn='animate__fadeInUp' delay={400}>
            <p className='text-base xl:text-lg mb-6 lg:mb-10 font-light leading-relaxed'>{description}</p>
          </AnimationOnScroll>
          <Accordion allowZeroExpanded={true}>
            {qualityArr?.map(({ id, attributes }, i) => (
              <AccordionItem key={id}>
                <AnimationOnScroll animateIn='animate__fadeInRight' delay={600 + i * 200}>
                  <AccordionItemHeading>
                    <AccordionItemButton>{attributes?.title}</AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>{attributes?.description}</p>
                  </AccordionItemPanel>
                </AnimationOnScroll>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
      <div className='basis-full md:basis-1/2 md:order-1 order-0'>
        <Img src={url} alt={name} className='!w-full md:w-auto min-h-full object-cover' />
      </div>
    </section>
  )
}

export default AboutMe1st

AboutMe1st.propTypes = {
  data: PropTypes.object,
  qualities: PropTypes.object
}
