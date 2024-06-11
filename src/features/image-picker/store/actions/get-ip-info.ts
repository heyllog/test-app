// import { createAsyncThunk } from '@reduxjs/toolkit'
//
// import type { AppState } from 'store/store'
//
// import { selectIpInfoState } from '../selectors'
// import { patchImagePickerState } from '../slice'
//
// export const getIpInfo = createAsyncThunk('ip-info/get-ip-info', async (_, thunkAPI) => {
//   const { dispatch } = thunkAPI
//
//   try {
//     dispatch(
//       patchImagePickerState({
//         isLoadingInfo: true,
//         isFailedLoadInfo: false,
//       }),
//     )
//
//     const state = thunkAPI.getState() as AppState
//     const { ipAddress } = selectIpInfoState(state)
//
//     const ipInfo = await fetchUserInfoByIp(ipAddress)
//
//     dispatch(
//       patchImagePickerState({
//         ipInfo,
//         isLoadingInfo: false,
//       }),
//     )
//   } catch (e) {
//     dispatch(
//       patchImagePickerState({
//         isLoadingInfo: false,
//         isFailedLoadInfo: true,
//       }),
//     )
//   }
// })
