const formatNumber = (num: number): string => {
  if (num < 10) return `0${num}`

  return `${num}`
}

export const formatDate = (date: Date): string => {
  const hours = formatNumber(date.getHours())
  const minutes = formatNumber(date.getMinutes())
  const seconds = formatNumber(date.getSeconds())

  return `${hours}:${minutes}:${seconds}`
}
