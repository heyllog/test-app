import { FC } from 'react'

import { Stack } from 'expo-router'

const Page: FC = () => (
  <Stack screenOptions={{ headerShown: false }}>
    <Stack.Screen name='(tabs)' />
  </Stack>
)

export default Page
