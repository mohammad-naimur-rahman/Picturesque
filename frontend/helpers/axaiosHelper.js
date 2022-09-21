import axios from 'axios'
import API_URL from 'config/index'

export const axiosGetter = async (url, populate = true) => {
  try {
    let fetchURL = ''
    if (populate) {
      fetchURL = `${API_URL}/${url}?populate=*`
    } else {
      fetchURL = `${API_URL}/${url}`
    }
    const res = await axios.get(fetchURL)
    return res.data
  } catch (err) {
    console.log(err)
    return { message: err.message, data: {} }
  }
}
