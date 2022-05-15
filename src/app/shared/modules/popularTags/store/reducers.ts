import {
  getPopularTagsAction,
  getPopularTagsFailureAction,
  getPopularTagsSuccessAction,
} from './actions/getPopularActions.action'
import {Action, createReducer, on} from '@ngrx/store'
import {PopularTagsStateInterface} from '../types/popularTagsState.interface'

const initialState: PopularTagsStateInterface = {
  data: null,
  error: null,
  isLoading: false,
}

const popularTagsReducer = createReducer(
  initialState,
  on(
    getPopularTagsAction,
    (state): PopularTagsStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getPopularTagsSuccessAction,
    (state, action): PopularTagsStateInterface => ({
      ...state,
      data: action.popularTags,
      isLoading: false,
    })
  ),
  on(
    getPopularTagsFailureAction,
    (state, action): PopularTagsStateInterface => ({
      ...state,
      isLoading: false,
    })
  )
)

export function reducers(state: PopularTagsStateInterface, action: Action) {
  return popularTagsReducer(state, action)
}
