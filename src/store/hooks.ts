import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import type { AppState, AppDispatch } from 'store/store'

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector
