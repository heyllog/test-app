import type { AppState } from 'store/store'

import type { ImagePickerState } from './slice'

export const selectImagePickerState = (state: AppState): ImagePickerState => state.imagePicker
