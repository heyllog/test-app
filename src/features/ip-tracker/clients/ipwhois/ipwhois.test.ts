/* eslint-disable @typescript-eslint/ban-ts-comment */
import { getFormattedLocation, mapIpInfoResponse } from './utils'

describe('getFormattedLocation', () => {
  test('returns formatted location with emoji and city', () => {
    const result = getFormattedLocation('New York', '🗽')
    expect(result).toBe('🗽 New York')
  })

  test('returns city when emoji is not provided', () => {
    const result = getFormattedLocation('New York', '')
    expect(result).toBe('New York')
  })

  test('returns city when city is provided and emoji is not provided', () => {
    const result = getFormattedLocation('New York', '')
    expect(result).toBe('New York')
  })

  test('returns "Unknown location" when city and emoji are not provided', () => {
    const result = getFormattedLocation('', '')
    expect(result).toBe('Unknown location')
  })
})

describe('mapIpInfoResponse', () => {
  test('maps the response correctly when all data is provided', () => {
    const data = {
      ip: '123.456.789.0',
      city: 'New York',
      region: 'New York',
      connection: {
        isp: 'Test ISP',
      },
      flag: {
        emoji: '🗽',
      },
    }

    // @ts-ignore
    const result = mapIpInfoResponse(data)
    expect(result).toEqual({
      location: '🗽 New York',
      isp: 'Test ISP',
      ipAddress: '123.456.789.0',
    })
  })

  test('throws an error when ip is not provided', () => {
    const data = {
      city: 'New York',
      connection: {
        isp: 'Test ISP',
      },
      flag: {
        emoji: '🗽',
      },
    }

    // @ts-ignore
    expect(() => mapIpInfoResponse(data)).toThrow('Incorrect user info')
  })

  test('throws an error when data is not provided', () => {
    const data = undefined

    // @ts-ignore
    expect(() => mapIpInfoResponse(data)).toThrow('Incorrect user info')
  })

  test('sets location to "Unknown location" when city and emoji are not provided', () => {
    const data = {
      ip: '123.456.789.0',
    }

    const result = mapIpInfoResponse(data)
    expect(result).toEqual({
      location: 'Unknown location',
      isp: 'Unknown ISP',
      ipAddress: '123.456.789.0',
    })
  })

  test('sets ISP to "Unknown ISP" when isp is not provided', () => {
    const data = {
      ip: '123.456.789.0',
      city: 'New York',
      flag: {
        emoji: '🗽',
      },
    }

    // @ts-ignore
    const result = mapIpInfoResponse(data)
    expect(result).toEqual({
      location: '🗽 New York',
      isp: 'Unknown ISP',
      ipAddress: '123.456.789.0',
    })
  })
})
