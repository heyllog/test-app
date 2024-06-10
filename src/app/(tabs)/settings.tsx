import { FC } from 'react'

import { router } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'

import { Button } from 'components/button'

const Page: FC = () => (
  <View style={styles.container}>
    <Text style={styles.header}>Settings</Text>

    <Button
      text='Go back'
      onPress={() => {
        router.push('/')
      }}
    />

    <StatusBar style='auto' />
  </View>
)

export default Page

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontWeight: 'bold',
    marginBottom: 20,
    fontSize: 36,
  },
})
