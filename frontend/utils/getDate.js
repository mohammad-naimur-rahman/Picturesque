/*
@params 
dateData - date string like this "YYYY-MM-DD"
*/
export default function getDate(dateData) {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  let date = new Date(dateData)
  let year = date.getFullYear()
  let month = date.getMonth()
  let day = ('' + date.getDate()).length === 1 ? '0' + date.getDate() : date.getDate()
  return `${months[month]} ${day}, ${year}`
}
