import { FC, useState } from 'react'

import { View } from 'react-native'

import { Button } from 'components/button'
import { AppTextInput } from 'components/input'
import { useAppDispatch, useAppSelector } from 'store/hooks'

import { styles } from './styles'
import { getIpInfo } from '../../store/actions/get-ip-info'
import { selectIpInfoState } from '../../store/selectors'
import { setIpAddress } from '../../store/slice'
import { validateIpV4, validateIpV6 } from '../../utils/validate-ip'
import { IpInfoBlock } from '../ip-info-block'

export const IpTracker: FC = () => {
  const [isValidAddress, setIsValidAddress] = useState(true)
  const { ipInfo, isFailedLoadInfo, isLoadingInfo, ipAddress } = useAppSelector(selectIpInfoState)

  const dispatch = useAppDispatch()

  const handleChangeIp = (ip: string): void => {
    setIsValidAddress(true)
    dispatch(setIpAddress(ip))
  }

  const handleTrack = (): void => {
    if (validateIpV4(ipAddress) || validateIpV6(ipAddress)) {
      dispatch(getIpInfo())

      return
    }

    setIsValidAddress(false)
  }

  return (
    <View style={styles.baseIndent}>
      <AppTextInput placeholder='IP address' style={styles.baseIndent} onChangeText={handleChangeIp} />

      <Button
        style={styles.baseIndent}
        text={isValidAddress ? 'Check' : 'Invalid IP'}
        onPress={handleTrack}
        disabled={isLoadingInfo}
      />

      <IpInfoBlock isLoading={isLoadingInfo} isFailedLoad={isFailedLoadInfo} info={ipInfo} />
    </View>
  )
}
