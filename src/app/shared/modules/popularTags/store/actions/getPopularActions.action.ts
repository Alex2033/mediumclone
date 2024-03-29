import {createAction, props} from '@ngrx/store'
import {PopularTagType} from '@app/shared'
import {ActionTypes} from '../actionTypes'

export const getPopularTagsAction = createAction(ActionTypes.GET_POPULAR_TAGS)

export const getPopularTagsSuccessAction = createAction(
  ActionTypes.GET_POPULAR_TAGS_SUCCESS,
  props<{popularTags: PopularTagType[]}>()
)

export const getPopularTagsFailureAction = createAction(
  ActionTypes.GET_POPULAR_TAGS_FAILURE
)
