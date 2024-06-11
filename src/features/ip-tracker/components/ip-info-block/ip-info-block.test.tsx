import React from 'react'

import { render } from '@testing-library/react-native'

import { IpInfoBlock } from './ip-info-block'

const info = {
  ipAddress: '123.456.789.0',
  isp: 'Test ISP',
  location: 'Test Location',
}

describe('IpInfoBlock', () => {
  test('renders loading state', () => {
    const { getByText } = render(<IpInfoBlock isLoading isFailedLoad={false} />)
    expect(getByText('Loading...')).toBeTruthy()
  })

  test('renders loading state if error', () => {
    const { getByText } = render(<IpInfoBlock isLoading isFailedLoad />)
    expect(getByText('Loading...')).toBeTruthy()
  })

  test('renders error state', () => {
    const { getByText } = render(<IpInfoBlock isLoading={false} isFailedLoad />)
    expect(getByText('Something went wrong, please try again')).toBeTruthy()
  })

  test('renders info state', () => {
    const { getByText } = render(<IpInfoBlock isLoading={false} isFailedLoad={false} info={info} />)
    expect(getByText('IP')).toBeTruthy()
    expect(getByText('123.456.789.0')).toBeTruthy()
    expect(getByText('ISP')).toBeTruthy()
    expect(getByText('Test ISP')).toBeTruthy()
    expect(getByText('Location')).toBeTruthy()
    expect(getByText('Test Location')).toBeTruthy()
  })

  test('does not render info when loading', () => {
    const { queryByText } = render(<IpInfoBlock isLoading isFailedLoad={false} info={info} />)
    expect(queryByText('IP')).toBeNull()
    expect(queryByText('123.456.789.0')).toBeNull()
    expect(queryByText('ISP')).toBeNull()
    expect(queryByText('Test ISP')).toBeNull()
    expect(queryByText('Location')).toBeNull()
    expect(queryByText('Test Location')).toBeNull()
  })

  test('does not render info when error', () => {
    const { queryByText } = render(<IpInfoBlock isLoading={false} isFailedLoad info={info} />)
    expect(queryByText('IP')).toBeNull()
    expect(queryByText('123.456.789.0')).toBeNull()
    expect(queryByText('ISP')).toBeNull()
    expect(queryByText('Test ISP')).toBeNull()
    expect(queryByText('Location')).toBeNull()
    expect(queryByText('Test Location')).toBeNull()
  })
})
