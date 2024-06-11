import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import patchStateReducer from 'store/utils/patch-state'

export interface ImagePickerState {
  selectedImage: string
}

const initialState: ImagePickerState = {
  selectedImage: '',
}

export const imagePickerSlice = createSlice({
  name: 'ip-info',
  initialState,
  reducers: {
    setSelectedImage: (state: ImagePickerState, action: PayloadAction<string>) => {
      state.selectedImage = action.payload
    },
    patchImagePickerState: patchStateReducer<ImagePickerState>,
  },
})

export const { setSelectedImage, patchImagePickerState } = imagePickerSlice.actions
