import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ImagePickerState {
  selectedImage: string
}

const initialState: ImagePickerState = {
  selectedImage: '',
}

export const imagePickerSlice = createSlice({
  name: 'image-picker',
  initialState,
  reducers: {
    setSelectedImage: (state: ImagePickerState, action: PayloadAction<string>) => {
      state.selectedImage = action.payload
    },
  },
})

export const { setSelectedImage } = imagePickerSlice.actions
