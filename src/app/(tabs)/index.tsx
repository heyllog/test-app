import { FC, useEffect } from 'react'

import { AppTitle } from 'components/app-text'
import { ScreenWrapper } from 'components/screen-wrapper'
import { VerticalSpace } from 'components/vertical-space'
import { CurrentUserInfo, IpTracker, getCurrentIpInfo } from 'features/ip-tracker'
import { useAppDispatch } from 'store/hooks'

const MainPage: FC = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getCurrentIpInfo())
  }, [dispatch])

  return (
    <ScreenWrapper>
      <AppTitle>IP Tracker</AppTitle>
      <VerticalSpace />

      <IpTracker />
      <VerticalSpace />

      <AppTitle>Your IP Info</AppTitle>
      <VerticalSpace />

      <CurrentUserInfo />
    </ScreenWrapper>
  )
}

export default MainPage
