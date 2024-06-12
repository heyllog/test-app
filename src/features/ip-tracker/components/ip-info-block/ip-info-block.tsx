import { FC } from 'react'

import { StyleProp, View, ViewStyle } from 'react-native'

import { ActiveTouchAction } from 'components/active-touch-action'
import { AppText } from 'components/app-text'
import { Block } from 'components/block'
import { LoaderCircle } from 'components/loader-circle'

import { styles } from './styles'
import type { IpInfo } from '../../types'

interface Props {
  isLoading: boolean
  isFailedLoad: boolean
  onReload?: () => void
  info?: IpInfo
  style?: StyleProp<ViewStyle>
}

export const IpInfoBlock: FC<Props> = ({ info, isFailedLoad, isLoading, onReload, style }) => {
  const isShowLoader = isLoading
  const isShowError = !isLoading && isFailedLoad
  const isShowInfo = !isShowLoader && !isShowError

  return (
    <Block style={[styles.container, style]}>
      {isShowLoader && (
        <View style={styles.messageBox}>
          <LoaderCircle size={40} />
        </View>
      )}

      {isShowError && (
        <View style={styles.messageBox}>
          <AppText style={styles.errorMessage}>Something went wrong, please try again</AppText>
          {onReload && (
            <ActiveTouchAction style={styles.reloadButton} onPress={onReload}>
              <AppText style={styles.reloadButtonText}>Reload</AppText>
            </ActiveTouchAction>
          )}
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
