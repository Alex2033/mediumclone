import {BackendErrorsInterface} from '@app/shared'

export interface CreateArticleStateInterface {
  isSubmitting: boolean
  validationErrors: BackendErrorsInterface | null
}
