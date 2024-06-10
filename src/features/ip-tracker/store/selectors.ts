import type { AppState } from 'store/store'

import type { IpInfoState } from 'features/ip-tracker/store/slice'

export const selectIpInfoState = (state: AppState): IpInfoState => state.ipInfo
