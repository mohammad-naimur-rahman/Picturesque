import React from 'react'
import PropTypes from 'prop-types'

const Comments = ({ data }) => {
  return (
    <>
      {data?.length > 0 ? (
        <section className='py-10'>
          <h2 className='text-4xl text-center text-light pb-5'>Comments</h2>
          {data?.map(({ id, attributes: { name, comment } }) => (
            <div key={id} className='px-0 md:px-5 lg:px-8 xl:px-12 py-5'>
              <h5 className='text-xl'>{name}</h5>
              <p className='pt-3 italic'>{comment}</p>
            </div>
          ))}
        </section>
      ) : null}
    </>
  )
}

Comments.propTypes = {
  data: PropTypes.array
}

export default Comments
