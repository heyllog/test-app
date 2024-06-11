import { configureStore } from '@reduxjs/toolkit'

import { imagePickerSlice } from 'features/image-picker'
import { ipInfoSlice } from 'features/ip-tracker'

export const store = configureStore({
  reducer: {
    ipInfo: ipInfoSlice.reducer,
    imagePicker: imagePickerSlice.reducer,
  },
})

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
