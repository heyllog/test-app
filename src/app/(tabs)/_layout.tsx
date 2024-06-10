import React, { FC, ReactNode, useCallback } from 'react'

import { Octicons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'

import { colors } from 'theme/colors'

type IconRenderer = (args: { focused: boolean; color: string; size: number }) => ReactNode

const TabsLayout: FC = () => {
  const renderIpTrackerIcon: IconRenderer = useCallback(
    ({ color, size }) => <Octicons size={size} name='stack' color={color} />,
    [],
  )
  const renderMarketDataIcon: IconRenderer = useCallback(
    ({ color, size }) => <Octicons size={size} name='graph' color={color} />,
    [],
  )
  const renderProfileIcon: IconRenderer = useCallback(
    ({ color, size }) => <Octicons size={size} name='person' color={color} />,
    [],
  )

  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: colors.primary }}>
      <Tabs.Screen
        name='index'
        options={{
          headerTitle: 'Dashboard',
          tabBarLabel: 'Dashboard',
          tabBarIcon: renderIpTrackerIcon,
        }}
      />
      <Tabs.Screen
        name='market-data'
        options={{
          headerTitle: 'Market Data',
          tabBarLabel: 'Market Data',
          tabBarIcon: renderMarketDataIcon,
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          headerTitle: 'Profile',
          tabBarLabel: 'Profile',
          tabBarIcon: renderProfileIcon,
        }}
      />
    </Tabs>
  )
}

export default TabsLayout
