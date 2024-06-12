import React, { FC, useEffect } from 'react'

import { View, ViewStyle } from 'react-native'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
  cancelAnimation,
  Easing,
} from 'react-native-reanimated'

import { colors } from 'theme/colors'

import { styles } from './styles'

interface Props {
  size?: number
  style?: ViewStyle
  color?: string
}

export const LoaderCircle: FC<Props> = ({ size, style, color }) => {
  const rotation = useSharedValue(0)
  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotateZ: `${rotation.value}deg`,
        },
      ],
    }
  }, [rotation.value])

  useEffect(() => {
    rotation.value = withRepeat(
      withTiming(720, {
        duration: 2100,
        easing: Easing.elastic(1.2),
      }),
      0,
    )

    return (): void => cancelAnimation(rotation)
    // we shouldn't rerun rotation initialization, so we don't need it in deps array
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const circleSize = size || 100

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.wrapper,
          animatedStyles,
          { borderTopColor: color || colors.primary },
          { width: circleSize, height: circleSize, borderRadius: circleSize / 2, borderWidth: circleSize * 0.1 },
          style,
        ]}
      />
    </View>
  )
}
