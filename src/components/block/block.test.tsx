import React from 'react'

import { render } from '@testing-library/react-native'

import { Block } from './block'
import { styles } from './styles'

describe('Block', () => {
  test('renders correctly', () => {
    const { getByTestId } = render(<Block testID='block' />)
    expect(getByTestId('block')).toBeTruthy()
  })

  test('applies default styles', () => {
    const { getByTestId } = render(<Block testID='block' />)
    const block = getByTestId('block')
    expect(block.props.style).toEqual(expect.objectContaining(styles.block))
  })

  test('applies custom styles', () => {
    const customStyle = { backgroundColor: 'red' }
    const { getByTestId } = render(<Block style={customStyle} testID='block' />)
    const block = getByTestId('block')
    expect(block.props.style).toEqual(expect.objectContaining(customStyle))
  })
})
