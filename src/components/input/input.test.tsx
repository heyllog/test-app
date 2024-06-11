// AppTextInput.test.js
import React from 'react'

import { render, fireEvent } from '@testing-library/react-native'

import { AppTextInput } from './input'
import { styles } from './styles'

describe('AppTextInput', () => {
  test('renders correctly', () => {
    const { getByTestId } = render(<AppTextInput testID='text-input' />)
    expect(getByTestId('text-input')).toBeTruthy()
  })

  test('applies custom styles', () => {
    const customStyle = { backgroundColor: 'red' }
    const { getByTestId } = render(<AppTextInput style={customStyle} testID='text-input' />)
    const textInput = getByTestId('text-input')
    expect(textInput.props.style).toEqual(expect.objectContaining(customStyle))
  })

  test('applies default styles', () => {
    const { getByTestId } = render(<AppTextInput testID='text-input' />)
    const textInput = getByTestId('text-input')
    expect(textInput.props.style).toEqual(expect.objectContaining(styles.input))
  })

  test('calls onChangeText when text is changed', () => {
    const onChangeTextMock = jest.fn()
    const { getByTestId } = render(<AppTextInput onChangeText={onChangeTextMock} testID='text-input' />)
    fireEvent.changeText(getByTestId('text-input'), 'new text')
    expect(onChangeTextMock).toHaveBeenCalledWith('new text')
  })

  test('displays the correct initial value', () => {
    const initialValue = 'Initial value'
    const { getByDisplayValue } = render(<AppTextInput value={initialValue} testID='text-input' />)
    expect(getByDisplayValue(initialValue)).toBeTruthy()
  })
})
