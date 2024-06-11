import React, { FC } from 'react'

import { StyleSheet, View, ViewProps } from 'react-native'

import { styles } from './styles'

export const Block: FC<ViewProps> = ({ style, ...props }) => {
  return <View style={StyleSheet.flatten([styles.block, style])} {...props} />
}
