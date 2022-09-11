import { useEffect } from 'react'
import '../styles/globals.scss'
import 'tippy.js/dist/tippy.css'
import 'react-nice-scroll/dist/styles.css'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'

function MyApp({ Component, pageProps }) {
  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     const preLoader = document.querySelector('#pre-loader')
  //     preLoader.classList.remove('flex-all')
  //     preLoader.classList.add('hidden')
  //   }
  // }, [])
  return <Component {...pageProps} />
}

export default MyApp
