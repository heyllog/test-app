import { FC } from 'react'

import { AppTitle } from 'components/app-text'
import { ScreenWrapper } from 'components/screen-wrapper'
import { SelectedImage } from 'features/image-picker'
import { CurrentUserInfo } from 'features/ip-tracker'

const ProfilePage: FC = () => {
  return (
    <ScreenWrapper>
      <AppTitle>Your IP Info</AppTitle>
      <CurrentUserInfo />

      <AppTitle>Selected Image</AppTitle>
      <SelectedImage />
    </ScreenWrapper>
  )
}

export default ProfilePage
