import { FC, useEffect, useState } from 'react'

import { Octicons } from '@expo/vector-icons'
import NetInfo from '@react-native-community/netinfo'

import { AppText } from 'components/app-text'
import { Block } from 'components/block'
import { colors } from 'theme/colors'

import { styles } from './styles'

interface Props {}

export const NetworkError: FC<Props> = () => {
  const [isConnected, setIsConnected] = useState(true)

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      if (typeof state.isConnected === 'boolean') {
        setIsConnected(state.isConnected)
      }
    })

    return (): void => unsubscribe()
  }, [])

  if (isConnected) return null

  return (
    <Block style={styles.container}>
      <Octicons name='alert' color={colors.background} size={24} />
      <AppText style={styles.text}>Please check your internet connection.</AppText>
    </Block>
  )
}
