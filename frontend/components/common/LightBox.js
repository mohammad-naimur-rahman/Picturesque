import classNames from 'classnames'
import Image from 'next/image'
import PropTypes from 'prop-types'
import React, { useRef, useState } from 'react'
import { BsFullscreen, BsFullscreenExit } from 'react-icons/bs'
import styles from 'styles/components/common/lightbox.module.scss'

const LightBox = ({ toggler, onClose, src }) => {
  const lightboxRef = useRef()
  const [fullScreenToggle, setfullScreenToggle] = useState(false)

  const handleFullscreen = () => {
    lightboxRef.current.requestFullscreen()
    setfullScreenToggle(true)
  }

  const closeFullscreen = () => {
    document.exitFullscreen()
    setfullScreenToggle(false)
  }

  const handleClose = () => {
    onClose()
    setfullScreenToggle(false)
  }

  return (
    <>
      {toggler && (
        <div
          ref={lightboxRef}
          className={classNames(
            { hidden: !toggler },
            styles.lightbox,
            'fixed inset-0 w-100 h-screen bg-bg bg-opacity-70 z-50'
          )}
        >
          <div className='absolute right-2 lg:right-6 top-2 lg:top-6 flex-all'>
            {fullScreenToggle ? (
              <BsFullscreenExit className='text-gray mr-4 w-5 h-5 cursor-pointer' onClick={closeFullscreen} />
            ) : (
              <BsFullscreen className='text-gray mr-4 w-5 h-5 cursor-pointer' onClick={handleFullscreen} />
            )}

            <Image
              src='/icons/close.svg'
              alt='close'
              height='28'
              width='28'
              className={classNames('cursor-pointer invert fill-white')}
              onClick={handleClose}
            />
          </div>
          <div className='flex-all w-full h-full'>
            <img src={src} alt={src} className='p-12 max-h-full max-w-full mx-auto' />
          </div>
        </div>
      )}
    </>
  )
}

export default LightBox

LightBox.propTypes = {
  toggler: PropTypes.bool,
  onClose: PropTypes.func,
  src: PropTypes.string
}
