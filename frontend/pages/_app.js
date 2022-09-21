import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import '../styles/globals.scss'
import 'tippy.js/dist/tippy.css'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import API_URL from 'config/index'
import axios from 'axios'

const defaultQueryFn = async ({ queryKey }) => {
  const { data } = await axios.get(`${API_URL}/${queryKey[0]}?populate=*`)
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
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  )
}

export default MyApp
