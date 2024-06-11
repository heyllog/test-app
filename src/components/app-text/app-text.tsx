import { FC } from 'react'

import { StyleSheet, Text, TextProps } from 'react-native'

import { styles } from './styles'

export const AppText: FC<TextProps> = ({ style, ...props }) => {
  return <Text style={StyleSheet.flatten([styles.text, style])} {...props} />
}
