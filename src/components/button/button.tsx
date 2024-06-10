import React, { FC } from 'react'

import { StyleProp, StyleSheet, TouchableOpacityProps, ViewStyle } from 'react-native'

import { AppText } from 'components/app-text'

import { styles } from './styles'
import { ActiveTouchAction } from '../active-touch-action'

interface ButtonProps {
  style?: StyleProp<ViewStyle>
  text: string
  onPress?: () => void | TouchableOpacityProps['onPress']
  disabled?: boolean
}

export const Button: FC<ButtonProps> = ({ style, text, onPress, disabled }) => {
  return (
    <ActiveTouchAction style={StyleSheet.flatten([styles.button, style])} onPress={onPress} disabled={disabled}>
      <AppText style={styles.text}>{text}</AppText>
    </ActiveTouchAction>
  )
}
