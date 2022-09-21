import axios from 'axios'
import API_URL from 'config'

export const axiosQGetter = async (url, populate = true) => {
  let fetchURL = ''
  if (populate) {
    fetchURL = `${API_URL}/${url}?populate=*`
  } else {
    fetchURL = `${API_URL}/${url}`
  }
  const res = await axios.get(fetchURL)
  return res.data
}
