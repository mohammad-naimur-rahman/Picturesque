import React, { useState } from 'react'
import PropTypes from 'prop-types'
import CountUp from 'react-countup'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import { Waypoint } from 'react-waypoint'
import Img from 'components/common/Img'

const Statistics = ({ data }) => {
  const [viewPortEntered, setViewPortEntered] = useState(false)

  const onVWEnter = () => {
    setViewPortEntered(true)
  }
  const { data: statisticsArr } = { ...data }
  return (
    <div className='container py-10 lg:py-16 xl:py-24'>
      <div className='flex flex-wrap'>
        {statisticsArr.map(
          (
            {
              id,
              attributes: {
                title,
                value,
                icon: {
                  data: {
                    attributes: { name, url }
                  }
                }
              }
            },
            i
          ) => (
            <AnimationOnScroll
              key={id}
              className='text-center basis-full md:basis-1/2 lg:basis-1/4 p-8'
              animateIn='animate__fadeInUp'
              delay={i * 150}
            >
              <Img width='80' height='80' src={url} alt={name} className='!w-20 h-auto inline-block opacity-80' />
              <h2 className='text-4xl lg:text-5xl font-light text-black pt-5 pb-6'>
                <Waypoint onEnter={onVWEnter}>
                  {viewPortEntered ? <CountUp end={value} className='text-primary' /> : null}
                </Waypoint>
              </h2>
              <h3 className='font-light text-primary'>{title}</h3>
            </AnimationOnScroll>
          )
        )}
      </div>
    </div>
  )
}

Statistics.propTypes = {
  data: PropTypes.object
}

export default Statistics
