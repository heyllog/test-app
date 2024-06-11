import { FC, useEffect } from 'react'

import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import { preventAutoHideAsync, hideAsync } from 'expo-splash-screen'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Provider } from 'react-redux'

import { store } from 'store/store'

// Keep the splash screen visible while we fetch resources
void preventAutoHideAsync()

const RootLayout: FC = () => {
  const [fontsLoaded, fontError] = useFonts({
    Poppins: require('../../assets/fonts/Poppins.ttf'),
    'Poppins-SemiBold': require('../../assets/fonts/Poppins-SemiBold.ttf'),
  })

  useEffect(() => {
    if (fontsLoaded || fontError) {
      void hideAsync()
    }
  }, [fontsLoaded, fontError])

  if (!fontsLoaded && !fontError) {
    return null
  }

  return (
    <Provider store={store}>
      <GestureHandlerRootView>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name='(tabs)' />
        </Stack>
      </GestureHandlerRootView>
    </Provider>
  )
}

export default RootLayout
