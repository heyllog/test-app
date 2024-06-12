import { FC } from 'react'

import { useAppDispatch, useAppSelector } from 'store/hooks'

import { styles } from './styles'
import { getCurrentIpInfo } from '../../store/actions/get-ip-info'
import { selectIpInfoState } from '../../store/selectors'
import { IpInfoBlock } from '../ip-info-block'

export const CurrentUserInfo: FC = () => {
  const { isFailedLoadCurrentInfo, isLoadingCurrentInfo, currentIpInfo } = useAppSelector(selectIpInfoState)
  const dispatch = useAppDispatch()

  const handleReload = (): void => {
    void dispatch(getCurrentIpInfo())
  }

  return (
    <IpInfoBlock
      isLoading={isLoadingCurrentInfo && !currentIpInfo}
      isFailedLoad={isFailedLoadCurrentInfo}
      info={currentIpInfo}
      style={styles.baseIndent}
      onReload={handleReload}
    />
  )
}
