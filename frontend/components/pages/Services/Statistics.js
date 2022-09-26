import React from 'react'
import PropTypes from 'prop-types'
import CountUp from 'react-countup'

const Statistics = ({ data }) => {
  const { data: statisticsArr } = { ...data }
  return (
    <div className='container py-10 lg:py-16 xl:py-24'>
      <div className='flex flex-wrap'>
        {statisticsArr.map(
          ({
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
          }) => (
            <div key={id} className='text-center basis-full md:basis-1/2 lg:basis-1/4'>
              <img src={url} alt={name} className='w-20 h-auto inline-block opacity-80' />
              <h2 className='text-4xl lg:text-5xl font-light text-black pt-5 pb-6'>
                <CountUp end={value} className='text-primary' />
              </h2>
              <h3 className='font-light text-primary'>{title}</h3>
            </div>
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
