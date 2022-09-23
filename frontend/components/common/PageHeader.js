import React from 'react'
import Div100vh from 'react-div-100vh'
import styles from 'styles/components/common/page-header.module.scss'

const PageHeader = () => {
  return (
    <Div100vh>
      <header className='min-h-screen'>
        <div className='flex'>
          <div className='basis-1/2'>hello</div>
          <div className='basis-1/2'>hi</div>
        </div>
      </header>
    </Div100vh>
  )
}

export default PageHeader
