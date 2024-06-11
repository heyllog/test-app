import type { AppState } from 'store/store'

import type { IpInfoState } from './slice'

export const selectIpInfoState = (state: AppState): IpInfoState => state.ipInfo
