import { useEffect } from 'react'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const preLoader = document.querySelector('#pre-loader')
      preLoader.classList.remove('flex-all')
      preLoader.classList.add('hidden')
    }
  }, [])
  return <Component {...pageProps} />
}

export default MyApp
