import React from 'react'
import { useQuery } from '@tanstack/react-query'

const QueryPage = () => {
  const { data } = useQuery(['homepage-sliders'])
  return (
    <section className='container'>
      <ul>
        {data?.data?.map(el => (
          <li key={el.id} className='text-red py-6 text-xl'>
            <div>
              <p>{el.attributes.title}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default QueryPage
