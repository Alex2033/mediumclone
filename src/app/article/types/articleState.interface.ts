import {ArticleInterface} from '@app/shared/types'

export interface ArticleStateInterface {
  isLoading: boolean
  error: string | null
  data: ArticleInterface | null
}
