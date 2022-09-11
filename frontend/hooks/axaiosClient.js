import axios from 'axios'
import API_URL from 'config/index'

const axiosClient = async (url, populate = true) => {
  try {
    const res = await axios.get(`${API_URL}/${url}?populate=${populate}`)
    return res.data
  } catch (err) {
    console.log(err)
    return { message: err.message, data: {} }
  }
}

export default axiosClient
