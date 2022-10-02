import ErrorBoundary from 'utils/ErrorBoundary'
import NextNProgress from 'nextjs-progressbar'
import '../styles/globals.scss'
import 'tippy.js/dist/tippy.css'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import 'react-accessible-accordion/dist/fancy-example.css'
import 'animate.css/animate.min.css'

function MyApp({ Component, pageProps }) {
  return (
    <ErrorBoundary>
      <NextNProgress />
      <Component {...pageProps} />
    </ErrorBoundary>
  )
}

export default MyApp
