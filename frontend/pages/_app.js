import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ErrorBoundary from 'utils/ErrorBoundary'
import API_URL from 'config'
import axios from 'axios'
import { useStore } from 'store'
import { Provider } from 'react-redux'
import NextNProgress from 'nextjs-progressbar'
import '../styles/globals.scss'
import 'tippy.js/dist/tippy.css'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import 'react-accessible-accordion/dist/fancy-example.css'
import 'animate.css/animate.min.css'

const defaultQueryFn = async ({ queryKey }) => {
  const { data } = await axios.get(`${API_URL}/${queryKey[0]}?populate=*${queryKey[1] ? '&' + queryKey[1] : ''}`)
  return data
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: defaultQueryFn,
      suspense: true
    }
  }
})

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)
  return (
    <>
      <ErrorBoundary>
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <Provider store={store}>
              <NextNProgress />
              <Component {...pageProps} />
            </Provider>
          </Hydrate>
        </QueryClientProvider>
      </ErrorBoundary>
    </>
  )
}

export default MyApp
