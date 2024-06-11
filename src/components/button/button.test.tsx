import { fireEvent, render, screen } from '@testing-library/react-native'

import { Button } from './button'

describe('Button', () => {
  test('renders correctly', () => {
    render(<Button text='Test' />)
    expect(screen.getByRole('button')).toBeOnTheScreen()
    expect(screen.getByText('Test')).toBeOnTheScreen()
  })

  test('calls onPress when pressed', () => {
    const onPressMock = jest.fn()
    const { getByText } = render(<Button text='Test' onPress={onPressMock} />)
    fireEvent.press(getByText('Test'))
    expect(onPressMock).toHaveBeenCalledTimes(1)
  })

  test('does not call onPress when disabled', () => {
    const onPressMock = jest.fn()
    const { getByText } = render(<Button text='Test' onPress={onPressMock} disabled />)
    fireEvent.press(getByText('Test'))
    expect(onPressMock).not.toHaveBeenCalled()
  })
})
