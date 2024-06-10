import React, { FC } from 'react'

import { Tabs } from 'expo-router'

const TabsLayout: FC = () => (
  <Tabs>
    <Tabs.Screen name='index' options={{ headerTitle: 'Home', tabBarLabel: 'Home' }} />
    <Tabs.Screen name='settings' options={{ headerTitle: 'Settings', tabBarLabel: 'Settings' }} />
  </Tabs>
)

export default TabsLayout
