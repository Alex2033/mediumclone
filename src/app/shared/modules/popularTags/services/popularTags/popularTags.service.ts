import {HttpClient} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {Observable} from 'rxjs'
import {map} from 'rxjs/operators'
import {PopularTagType} from '@app/shared'
import {environment} from 'src/environments/environment'
import {GetPopularTagsResponseInterface} from '../../types/getPopularTagsResponse.interface'

@Injectable()
export class PopularTagsService {
  constructor(private http: HttpClient) {}

  getPopularTags(): Observable<PopularTagType[]> {
    const url = environment.apiUrl + '/tags'

    return this.http
      .get<GetPopularTagsResponseInterface>(url)
      .pipe(map((response: GetPopularTagsResponseInterface) => response.tags))
  }
}
