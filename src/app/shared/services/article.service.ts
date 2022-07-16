import {HttpClient} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {Observable} from 'rxjs'
import {environment} from '@app/environments'
import {ArticleInterface, GetArticleResponseInterface} from '@app/shared/types'
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  constructor(private http: HttpClient) {}

  getArticle(slug: string): Observable<ArticleInterface> {
    const url = `${environment.apiUrl}/articles/${slug}`

    return this.http
      .get<GetArticleResponseInterface>(url)
      .pipe(map((response: GetArticleResponseInterface) => response.article))
  }

  deleteArticle(slug: string): Observable<{}> {
    const url = `${environment.apiUrl}/articles/${slug}`

    return this.http.delete<{}>(url)
  }
}
