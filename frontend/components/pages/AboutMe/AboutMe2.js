import Img from 'components/common/Img'
import React from 'react'
import PropTypes from 'prop-types'
import Tippy from '@tippyjs/react'

const AboutMe2nd = ({ data: datas, tags }) => {
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
  const { data: tagsArr } = { ...tags }
  console.log(tagsArr)
  return (
    <section className='flex flex-col md:flex-row min-h-screen'>
      <div className='basis-full md:basis-1/2 md:order-1 order-0'>
        <Img src={url} alt={name} className='!w-full md:w-auto min-h-full object-cover' />
      </div>
      <div className='basis-1/2 relative h-full flex-all min-h-auto md:min-h-screen md:order-0 order-1'>
        <span className='big-text top-10 right-0'>{bg_text}</span>
        <div className='bg-white p-5 lg:p-10 xl:p-16 -translate-x-0 md:-translate-x-12 lg:-translate-x-20 xl:-translate-x-32 about-me'>
          <div className='dark-line'></div>
          <h1 className='text-2xl lg:text-3xl xl:text-4xl xxl:text-5xl my-4 lg:my-8 font-light leading-normal'>
            {title}
          </h1>
          <p className='text-base xl:text-lg mb-6 lg:mb-10 font-light leading-relaxed'>{description}</p>
          <div className='flex flex-wrap gap-2 pt-3'>
            {tagsArr.map(({ id, attributes }) => (
              <Tippy key={id} content={attributes.tag_description} placement='bottom'>
                <span className='cursor-pointer bg-primary text-gray px-5 py-2 rounded-md text-xs uppercase'>
                  {attributes.tag}
                </span>
              </Tippy>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe2nd

AboutMe2nd.propTypes = {
  data: PropTypes.object,
  tags: PropTypes.object
}
