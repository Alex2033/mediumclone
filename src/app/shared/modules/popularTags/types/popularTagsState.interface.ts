import {PopularTagType} from '@app/shared'

export interface PopularTagsStateInterface {
  data: PopularTagType[] | null
  error: string | null
  isLoading: boolean
}
