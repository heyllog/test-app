import React from 'react'

import { render } from '@testing-library/react-native'

import { AppText } from './app-text'
import { AppTitle } from './app-title'
import { styles } from './styles'

describe('AppText', () => {
  test('renders correctly', () => {
    const { getByText } = render(<AppText>Test</AppText>)
    expect(getByText('Test')).toBeTruthy()
  })

  test('applies default styles', () => {
    const { getByText } = render(<AppText>Test</AppText>)
    const block = getByText('Test')
    expect(block.props.style).toEqual(expect.objectContaining(styles.text))
  })

  test('applies custom styles', () => {
    const customStyle = { backgroundColor: 'red' }
    const { getByText } = render(<AppText style={customStyle}>Test</AppText>)
    const block = getByText('Test')
    expect(block.props.style).toEqual(expect.objectContaining(customStyle))
  })
})

describe('AppTitle', () => {
  test('renders correctly', () => {
    const { getByText } = render(<AppTitle>Test</AppTitle>)
    expect(getByText('Test')).toBeTruthy()
  })

  test('applies default styles', () => {
    const { getByText } = render(<AppTitle>Test</AppTitle>)
    const block = getByText('Test')
    expect(block.props.style).toEqual(expect.objectContaining(styles.title))
  })

  test('applies custom styles', () => {
    const customStyle = { backgroundColor: 'red' }
    const { getByText } = render(<AppTitle style={customStyle}>Test</AppTitle>)
    const block = getByText('Test')
    expect(block.props.style).toEqual(expect.objectContaining(customStyle))
  })
})
