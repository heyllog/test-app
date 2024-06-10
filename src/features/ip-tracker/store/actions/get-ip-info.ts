import { createAsyncThunk } from '@reduxjs/toolkit'

import type { AppState } from 'store/store'

import { fetchUserInfoByIp } from '../../clients/ipwhois/client'
import { selectIpInfoState } from '../selectors'
import { patchIpInfoState } from '../slice'

export const getIpInfo = createAsyncThunk('ip-info/get-ip-info', async (_, thunkAPI) => {
  const { dispatch } = thunkAPI

  try {
    dispatch(
      patchIpInfoState({
        isLoadingInfo: true,
        isFailedLoadInfo: false,
      }),
    )

    const state = thunkAPI.getState() as AppState
    const { ipAddress } = selectIpInfoState(state)

    const ipInfo = await fetchUserInfoByIp(ipAddress)

    dispatch(
      patchIpInfoState({
        ipInfo,
        isLoadingInfo: false,
      }),
    )
  } catch (e) {
    dispatch(
      patchIpInfoState({
        isLoadingInfo: false,
        isFailedLoadInfo: true,
      }),
    )
  }
})

export const getCurrentIpInfo = createAsyncThunk('ip-info/get-current-ip-info', async (_, thunkAPI) => {
  const { dispatch } = thunkAPI

  try {
    dispatch(
      patchIpInfoState({
        isLoadingCurrentInfo: true,
        isFailedLoadCurrentInfo: false,
      }),
    )

    const currentIpInfo = await fetchUserInfoByIp('')

    dispatch(
      patchIpInfoState({
        currentIpInfo,
        isLoadingCurrentInfo: false,
      }),
    )
  } catch (e) {
    dispatch(
      patchIpInfoState({
        isLoadingCurrentInfo: false,
        isFailedLoadCurrentInfo: true,
      }),
    )
  }
})
