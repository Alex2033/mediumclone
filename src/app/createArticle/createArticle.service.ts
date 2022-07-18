import {HttpClient} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {environment} from '@app/environments'
import {
  ArticleInterface,
  ArticlePostBodyInterface,
  SaveArticleResponseInterface,
} from '@app/shared'
import {Observable} from 'rxjs'
import {map} from 'rxjs/operators'

@Injectable({providedIn: 'root'})
export class CreateArticleService {
  constructor(private http: HttpClient) {}

  createArticle(
    article: ArticlePostBodyInterface
  ): Observable<ArticleInterface> {
    const url = environment.apiUrl + '/articles'

    return this.http
      .post<SaveArticleResponseInterface>(url, article)
      .pipe(map((response: SaveArticleResponseInterface) => response.article))
  }
}
