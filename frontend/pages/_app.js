import { useEffect } from 'react'
import '../styles/globals.scss'
import 'tippy.js/dist/tippy.css'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.querySelector('body').classList.add('loaded')
    }
  }, [])
  return <Component {...pageProps} />
}

export default MyApp
