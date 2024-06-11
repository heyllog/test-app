import { FC } from 'react'

import { useAppSelector } from 'store/hooks'

import { styles } from './styles'
import { selectIpInfoState } from '../../store/selectors'
import { IpInfoBlock } from '../ip-info-block'

export const CurrentUserInfo: FC = () => {
  const { isFailedLoadCurrentInfo, isLoadingCurrentInfo, currentIpInfo } = useAppSelector(selectIpInfoState)

  return (
    <IpInfoBlock
      isLoading={isLoadingCurrentInfo && !currentIpInfo}
      isFailedLoad={isFailedLoadCurrentInfo}
      info={currentIpInfo}
      style={styles.baseIndent}
    />
  )
}
