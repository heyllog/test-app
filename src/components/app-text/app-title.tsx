import { FC } from 'react'

import { StyleSheet, Text, TextProps } from 'react-native'

import { styles } from './styles'

export const AppTitle: FC<TextProps> = ({ style, ...props }) => {
  return <Text style={StyleSheet.flatten([styles.text, styles.title, style])} {...props} />
}
