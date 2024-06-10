import { FC } from 'react'

import { View } from 'react-native'

import { AppText } from 'components/app-text'
import { Block } from 'components/block'

import { styles } from './styles'
import type { IpInfo } from '../../types'

interface Props {
  isLoading: boolean
  isFailedLoad: boolean
  info?: IpInfo
}

export const IpInfoBlock: FC<Props> = ({ info, isFailedLoad, isLoading }) => {
  const isShowLoader = isLoading
  const isShowError = !isLoading && isFailedLoad
  const isShowInfo = !isShowLoader && !isShowError

  return (
    <Block style={styles.container}>
      {isShowLoader && (
        <View style={styles.messageBox}>
          <AppText>Loading...</AppText>
        </View>
      )}

      {isShowError && (
        <View style={styles.messageBox}>
          <AppText style={styles.errorMessage}>Something went wrong, please try again</AppText>
        </View>
      )}

      {isShowInfo && (
        <>
          <View style={styles.fieldContainer}>
            <AppText style={styles.fieldTitle}>IP</AppText>
            <AppText>{info?.ipAddress}</AppText>
          </View>

          <View style={styles.divider} />

          <View style={styles.fieldContainer}>
            <AppText style={styles.fieldTitle}>ISP</AppText>
            <AppText>{info?.isp}</AppText>
          </View>

          <View style={styles.divider} />

          <View style={styles.fieldContainer}>
            <AppText style={styles.fieldTitle}>Location</AppText>
            <AppText>{info?.location}</AppText>
          </View>
        </>
      )}
    </Block>
  )
}
