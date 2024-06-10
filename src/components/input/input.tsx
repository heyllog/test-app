import React, { FC } from 'react'

import { StyleSheet, TextInput, TextInputProps } from 'react-native'

import { styles } from './styles'

export const AppTextInput: FC<TextInputProps> = ({ style, ...props }) => {
  return <TextInput style={StyleSheet.flatten([styles.input, style])} {...props} />
}
