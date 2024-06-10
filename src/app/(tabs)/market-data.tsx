import { FC } from 'react'

import { router } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'

import { AppTitle } from 'components/app-text'
import { Button } from 'components/button'

const MarketDataPage: FC = () => (
  <View style={styles.container}>
    <AppTitle style={styles.header}>Settings</AppTitle>

    <Button
      text='Go back'
      onPress={() => {
        router.push('/')
      }}
    />

    <StatusBar style='auto' />
  </View>
)

export default MarketDataPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    marginBottom: 20,
  },
})
