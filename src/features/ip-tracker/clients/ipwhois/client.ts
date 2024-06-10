import type { IpInfoResponse } from './types'
import { mapIpInfoResponse } from './utils'
import type { IpInfo } from '../../types'

const baseUrl = 'https://ipwho.is'

export const fetchUserInfoByIp = async (ip?: string): Promise<IpInfo> => {
  const url = new URL(ip || '', baseUrl)
  const response = await fetch(url)
  const data = (await response.json()) as Partial<IpInfoResponse>

  if (!data?.success) throw new Error('Cannot fetch info by IP')

  return mapIpInfoResponse(data)
}
