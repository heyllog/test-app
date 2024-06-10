import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import patchStateReducer from 'store/utils/patch-state'

import type { IpInfo } from '../types'

export interface IpInfoState {
  ipAddress: string

  isLoadingInfo: boolean
  isFailedLoadInfo: boolean
  isLoadingCurrentInfo: boolean
  isFailedLoadCurrentInfo: boolean

  ipInfo?: IpInfo
  currentIpInfo?: IpInfo
}

const initialState: IpInfoState = {
  ipAddress: '',

  isLoadingInfo: false,
  isFailedLoadInfo: false,
  isLoadingCurrentInfo: false,
  isFailedLoadCurrentInfo: false,
}

export const ipInfoSlice = createSlice({
  name: 'ip-info',
  initialState,
  reducers: {
    setIpAddress: (state: IpInfoState, action: PayloadAction<string>) => {
      state.ipAddress = action.payload
    },
    patchIpInfoState: patchStateReducer<IpInfoState>,
  },
})

export const { setIpAddress, patchIpInfoState } = ipInfoSlice.actions
