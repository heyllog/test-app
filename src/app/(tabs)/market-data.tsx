import { FC } from 'react'

import { StyleSheet } from 'react-native'

import { ScreenWrapper } from 'components/screen-wrapper'
import { Chart } from 'features/price-chart'

const ProfilePage: FC = () => {
  return (
    <ScreenWrapper style={styles.container}>
      <Chart />
    </ScreenWrapper>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 0,
  },
})

export default ProfilePage
