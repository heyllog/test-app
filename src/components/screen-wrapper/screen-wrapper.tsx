import React, { FC, PropsWithChildren } from 'react'

import { StatusBar } from 'expo-status-bar'
import { ScrollView, ScrollViewProps, StyleSheet } from 'react-native'

import { styles } from './styles'

interface Props extends ScrollViewProps {}

export const ScreenWrapper: FC<PropsWithChildren<Props>> = ({ style, children, ...props }) => {
  return (
    <ScrollView style={StyleSheet.flatten([styles.container, style])} {...props}>
      {children}
      <StatusBar style='dark' />
    </ScrollView>
  )
}