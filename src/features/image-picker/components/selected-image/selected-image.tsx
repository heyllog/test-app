import React, { FC, useCallback } from 'react'

import { Image } from 'expo-image'
import { useFocusEffect } from 'expo-router'

import { useAppDispatch, useAppSelector } from 'store/hooks'

import { styles } from './styles'
import { imageHeight, imageWidth } from '../../constants/image-sizes'
import { images } from '../../constants/images'
import { selectImagePickerState } from '../../store/selectors'
import { setSelectedImage } from '../../store/slice'

export const SelectedImage: FC = () => {
  const { selectedImage } = useAppSelector(selectImagePickerState)
  const dispatch = useAppDispatch()

  useFocusEffect(
    useCallback(() => {
      if (!selectedImage) {
        dispatch(setSelectedImage(images[0]))
      }
    }, [selectedImage, dispatch]),
  )

  if (!selectedImage) return null

  return (
    <Image source={{ uri: selectedImage }} style={[styles.container, { width: imageWidth, height: imageHeight }]} />
  )
}
