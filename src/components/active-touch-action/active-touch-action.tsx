import React, { FC, PropsWithChildren } from 'react'

import { StyleProp, TouchableOpacityProps, TouchableWithoutFeedback, ViewStyle } from 'react-native'
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'

interface Props extends PropsWithChildren {
  onPress?: () => void | TouchableOpacityProps['onPress']
  onLongPress?: () => void
  style?: StyleProp<ViewStyle>
  disabled?: boolean
}

export const ActiveTouchAction: FC<Props> = ({ onPress, onLongPress, style, disabled, children }) => {
  const pressed = useSharedValue(false)

  const onTouchIn = (): void => {
    pressed.value = true
  }

  const onPressOut = (): void => {
    pressed.value = false
  }

  const handleLongPress = (): void => {
    if (onLongPress) {
      onLongPress()
    }
  }

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ scale: withTiming(pressed.value ? 0.96 : 1, { duration: 200 }) }],
  }))

  return (
    <TouchableWithoutFeedback
      accessibilityRole='button'
      onPressOut={onPressOut}
      onPressIn={onTouchIn}
      onPress={onPress}
      onLongPress={handleLongPress}
      disabled={disabled}
    >
      <Animated.View style={[animatedStyles, style]}>{children}</Animated.View>
    </TouchableWithoutFeedback>
  )
}
