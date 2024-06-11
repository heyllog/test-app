import type { IpInfoResponse } from './types'
import type { IpInfo } from '../../types'

export const getFormattedLocation = (city: string, emoji: string): string => {
  if (emoji && city) return `${emoji} ${city}`

  if (city) return city

  return 'Unknown location'
}

export const mapIpInfoResponse = (data: Partial<IpInfoResponse>): IpInfo => {
  const isp = data?.connection?.isp
  const ip = data?.ip

  if (!ip) throw new Error('Incorrect user info')

  const city = data?.city || data?.region || ''
  const flagEmoji = data?.flag?.emoji || ''

  const location = getFormattedLocation(city, flagEmoji)

  return {
    location,
    isp: isp || 'Unknown ISP',
    ipAddress: ip,
  }
}
