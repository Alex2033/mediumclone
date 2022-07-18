import {HttpErrorResponse} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {Router} from '@angular/router'
import {ArticleInterface} from '@app/shared'
import {createEffect, ofType, Actions} from '@ngrx/effects'
import {of} from 'rxjs'
import {switchMap, map, catchError, tap} from 'rxjs/operators'
import {CreateArticleService} from '../createArticle.service'
import {
  createArticleAction,
  createArticleSuccessAction,
  createArticleFailureAction,
} from './createArticle.action'

@Injectable()
export class CreateArticleEffect {
  createArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createArticleAction),
      switchMap(({article}) => {
        return this.createArticleService.createArticle(article).pipe(
          map((article: ArticleInterface) => {
            return createArticleSuccessAction({article})
          }),

          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              createArticleFailureAction({errors: errorResponse.error.errors})
            )
          })
        )
      })
    )
  )

  redirectAfterCreate$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(createArticleSuccessAction),
        tap(({article}) => {
          this.router.navigate(['/articles', article.slug])
        })
      ),
    {dispatch: false}
  )

  constructor(
    private actions$: Actions,
    private createArticleService: CreateArticleService,
    private router: Router
  ) {}
}
