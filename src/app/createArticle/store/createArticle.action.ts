import {
  ArticleInterface,
  ArticlePostBodyInterface,
  BackendErrorsInterface,
} from '@app/shared'
import {createAction, props} from '@ngrx/store'
import {ActionTypes} from './actionTypes'

export const createArticleAction = createAction(
  ActionTypes.CREATE_ARTICLE,
  props<{article: ArticlePostBodyInterface}>()
)

export const createArticleSuccessAction = createAction(
  ActionTypes.CREATE_ARTICLE_SUCCESS,
  props<{article: ArticleInterface}>()
)

export const createArticleFailureAction = createAction(
  ActionTypes.CREATE_ARTICLE_FAILURE,
  props<{errors: BackendErrorsInterface}>()
)
