import {ArticleInterface} from '@app/shared/types'

export interface GetFeedResponseInterface {
  articles: ArticleInterface[]
  articlesCount: number
}
