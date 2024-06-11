import React, { FC, useCallback, useState } from 'react'

import { useFocusEffect } from 'expo-router'
import { View, ScrollView, Text, ScrollViewProps } from 'react-native'

import { useAppDispatch, useAppSelector } from 'store/hooks'

import { styles } from './styles'
import { imageHeight, imageWidth } from '../../constants/image-sizes'
import { images } from '../../constants/images'
import { selectImagePickerState } from '../../store/selectors'
import { setSelectedImage } from '../../store/slice'
import { CarouselItem } from '../carousel-item'

export const Carousel: FC = () => {
  const [active, setActive] = useState(0)

  const { selectedImage } = useAppSelector(selectImagePickerState)
  const dispatch = useAppDispatch()

  const onScrollChange: ScrollViewProps['onScroll'] = ({ nativeEvent }) => {
    const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width)

    if (slide !== active) {
      setActive(slide)
    }
  }

  const handleSelectImage = (uri: string) => (): void => {
    dispatch(setSelectedImage(uri))
  }

  useFocusEffect(
    useCallback(() => {
      if (!selectedImage) {
        dispatch(setSelectedImage(images[0]))
      }
    }, [selectedImage, dispatch]),
  )

  return (
    <View style={styles.container}>
      <ScrollView
        pagingEnabled
        horizontal
        onScroll={onScrollChange}
        showsHorizontalScrollIndicator={false}
        style={[styles.carousel, { width: imageWidth, height: imageHeight }]}
      >
        {images.map((image) => (
          <CarouselItem
            key={image}
            uri={image}
            isSelected={selectedImage === image}
            onPress={handleSelectImage(image)}
          />
        ))}
      </ScrollView>

      <View style={styles.pagination}>
        {images.map((i, k) => (
          <Text key={i} style={k === active ? styles.activeDot : styles.dot}>
            •
          </Text>
        ))}
      </View>
    </View>
  )
}
