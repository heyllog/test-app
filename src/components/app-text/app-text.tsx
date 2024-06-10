import { FC } from 'react'

import { Text, TextProps } from 'react-native'

import { styles } from './styles'

export const AppText: FC<TextProps> = ({ style, ...props }) => {
  return <Text style={[styles.text, style]} {...props} />
}

export const AppTitle: FC<TextProps> = ({ style, ...props }) => {
  return <Text style={[styles.text, styles.title, style]} {...props} />
}
