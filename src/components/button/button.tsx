import React, { FC } from 'react'

import { TouchableOpacityProps } from 'react-native'

import { AppText } from 'components/app-text'

import { styles } from './styles'
import { ActiveTouchAction } from '../active-touch-action'

export interface ButtonProps {
  text: string
  onPress?: () => void | TouchableOpacityProps['onPress']
}

export const Button: FC<ButtonProps> = ({ text, onPress }) => {
  return (
    <ActiveTouchAction style={styles.button} onPress={onPress}>
      <AppText style={styles.text}>{text}</AppText>
    </ActiveTouchAction>
  )
}
