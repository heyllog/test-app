import React, { FC } from 'react'

import { Image } from 'expo-image'
import { View } from 'react-native'

import { ActiveTouchAction } from 'components/active-touch-action'
import { sizes } from 'theme/sizes'

import { borderWidth, styles } from './styles'
import { imageHeight, imageWidth } from '../../constants/image-sizes'

interface Props {
  uri: string
  isSelected: boolean
  onPress: () => void
}

const widthWithoutPadding = imageWidth - sizes.blockPaddingHorizontal * 2
const heightWithoutPadding = imageHeight - sizes.blockPaddingVertical * 2

export const CarouselItem: FC<Props> = ({ uri, isSelected, onPress }) => {
  const width = isSelected ? widthWithoutPadding - borderWidth * 2 : widthWithoutPadding
  const height = isSelected ? heightWithoutPadding - borderWidth * 2 : heightWithoutPadding

  return (
    <ActiveTouchAction style={styles.container} onPress={onPress}>
      <View style={[styles.innerContainer, isSelected ? styles.selected : {}]}>
        <Image source={{ uri }} style={{ width, height, resizeMode: 'cover' }} />
      </View>
    </ActiveTouchAction>
  )
}
