import {ArticleInterface} from '@app/shared'

export interface GetFeedResponseInterface {
  articles: ArticleInterface[]
  articlesCount: number
}
