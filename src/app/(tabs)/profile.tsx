import { FC, useEffect } from 'react'

import { AppTitle } from 'components/app-text'
import { ScreenWrapper } from 'components/screen-wrapper'
import { CurrentUserInfo, getCurrentIpInfo } from 'features/ip-tracker'
import { useAppDispatch } from 'store/hooks'

const ProfilePage: FC = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getCurrentIpInfo())
  }, [dispatch])

  return (
    <ScreenWrapper>
      <AppTitle>Your IP Info</AppTitle>
      <CurrentUserInfo />
    </ScreenWrapper>
  )
}

export default ProfilePage
