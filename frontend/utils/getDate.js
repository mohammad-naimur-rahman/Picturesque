/*
@params 
dateData - date string like this "YYYY-MM-DD"
*/
export const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
export default function getDate(dateData, seperated = false) {
  let date = new Date(dateData)
  let year = date.getFullYear()
  let month = date.getMonth()
  let day = ('' + date.getDate()).length === 1 ? '0' + date.getDate() : date.getDate()
  if (seperated) {
    return { month: months[month], day, year }
  }
  return `${months[month]} ${day}, ${year}`
}

export const currentYear = new Date().getFullYear()
export const currentMonth = new Date().getMonth()

export function prevMonth(howMany = 1) {
  const date = new Date()
  const prevMonth = date.getMonth() - howMany
  return new Date(date.getFullYear(), prevMonth, 1)
}
