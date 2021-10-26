import {GetFeedResponseInterface} from './getFeedReponse.interface'

export interface FeedStateInterface {
  isLoading: boolean
  error: string | null
  data: GetFeedResponseInterface | null
}
