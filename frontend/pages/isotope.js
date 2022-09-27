import { useQuery } from '@tanstack/react-query'
import Head from 'next/head'
import React from 'react'

const IsotopeReact = () => {
  const {
    data: { data }
  } = useQuery(['portfolio-cards'])
  console.log(data)
  const isotope = React.useRef()
  const [filterKey, setFilterKey] = React.useState('*')
  React.useEffect(() => {
    isotope.current = new Isotope('.filter-container', {
      itemSelector: '.filter-item',
      layoutMode: 'fitRows'
    })
    return () => isotope.current.destroy()
  }, [])
  React.useEffect(() => {
    filterKey === '*' ? isotope.current.arrange({ filter: `*` }) : isotope.current.arrange({ filter: `.${filterKey}` })
  }, [filterKey])

  const handleFilterKeyChange = key => () => setFilterKey(key)

  return (
    <>
      <Head>
        <script src='https://unpkg.com/isotope-layout@3/dist/isotope.pkgd.min.js'></script>
      </Head>
      <ul>
        <li onClick={handleFilterKeyChange('*')}>Show Both</li>
        <li onClick={handleFilterKeyChange('Wedding')}>Show Wedding</li>
        <li onClick={handleFilterKeyChange('Landscape')}>Show Landscape</li>
      </ul>
      <hr />
      <ul className='flex flex-wrap filter-container'>
        {data.map(
          ({
            id,
            attributes: {
              title,
              portfolio_types: { data },
              image: {
                data: {
                  attributes: { url, name }
                }
              }
            }
          }) => (
            <div className={`filter-item ${data[0].attributes.title} border-2 m-1 p-2`} key={id}>
              <span>{title}</span>
              <img src={url} alt={name} className='w-12 h-auto' />
            </div>
          )
        )}
      </ul>
    </>
  )
}

export default IsotopeReact
